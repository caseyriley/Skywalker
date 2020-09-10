# FROM python:2.7
FROM python:3.8.3-slim-buster

COPY . /app

WORKDIR /app

RUN pip install -r requirements.txt && pip install gunicorn

RUN chmod 777 runserver.sh

ENTRYPOINT ["./runserver.sh"]