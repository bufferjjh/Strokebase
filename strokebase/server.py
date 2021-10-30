from flask import Flask, request, render_template
from flask import jsonify
from scripts.predict import predict
import numpy as np
import os
app = Flask(__name__,template_folder='templates',static_folder='static')

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/questions")
def questions():
    return render_template("questions.html")

@app.route("/figures")
def figures():
    return render_template("figures.html")

@app.route('/questions', methods=['POST'])
def result():
    val = list(map(float, request.form['arrayContent'].split(',')))
    #convert into numpy array
    arr = [0] * 16
    for i in range(3):
        arr[i] = val[i]
    arr[3] = val[-1]
    arr[4] = val[3]
    arr[5] = val[4]
    arr[6] = val[5]
    arr[7] = val[6]

    ss = val[7]
    if(ss == 0):
        #never smoked
        arr[9] = 1
    elif(ss == 1):
        #former
        arr[8] = 1
    elif(ss == 2):
        #current
        arr[10] = 1

    ws = val[8]
    if(ws == 2):
        arr[11] = 1
    elif(ws == 3):
        arr[13] = 1
    elif(ws == 4):
        arr[14] = 1
    elif(ws == 5):
        arr[15] = 1
    elif(ws == 6):
        arr[12] = 1
    arr = np.array(arr)
    p = predict(arr)
    color = "#42f551"
    msg = "Low"
    p[1] *= 100
    p[1] = str(p[1])
    if(len(p[1]) > 5):
        p[1] = p[1][0:5]
    p[1] = str(p[1]) + '%'
    if(p[0] == 1):
        msg = "High"
        color = "#e81a4a"
    return render_template("prediction.html", low_high = msg, color1 = color, confidence = p[1])
'''
@app.route('/prediction')
def p():
    return render_template("prediction.html")
'''
port = int(os.environ.get('PORT', 5000))
app.run(host='0.0.0.0', port = port, debug = True)
