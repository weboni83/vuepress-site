# Create Redmine
project 별로 issue 를 관리하기 위해 redmine 을 설치합니다.

## Tutorial

1. [Docker Hub](https://hub.docker.com)에 가입합니다.
2. Tutorial 을 진행하고 docker 로 push하는 방법을 익힙니다.
3. Docker Desktop을 설치합니다.
4. redmine을 검색합니다.
5. 가장 Downloads 가 많은 redmine 을 선택합니다.
6. Docker Image를 설치합니다
	```
	$ docker pull redmine
	```
7. How to use this Image 를 참조하여 설치합니다.
8. Run Redmine with a Database Container 항목의 MySQL 부분의 코드를 실행합니다
	```
	$ docker run -d --name some-mysql --network some-network -v mysqlvolume:/var/lib/mysql -e MYSQL_USER=redmine -e MYSQL_PASSWORD=secret -e MYSQL_DATABASE=redmine -e MYSQL_RANDOM_ROOT_PASSWORD=1 mysql:5.7
	```
9. redmine docker 실행
	```
	$ docker run -d --name some-redmine --network some-network -v redminedatadir:/usr/src/redmine/files -p 3000:3000 -e REDMINE_DB_MYSQL=some-mysql -e REDMINE_DB_USERNAME=redmine -e REDMINE_DB_PASSWORD=secret redmine
	```
## Docker 사용자 디렉토리 생성 방법

```
# show volume list command
$ docker volume ls
# mysql db data file mount
docker volume create mysqlvolume
# redmine 파일 마운트
docker volume create redminedatadir
```

## Mysql Connection 확인 방법
```
3. mysql bash 실행 후 로그인
docker exec -it some-mysql /bin/bash
# or
docker exec -it some-mysql "bash"
mysql -u redmine -p secret
select @@version;

```

## Docker 생성 후 종류할 때 자동 인스턴스 삭제하는 방법
```
# --rm 종료할 때 자동으로 생성된 인스턴스를 삭제해주는 옵션
& docker run --rm -it  -p 3306:3306/tcp -p 33060:33060/tcp mysql:5.7
$ docker run --rm -d  -p 3000:3000/tcp redmine:latest

```


## Docker compose 설정 방법

Example  `stack.yml`  for  `redmine`:

```
version: '3.1'

services:

  redmine:
    image: redmine
    restart: always
    ports:
      - 8080:3000
    environment:
      REDMINE_DB_MYSQL: some-mysql
      REDMINE_DB_PASSWORD: secret redmine
      REDMINE_SECRET_KEY_BASE: supersecretkey

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: secret redmine
      MYSQL_DATABASE: redmine
```

##
ref: [redmine page in docker hub](https://hub.docker.com/_/redmine)
