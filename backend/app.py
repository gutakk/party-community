import os
import time

import psycopg2
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pg_host = os.environ['POSTGRES_HOST']
pg_user = os.environ['POSTGRES_USER']
pg_password = os.environ['POSTGRES_PASSWORD']
pg_db = os.environ['POSTGRES_DB']

def init_cnx():
    return psycopg2.connect(dbname=pg_db, user=pg_user, password=pg_password, host=pg_host)

@app.route('/')
def index():
    return 'Index Page'


@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        return 'hello world'
    elif request.method == 'POST':
        request_body = request.json
        cnx = init_cnx()
        cur = cnx.cursor()
        app.logger.warning(request_body)
        try:
            cur.execute("SELECT * FROM users WHERE email=%s", [request_body['email']])
            result = cur.fetchone()
            if result:
                return "Email already exist", 400
            cur.execute("""
                INSERT INTO users (email, password)
                VALUES (%s, crypt(%s, gen_salt('bf')));
            """, [request_body['email'], request_body['password']])
            cnx.commit()
            return "Register succesfully", 201
        except Exception as e:
            cnx.rollback()
            raise(e)
        finally:
            cur.close()
            cnx.close()


if __name__ == '__main__':
    app.run(host='0.0.0.0')
