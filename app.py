from flask import Flask, render_template, json
import main
app = Flask(__name__)

@app.route("/")
def hello_world():
    main.set_cloud()
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")

app.run()
