FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

RUN apt-get update \
    && python -m pip install --upgrade pip \
    && apt-get install -y libgl1-mesa-glx

RUN pwd
COPY boards/AI_code boards/AI_code
RUN pwd
WORKDIR /code/boards/AI_code/pyhanspell
RUN pwd
RUN python setup.py install 


# COPY requirements.txt /code/
RUN pip install cmake==3.18.2.post1
RUN pip install -r requirements.txt
