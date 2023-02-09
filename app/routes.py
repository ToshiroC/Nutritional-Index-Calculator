from app import app
from flask import render_template, request

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/results', methods=['GET', 'POST'])
def results():
    dish = request.form.get('dish')
    health_score = calculate_health_score(dish)
    return render_template('results.html', dish=dish, health_score=health_score)

def calculate_health_score(dish):
    # Your code to calculate health score goes here
    return health_score