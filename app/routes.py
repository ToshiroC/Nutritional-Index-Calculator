from app import app
from flask import render_template, request

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/results", methods=["POST"])
def results():
    dish = request.form["dish"]
    # Scrape the internet for nutritional information of the dish
    # Calculate the health score of the dish
    # Replace this line with your own code
    health_score = "Your health score for the dish '{}' will go here".format(dish)
    return render_template("results.html", dish=dish, health_score=health_score)

if __name__ == "__main__":
    app.run(debug=True)