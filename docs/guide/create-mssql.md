# docker MSSQL 설치하기


1. mssql docker image download

```
docker pull mcr.microsoft.com/mssql/server:2019-latest
```
2. 다운받은 이미지 확인
```
docker images
```
3. 도커 실행
```
docker run -e ACCEPT_EULA=Y -e SA_PASSWORD=P@ssw0rd -v sqlvolume:/var/opt/mssql -p 1433:1433 --name sql -d mcr.microsoft.com/mssql/server:2019-latest
```
## 실행중인 container 확인
```
docker ps
```

## mssql 실행 확인 방법
```
# sqlcmd 실행해서 version 확인해서 동작을 확인
docker exec -it sql /opt/mssql-tools/bin/sqlcmd -S "localhost" -U sa -P "P@ssw0rd"
select @@version
go
exit
```

## 잘못 생성된 도커 삭제 방법
```
docker rm sql1
```

## 다운 받은 docker 이미지 삭제
```
docker rmi mcr.microsft.com/mssql/server:2019-latest
```

[참조](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-docker-container-deployment?view=sql-server-2017&pivots=cs1-bash#buildnonrootcontainer)

## Troubleshooting SQL Server Docker containers
```
docker exec -it sql /bin/bash
# or
docker exec -it sql "bash"
cd /var/opt/mssql/log
cat setup*.log
cat errorlog
```

## mysql 사용자 권한 부여 스크립트
```
# 사용자 계정/비밀번호 생성
create user 'id'@'%' identified by 'p@ssW0rd'
# 접근 권한 설정
grant all privileges on nodejs_tasks.* to 'id'@'%'
# 사용자 권한 확인
show grant 'id'@'%'

# 접근 권한 제거
revoke all on nodejs_tasks.* from 'id'@'%';
```