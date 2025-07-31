from flask import Blueprint, request, jsonify
from models import get_db_connection

merch_bp = Blueprint('merch', __name__)

@merch_bp.route('', methods=['GET'])
def get_merch():
    conn = get_db_connection()
    merch_items = conn.execute('SELECT * FROM merch').fetchall()
    conn.close()
    merch_list = [dict(m) for m in merch_items]
    return jsonify(merch_list)

@merch_bp.route('', methods=['POST'])
def add_merch():
    data = request.get_json()
    if 'title' not in data or 'price' not in data:
        return jsonify({'error': 'Missing required fields'}), 400

    conn = get_db_connection()
    conn.execute(
        'INSERT INTO merch (title, type, price, image) VALUES (?, ?, ?, ?)',
        (data['title'], data.get('type', ''), data['price'], data.get('image', ''))
    )
    conn.commit()
    conn.close()
    return jsonify({'message': 'Merch item added successfully'}), 201

@merch_bp.route('/<int:merch_id>', methods=['PUT'])
def update_merch(merch_id):
    data = request.get_json()
    conn = get_db_connection()
    conn.execute(
        'UPDATE merch SET title = ?, type = ?, price = ?, image = ? WHERE id = ?',
        (data.get('title', ''), data.get('type', ''), data.get('price', ''), data.get('image', ''), merch_id)
    )
    conn.commit()
    conn.close()
    return jsonify({'message': f'Merch item {merch_id} updated successfully'})

@merch_bp.route('/<int:merch_id>', methods=['DELETE'])
def delete_merch(merch_id):
    conn = get_db_connection()
    conn.execute('DELETE FROM merch WHERE id = ?', (merch_id,))
    conn.commit()
    conn.close()
    return jsonify({'message': f'Merch item {merch_id} deleted successfully'})
