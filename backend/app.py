from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost:3306/flask"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db = SQLAlchemy(app)
ma = Marshmallow(app)


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body


class ArticleSchema(ma.Schema):
    class Meta:
        fields = ("id", "title", "body", "date")


article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


@app.route("/get", methods=["GET"])
def get_articles():
    return jsonify({"Hello": "World"})


@app.route("/add", methods=["POST"])
def add_article():
    try:
        title = request.json.get("title")
        body = request.json.get("body")

        if not title or not body:
            return jsonify({"error": "Title and body are required"}), 400

        articles = Articles(title, body)
        db.session.add(articles)
        db.session.commit()
        return article_schema.jsonify(articles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    print("Database tables created successfully.")
