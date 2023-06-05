from db.models import Post, GroupPost

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
        "images": post.get_all_images(),
        "comments": post.get_all_comments(),
        "users_joined": [],
    }


def post_from_dict(post, type="post"):
    if type == "post":
        post = Post(
            title=post["title"],
            username=post["username"],
            body=post["body"],
            date=post["date"],
            time=post["time"],
            program=post["program"],
            types=post["type"],
        )
    elif type == "group_post":
        post = GroupPost(
            title=post["title"],
            username=post["username"],
            body=post["body"],
            date=post["date"],
            time=post["time"],
            program=post["program"],
            types=post["type"],
        )
    return post


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