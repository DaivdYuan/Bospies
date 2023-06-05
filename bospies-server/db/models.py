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
    types = db.Column(db.String(500), nullable=False)

    images = db.relationship('PostImage', backref='post', lazy=True)
    author = db.relationship('User', backref='posts', lazy=True)
    comments = db.relationship('PostComment', backref='post', lazy=True)

    @staticmethod
    def get_post_by_id(post_id):
        return Post.query.get(post_id)

    @staticmethod
    def get_all_posts():
        return Post.query.all()
    
    @staticmethod
    def get_posts_by_tag(tag):
        return Post.query.filter(Post.tags.like(f"%<{tag}>%")).all()

    def add_image(self, image_path):
        post_image = PostImage(image_path=image_path, post=self)
        db.session.add(post_image)
        db.session.commit()

    def add_comment(self, username, date, time, body):
        post_comment = PostComment(username=username, date=date, time=time, body=body, post=self)
        db.session.add(post_comment)
        db.session.commit()

    def get_all_images(self):
        return [image.image_path for image in self.images] if self.images else []

    def get_all_comments(self):
        return [{
            'username': comment.username,
            'date': comment.date,
            'time': comment.time,
            'body': comment.body
        } for comment in self.comments] if self.comments else []
    
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
    posts = db.relationship('GroupPost', backref='group', lazy=True)

    @staticmethod
    def create_group(name):
        group = Group(name=name)
        db.session.add(group)
        db.session.commit()

        group.create_welcome_post()

        return group

    @staticmethod
    def get_group_by_id(group_id):
        return Group.query.get(group_id)

    @staticmethod
    def get_group_by_name(name):
        return Group.query.filter_by(name=name).first()

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
        
    def create_welcome_post(self):
        group_post = GroupPost(
            title=f"Welcome to {self.name}!", 
            username="Bospies", 
            date="", time="00:00:00", 
            body=f"Welcome to {self.name}! This is the first post in this group.", 
            program="Bospies", 
            types="Welcome", 
            group=self,
            in_group_id=1
        )
        db.session.add(group_post)
        db.session.commit()


    def create_post(self, group_post):
        db.session.add(group_post)
        db.session.commit()

    def get_posts_count(self):
        return len(self.posts)

    def get_all_posts(self):
        return GroupPost.query.filter_by(group=self).all()
    
    def get_post_by_id(self, post_id):
        return GroupPost.query.filter_by(group=self, in_group_id=post_id).first()

class GroupPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    in_group_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(50), nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.Text, nullable=False)
    time = db.Column(db.Text, nullable=False)
    program = db.Column(db.String(100), nullable=False)
    types = db.Column(db.String(500), nullable=False)

    comments = db.relationship('PostComment', backref='group_post', lazy=True)

    def get_all_images(self):
        return []

    def get_all_comments(self):
        return [{
            'username': comment.username,
            'date': comment.date,
            'time': comment.time,
            'body': comment.body
        } for comment in self.comments] if self.comments else []

    def add_comment(self, username, date, time, body):
        post_comment = PostComment(username=username, date=date, time=time, body=body, group_post=self)
        db.session.add(post_comment)
        db.session.commit()

class PostImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    image_path = db.Column(db.String(100), nullable=False)

class PostComment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    group_post_id = db.Column(db.Integer, db.ForeignKey('group_post.id'))
    username = db.Column(db.String(50), nullable=False)
    date = db.Column(db.Text, nullable=False)
    time = db.Column(db.Text, nullable=False)
    body = db.Column(db.Text, nullable=False)


    