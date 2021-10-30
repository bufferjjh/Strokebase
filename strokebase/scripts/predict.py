import pickle

f = open("model.pickle", "rb")
model = pickle.load(f)
f.close()

def predict(n_arr):
    res = model.predict([n_arr])
    prob = model.predict_proba([n_arr])[0]
    if(res[0] == 0):
        prob = prob[0]
    else:
        prob = prob[1]
    #returns prediction and confidence
    return [res[0], prob]
