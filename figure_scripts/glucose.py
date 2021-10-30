import pandas as pd
import matplotlib.pyplot as plt
import math
df = pd.read_csv('healthcare-dataset-stroke-data.csv')

stroke = []
no_stroke = []

for i in range(len(df['avg_glucose_level'])):
    if(math.isnan(df['avg_glucose_level'][i])):
        continue
    if(df['stroke'][i] == 1):
        stroke.append(df['avg_glucose_level'][i])
    elif(df['stroke'][i] == 0):
        no_stroke.append(df['avg_glucose_level'][i])


plt.boxplot([stroke, no_stroke], vert = False, labels = ["stroke", "no stroke"])
plt.xlabel("Average Glucose Level - mg/dl")

plt.savefig('glucose-stroke.png')
