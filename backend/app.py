from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
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


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Flask API!"})


@app.route("/get", methods=["GET"])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)


@app.route("/get/<id>", methods=["GET"])
def get_single_article(id):
    print("Getting article with ID: {id}")
    article = Articles.query.get(id)
    if article:
        return article_schema.jsonify(article)
    else:
        return jsonify({"error": "Article not found"}), 404


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


@app.route("/update/<id>", methods=["PUT"])
def update_article(id):
    article = Articles.query.get(id)
    if not article:
        return jsonify({"error": "Article not found"}), 404

    title = request.json.get("title")
    body = request.json.get("body")

    if not title or not body:
        return jsonify({"error": "Title and body are required"}), 400

    article.title = title
    article.body = body
    db.session.commit()
    return article_schema.jsonify(article)


@app.route("/delete/<id>", methods=["DELETE"])
def delete_article(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify({"msg": "Delete Successful!"})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", debug=True)
