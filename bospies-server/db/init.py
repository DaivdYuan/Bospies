from db.models import db, User, Post, Group
from utils import post_to_dict, post_from_dict

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

def add_dummy_posts(db, json_file, admin):
    import json
    with open(json_file, 'r') as f:
        posts = json.load(f)
        for post in posts:
            cur_post = post_from_dict(post)
            db.session.add(cur_post)
            db.session.commit()
