import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv('healthcare-dataset-stroke-data.csv')

#stroke, total
hypertension = [0,0]
no_hypertension = [0,0]

for i in range(len(df['stroke'])):
    if(df['hypertension'][i] == 0):
        no_hypertension[1] += 1
        if(df['stroke'][i] == 1):
            no_hypertension[0] += 1
    elif(df['hypertension'][i] == 1):
        hypertension[1] += 1
        if(df['stroke'][i] == 1):
            hypertension[0] += 1

hypertension_percentage = (hypertension[0]/hypertension[1]) * 100
no_hypertension_percentage = (no_hypertension[0]/no_hypertension[1]) * 100
labels = ["No","Yes"]

plt.xlabel("Does the subject have Hypertension?")
plt.ylabel("Percentage of stroke (%)")
plt.title("Hypertension and stroke")
plt.bar(labels, [no_hypertension_percentage,hypertension_percentage])
plt.savefig("hypertension-stroke.png")
