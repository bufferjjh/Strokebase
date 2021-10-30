import math
import pandas as pd
import numpy as np
import sklearn
import sklearn.model_selection
from sklearn.linear_model import LogisticRegression
import pickle
df = pd.read_csv('healthcare-dataset-stroke-data.csv')
#print(df['hypertension'])
#drop incomplete or unknown data
df=df[df['smoking_status']!='Unknown']
df.dropna(subset=['bmi'], inplace = True)
df.drop(['id'], 1, inplace= True)
#encode data into numerical values
df['gender']=df['gender'].apply(lambda x : 1 if x=='Male' else 0)
df["Residence_type"] = df["Residence_type"].apply(lambda x: 1 if x=="Urban" else 0)
df["ever_married"] = df["ever_married"].apply(lambda x: 1 if x=="Yes" else 0)

to_encode = df[['smoking_status', 'work_type']]
df.drop(['smoking_status', 'work_type'], inplace = True, axis = 1)
to_encode = pd.get_dummies(to_encode)

#merge dataframes
df = df.merge(to_encode, left_index = True, right_index = True, how = 'left')

predicting = np.array(df.drop(['stroke'], 1));
result = np.array(df['stroke'])

x_train, x_test,y_train, y_test = sklearn.model_selection.train_test_split(predicting,result,test_size = 0.1)

#LogisticReg = sklearn.linear_model.LogisticRegression(max_iter = 2 ** 31)
#LogisticReg.fit(x_train, y_train)

'''
test_arr = [1.,   79.,    1.,    0.,    1.,    1.,   83.07, 26.5,   0.,    0.,    1.,    0.,
  0.,    0. ,   1.,    0.]
test_arr = np.array(test_arr)

out = open("model.pickle","wb")
pickle.dump(LogisticReg, out)
out.close()
'''

bestModel = 0
bestAcc = 0

for i in range(100):
    LogisticReg = sklearn.linear_model.LogisticRegression(max_iter = 2 ** 31)
    LogisticReg.fit(x_train, y_train)
    score = LogisticReg.score(x_test, y_test)
    if(score > bestAcc):
        bestAcc = score
        bestModel = LogisticReg
    print(i, end='\r')
out = open("model.pickle","wb")
pickle.dump(bestModel, out)
out.close()
