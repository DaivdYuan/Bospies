from db.models import Post

def post_to_dict(post):
    return {
        "id": post.id,
        "title": post.title,
        "username": post.username,
        "body": post.body,
        "date": post.date,
        "time": post.time,
        "program": post.program,
        "type": post.types,
        "images": [],
        "comments": [],
        "users_joined": [],
    }


def post_from_dict(post):
    return Post(
        title=post["title"],
        username=post["username"],
        body=post["body"],
        date=post["date"],
        time=post["time"],
        program=post["program"],
        types=post["type"],
    )

def post_from_dict_key(post):
    return Post(
        title=post["title"],
        username=post["username"],
        body=post["body"],
        date="",
        time="",
        program=post["program"],
        types=post["type"],
    )