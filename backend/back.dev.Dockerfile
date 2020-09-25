FROM python:3.8
ENV PYTHONUNBUFFERED 0
WORKDIR /code
COPY . ./
RUN apt-get update \
    && python -m pip install --upgrade pip \
    && apt-get install -y libgl1-mesa-glx

RUN pip install -r requirements.txt
RUN chmod 755 start

ENTRYPOINT ["/code/start"]
