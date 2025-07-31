from flask import Flask, jsonify
from flask_cors import CORS
from users import users_bp
from merch import merch_bp
from models import init_db

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(users_bp, url_prefix="/users")
app.register_blueprint(merch_bp, url_prefix="/merch")

@app.route('/')
def home():
    return jsonify({"message": "Capstone API is running!"})

if __name__ == '__main__':
    init_db()  # Initialize database tables
    app.run(debug=True)
