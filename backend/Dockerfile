FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

RUN apt-get update \
    && python -m pip install --upgrade pip \
    && apt-get install -y libgl1-mesa-glx

RUN apt-get install -y default-jdk

COPY requirements.txt /code/
RUN pip install cmake==3.18.2.post1
RUN pip install -r requirements.txt

ENV PATH /code/AI/ffmpeg-4.3.1-2020-10-01-essentials_build/ffmpeg-path/:$PATH
COPY . /code/