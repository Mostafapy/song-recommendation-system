FROM python:3.8.8-alpine3.12

RUN mkdir /python-service

WORKDIR /python-service

COPY requirements.txt /python-service/requirements.txt

COPY . /python-service/

RUN source /env/bin/activate

RUN pip install -r requirements.txt -f https://download.pytorch.org/whl/torch_stable.html

CMD ["python", "server.py"]