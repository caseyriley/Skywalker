
## DB: 
* PRODUCTION: db will be created using docker-compose. tables/seed will be created using SQL.
* DEVELOPMENT: please make a database that fits the schema (see github wiki). Refer to models in flask folder.

## React:
* PRODUCTION: app will built/run using nginx/node image.
* DEVELOPMENT: npm start.

## Flask:
* PRODUCTION: app will built/run using using python-alpine image.
* DEVELOPMENT: pipenv run flask run. if you read this warren i'll get you a burrito.


## Deployment Plan:
* React App will expose on local machine from a network containers.
* Flask will not be expose and will serve react app and interact with database.
* Database will not be expose and will interact with database.

# Skywalker
