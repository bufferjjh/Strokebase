import pickle

f = open("model.pickle", "rb")
model = pickle.load(f)
f.close()
