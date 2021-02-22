FROM python:3.8

RUN mkdir /python-service

WORKDIR /python-service

COPY requirements.txt /python-service/requirements.txt

RUN pip install -r requirements.txt -f https://download.pytorch.org/whl/torch_stable.html

COPY . /python-service/

RUN source env/bin/activate

CMD ["python", "server.py"]