from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Index Page'

@app.route('/global-score')
def get_global_score():
    return '12'

if __name__ == '__main__':
    app.run()