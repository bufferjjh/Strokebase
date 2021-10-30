import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv('healthcare-dataset-stroke-data.csv')
strokeAge = [0] * 9
totalAge = [0] * 9
#0-9,10-19,....80-89
for i in range(len(df['age'])):
    #seperate into bins
    currAge = int(round(df['age'][i]))
    totalAge[currAge//10] += 1
    strokeAge[currAge//10] += df['stroke'][i]

perc = []
anno = []
for i in range(9):
    perc.append((strokeAge[i]/totalAge[i]) * 100)
    anno.append(str(strokeAge[i]) + "/" + str(totalAge[i]))
x = ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80-89']

plt.xlabel("Age ranges")
plt.ylabel("Percentage of stroke (%)")
plt.title("Age and stroke percentage in dataset")
plt.bar(x,perc)
plt.savefig("age-stroke.png")
