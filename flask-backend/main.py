from flask import Flask, jsonify, request, render_template
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
app.config['JWT_SECRET_KEY'] = 'my_secret'
app.config['JWT_TOKEN_LOCATION'] = ['cookies']

mongo = PyMongo(app)
crypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/users/login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']

    try:
        user = mongo.db.users.find_one({'email': email})
        if user is not None:
            if crypt.check_password_hash(user['password'], password):
                access_token = create_access_token(identity={
                    'first_name': user['first_name'],
                    'last_name': user['last_name'],
                    'email': user['email']
                })
                return jsonify({'token': access_token})
    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500

    return jsonify({'message': 'Invalid username or password'}), 404


@app.route('/users/register', methods=['POST'])
def register():
    user = mongo.db.users

    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = request.get_json()['password'].encode('utf-8')

    found = user.find_one({'email': email})
    if found is None:
        password = crypt.generate_password_hash(password).decode('utf-8')
        user.insert_one({
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password
        })
        return jsonify({'message': 'success'})

    return jsonify({'message': 'User already exists'}), 500


@app.route('/api/add-data/', methods=['POST'])
@jwt_required
def add():
    try:
        email = get_jwt_identity()['email']
        weight = request.get_json['email']
        height = request.get_json['password']
        gender = request.get_json['gender']

        mongo.db.users.update({'email': email}, {set: {'weight': weight, 'height': height, 'gender': gender}})
        return jsonify({'message': 'success'})

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


if __name__ == '__main__':
    app.run(debug=True)