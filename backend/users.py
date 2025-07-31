from flask import Blueprint, request, jsonify
from models import get_db_connection

users_bp = Blueprint('users', __name__)

# --- GET all users ---
@users_bp.route('', methods=['GET'])
def get_users():
    with get_db_connection() as conn:
        users = conn.execute('SELECT * FROM users').fetchall()
    user_list = [dict(u) for u in users]
    return jsonify(user_list), 200

# --- POST (create new user) ---
@users_bp.route('', methods=['POST'])
def add_user():
    data = request.get_json()
    if not data or 'username' not in data or 'email' not in data:
        return jsonify({'error': 'Missing username or email'}), 400

    try:
        with get_db_connection() as conn:
            conn.execute(
                'INSERT INTO users (username, email) VALUES (?, ?)',
                (data['username'], data['email'])
            )
            conn.commit()
        return jsonify({'message': 'User added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# --- PUT (update user by ID) ---
@users_bp.route('/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    if not data or ('username' not in data and 'email' not in data):
        return jsonify({'error': 'Missing username or email'}), 400

    try:
        with get_db_connection() as conn:
            conn.execute(
                'UPDATE users SET username = ?, email = ? WHERE id = ?',
                (data.get('username'), data.get('email'), user_id)
            )
            conn.commit()
        return jsonify({'message': f'User {user_id} updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# --- DELETE (delete user by ID) ---
@users_bp.route('/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        with get_db_connection() as conn:
            conn.execute('DELETE FROM users WHERE id = ?', (user_id,))
            conn.commit()
        return jsonify({'message': f'User {user_id} deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
