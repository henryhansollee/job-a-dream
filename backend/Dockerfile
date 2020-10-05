FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

RUN apt-get update \
    && python -m pip install --upgrade pip \
    && apt-get install -y libgl1-mesa-glx

RUN pwd && ls
# COPY boards/AI_code
COPY . /code/
RUN cd /code/boards/AI_code/pyhanspell 
RUN python setup.py install 
RUN cd -

# COPY requirements.txt /code/
RUN pip install cmake==3.18.2.post1
RUN pip install -r requirements.txt
