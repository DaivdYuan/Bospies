from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    @staticmethod
    def create_user(username, email, password):
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()

    @staticmethod
    def get_user_by_id(user_id):
        return User.query.get(user_id)

    @staticmethod
    def get_user_by_username(username):
        return User.query.filter_by(username=username).first()

    @staticmethod
    def get_user_by_email(email):
        return User.query.filter_by(email=email).first()
    
    @staticmethod
    def get_groups_by_user(user_id):
        user = User.query.get(user_id)
        if user:
            return user.groups
        else:
            return []

# Post model
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(50), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.Text, nullable=False)
    time = db.Column(db.Text, nullable=False)
    program = db.Column(db.String(100), nullable=False)
    #tags = db.Column(db.String(500))
    types = db.Column(db.String(500), nullable=False)

    author = db.relationship('User', backref=db.backref('posts', lazy=True))
     
    @staticmethod
    def get_post_by_id(post_id):
        return Post.query.get(post_id)

    @staticmethod
    def get_all_posts():
        return Post.query.all()
    
    @staticmethod
    def get_posts_by_tag(tag):
        return Post.query.filter(Post.tags.like(f"%<{tag}>%")).all()

# UserGroup model
user_group = db.Table('user_group',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('group_id', db.Integer, db.ForeignKey('group.id'), primary_key=True)
)

# Group model
class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    members = db.relationship('User', secondary='user_group', backref=db.backref('groups', lazy=True))


    @staticmethod
    def create_group(name):
        group = Group(name=name)
        db.session.add(group)
        db.session.commit()

    @staticmethod
    def get_group_by_id(group_id):
        return Group.query.get(group_id)

    @staticmethod
    def get_all_groups():
        return Group.query.all()

    @staticmethod
    def get_users_by_group(group_id):
        group = Group.query.get(group_id)
        if group:
            return group.members
        else:
            return []
