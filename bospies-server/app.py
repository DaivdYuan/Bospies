from flask import Flask, render_template, request
from db.init import initialize_database
from db.models import db, User, Post, Group
from flask import jsonify

from utils import post_to_dict, post_from_dict, post_from_dict_key

app = Flask(__name__)

# CORS
from flask_cors import CORS

CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///bospies.db"
initialize_database(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/posts/")
def posts():
    posts = Post.get_all_posts()
    post_list = []
    for post in posts:
        post_dict = post_to_dict(post)
        post_list.append(post_dict)

    return jsonify(posts=post_list)

@app.route("/upload/post", methods=["POST"])
def upload_posts():
    post = request.get_json()
    post = post_from_dict_key(post)
    db.session.add(post)
    db.session.commit()
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=6001)
