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

@app.route("/groups/")
def groups():
    groups = Group.get_all_groups()
    group_list = []
    for group in groups:
        group_list.append(group.name)

    return jsonify(groups=group_list)

@app.route("/post/<int:post_id>")
def get_post(post_id):
    post = Post.get_post_by_id(post_id)
    post_dict = post_to_dict(post)
    return jsonify(post=post_dict)

@app.route("/group/<int:group_id>/posts")
def get_group(group_id):
    group = Group.get_group_by_id(group_id)
    posts = group.get_all_posts()
    post_list = []
    for post in posts:
        post_dict = post_to_dict(post)
        post_list.append(post_dict)

    return jsonify(posts=post_list)

@app.route("/gtoup/<int:group_id>/post/<int:post_id>")
def get_group_post(group_id, post_id):
    pass

@app.route("/upload/post", methods=["POST"])
def upload_posts():
    post = request.get_json()
    post = post_from_dict_key(post)
    db.session.add(post)
    db.session.commit()
    return jsonify(success=True)

@app.route("/upload/comment", methods=["POST"])
def upload_comment():
    comment = request.get_json()
    post = Post.get_post_by_id(comment['post_id'])
    post.add_comment(comment['username'], comment['date'], comment['time'], comment['body'])
    db.session.commit()
    return jsonify(success=True)

@app.route("/upload/new-group", methods=["POST"])
def upload_new_group():
    group = request.get_json()
    print(group)
    group_name = group['name']
    
    # Check if group already exists
    if Group.get_group_by_name(group_name):
        return jsonify(success=False)
    
    Group.create_group(group_name)
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=6001)
