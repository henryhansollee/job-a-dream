FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

RUN apt-get update \
    && python -m pip install --upgrade pip \
    && apt-get install -y libgl1-mesa-glx

RUN pwd
COPY boards/AI_code /code/boards/AI_code
RUN pwd && ls
WORKDIR /code/boards/AI_code/py-hanspell

# RUN cd boards/AI_code/pyhanspell
# RUN pwd
RUN python setup.py install 
WORKDIR /code
RUN pwd



# COPY requirements.txt /code/
RUN pip install cmake==3.18.2.post1
RUN pip install -r requirements.txt
