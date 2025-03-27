from flask import Blueprint, request, jsonify
from models.user_model import User
import jwt
import os
from dotenv import load_dotenv
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

load_dotenv()
auth_routes = Blueprint("auth_routes", __name__)

# Register
@auth_routes.route("/register", methods=["POST"])
def register():
    data = request.json
    if not data.get("email") or not data.get("password") or not data.get("username"):
        return jsonify({"message": "All fields are required"}), 400

    if User.find_by_email(data["email"]):
        return jsonify({"message": "User already exists"}), 400

    User.create_user(data["username"], data["email"], data["password"])
    return jsonify({"message": "User registered successfully"}), 201

# Login
@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.find_by_email(data["email"])
    
    if not user or not User.check_password(user["password"], data["password"]):
        return jsonify({"message": "Invalid email or password"}), 400

    token = create_access_token(identity={"username": user["username"], "email": user["email"]})
    return jsonify({"token": token, "message": "Login successful"}), 200

# Protected Route
@auth_routes.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"message": "Access granted", "user": current_user}), 200
