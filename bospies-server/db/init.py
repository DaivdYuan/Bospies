from db.models import db, User, Post, Group
from utils import post_to_dict, post_from_dict
import json

def initialize_database(app):
    with app.app_context():
        db.init_app(app)
        db.create_all()

        # if admin user does not exist, create one
        if not User.query.filter_by(username='admin').first():
            admin = User(username='admin', email='admin@example.com', password='adminpassword')
            db.session.add(admin)
            db.session.commit()
        else:
            admin = User.query.filter_by(username='admin').first()

        # if no posts exist, create two dummy posts
        if not Post.query.count() > 0: 
            add_dummy_posts(db, "db/json/homepage_posts.json", admin)
            db.session.commit() 

        # if no groups exist, create two dummy groups
        if not Group.query.count() > 0:
            add_dummy_groups(db, "db/json/user_groups.json", admin)
            db.session.commit()

def add_dummy_posts(db, json_file, admin):
    import json
    with open(json_file, 'r') as f:
        posts = json.load(f)
        for post in posts:
            cur_post = post_from_dict(post)
            db.session.add(cur_post)
            db.session.commit()

            for image in post['images']:
                cur_post.add_image(image)
                db.session.commit()

            for comment in post['comments']:
                cur_post.add_comment(comment['username'], comment['date'], comment['time'], comment['body'])
                db.session.commit()
                 
    
def add_dummy_groups(db, json_file, admin):
    added_dummy_post = False

    with open(json_file, 'r') as f:
        groups = json.load(f)
        for group in groups:
            cur_group = Group.create_group(group)

            if not added_dummy_post:
                add_dummy_group_post(db, "db/json/group_posts.json", cur_group)
                added_dummy_post = True

def add_dummy_group_post(db, json_file, group):
    with open(json_file, 'r') as f:
        posts = json.load(f)
        for post in posts:
            cur_post = post_from_dict(post, type='group_post')
            cur_post.group = group
            cur_post.in_group_id = group.get_posts_count() + 1

            db.session.add(cur_post)
            db.session.commit()

            for comment in post['comments']:
                cur_post.add_comment(comment['username'], comment['date'], comment['time'], comment['body'])
                db.session.commit()
