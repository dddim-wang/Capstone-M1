import sqlite3
import os

DB_FILE = os.path.join(os.path.dirname(__file__), 'capstone.db')

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row  # allows dict-like access
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Create users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
    ''')

    # Create merch table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS merch (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            type TEXT,
            price TEXT,
            image TEXT
        )
    ''')

    # Check if merch table is empty and insert default data
    cursor.execute('SELECT COUNT(*) FROM merch')
    if cursor.fetchone()[0] == 0:
        cursor.executemany('''
            INSERT INTO merch (title, type, price, image) VALUES (?, ?, ?, ?)
        ''', [
            ('Hello Wind', 'EP', '$4.99', '/Hello Wind.jpg'),
            ('Starry Romance', 'Single', '$1.99', '/Starry Romance.jpg'),
            ('出逃夏日', 'Single', '$1.99', '/出逃夏日.jpg'),
            ('夏末笔记', 'Single', '$1.99', '/夏末笔记.jpg')
        ])

    conn.commit()
    conn.close()

