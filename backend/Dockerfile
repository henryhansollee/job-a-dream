FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

RUN apt-get update \
    && python -m pip install --upgrade pip \
    && apt-get install -y libgl1-mesa-glx


COPY boards/AI_code /code/boards/AI_code
WORKDIR /code/boards/AI_code/py-hanspell
RUN python setup.py install 
WORKDIR /code

COPY requirements.txt /code/
RUN pip install cmake==3.18.2.post1
RUN pip install -r requirements.txt

COPY . /code/