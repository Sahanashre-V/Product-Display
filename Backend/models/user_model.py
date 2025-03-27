from werkzeug.security import generate_password_hash, check_password_hash
from database import users_collection

class User:
    @staticmethod
    def create_user(username, email, password):
        hashed_password = generate_password_hash(password)
        user_data = {"username": username, "email": email, "password": hashed_password}
        users_collection.insert_one(user_data)

    @staticmethod
    def find_by_email(email):
        return users_collection.find_one({"email": email})

    @staticmethod
    def check_password(stored_password, password):
        return check_password_hash(stored_password, password)
