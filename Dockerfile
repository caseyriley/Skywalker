FROM nikolaik/python-nodejs:python3.8-nodejs14 as base

WORKDIR /var/www
COPY . .

# Install Python Dependencies
RUN ["pip", "install", "-r", "requirements.txt"]


# Build our React App
RUN ["npm", "install", "--prefix", "react"]
#heroku url
ENV REACT_APP_BASE_URL=https://skywalker3.herokuapp.com
# ENV REACT_APP_BASE_URL=https://flask-react-aa.herokuapp.com
RUN ["npm", "run", "build", "--prefix", "react"]

# Move our react build for Flask to serve
# Use cp here because we're copying files inside our working directory, not from
# our host machine.
RUN ["cp", "-r", "react/build/", "skywalkerBackend/static"]

# Setup Flask environment
ENV FLASK_APP=skywalkerBackend
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True


EXPOSE 8000

# Run flask environment
CMD gunicorn skywalkerBackend:app



#   public key:
# SHA256:0RFhGB06bbgYPb8Z94cDEGqGC0DaCChhvW1SqycTHMA