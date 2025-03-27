from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os
from routes.auth_routes import auth_routes
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = os.getenv("SECRET_KEY")
jwt = JWTManager(app)

app.register_blueprint(auth_routes, url_prefix="/api")

@app.route("/", methods=["GET"])
def home():
    return {"message": "Flask Backend is Running!"}

if __name__ == "__main__":
    app.run(debug=True, port=int(os.getenv("PORT", 8080)))
