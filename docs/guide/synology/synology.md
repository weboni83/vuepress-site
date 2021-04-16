# Let's Encrypt SSL 인증서 적용

## synology nas에 관리자 권한으로 로그인
```
$ ssh 192.168.0.1
$ sudo -i
```
## acme.sh 다운로드
```
$ wget https://raw.githubusercontent.com/acmesh-official/acme.sh/master/acme.sh
```
## 스크립트 파일 실행하기 위한 권한 부여
```
$ chmod a+x acme.sh
```
## 인증서 발급
```
$ ./acme.sh --issue --dns --force -d sosoz.me -d *.sosoz.me --yes-I-know-dns-manual-mode-enough-go-ahead-please
```
아래 코드로 대체함.
```
$ /var/services/homes/ten/acme.sh --issue --dns --force -d sosoz.me -d *.sosoz.me --yes-I-know-dns-manual-mode-enough-go-ahead-please
```
## Domain 과 TXT Value 값을 복사하여 DNS 레코드에 TXT 레코드로 추가합니다.

## Domain: 확인
## TXT Value: 확인
## DNS TXT 레코드 변경 후 확인
```
$ nslookup
$ set type=txt
$ _acme-challenge.sosoz.me
```
## 인증서 갱신 명령어를 입력하여 인증서 발급
```
$ ./acme.sh --renew --dns --force -d sosoz.me -d *.sosoz.me --yes-I-know-dns-manual-mode-enough-go-ahead-please
```
아래 코드로 대체함.
```
/var/services/homes/ten/acme.sh --renew --dns --force -d sosoz.me -d *.sosoz.me --yes-I-know-dns-manual-mode-enough-go-ahead-please
```


![dependencies](/2021-01-26_180047.png)

## 발급된 인증서 경로로 이동
시놀로지 나스 파일 탐색기로 해당 경로를 찾아 마우스 우클릭 다운로드를 클릭합니다.
```
$ cd /var/services/homes/ten/.acme.sh/
```

### 제어판 - 보안 - 인증서로 이동해 인증서를 교체
![dependencies](/20210416_getcert.png)



## 인증서 자동갱신을 위해 스케줄러에 작업 추가

### 추가된 인증서가 저장되는 경로 확인
```
# cat /usr/syno/etc/certificate/_archive/DEFAULT

```
COMMAND 실행후에 반환되는 코드 6자리를 복사해서 스케줄러에 추가하는 스크립트안에 인증서 복사 경로를 지정하면 됩니다.

### 제어판 - 작업 스케줄러에 등록 

*사용자는 root로 지정해야 합니다.*

```bash
# 인증서 갱신
/var/services/homes/ten/acme.sh --renew --dns --force -d sosoz.me -d *.sosoz.me --yes-I-know-dns-manual-mode-enough-go-ahead-please

# 인증서 등록
# 복사할 폴더 확인 cat /usr/syno/etc/certificate/_archive/DEFAULT
cp /root/.acme.sh/sosoz.me/sosoz.me.cer /usr/syno/etc/certificate/_archive/uj1Otz/cert.pem
cp /root/.acme.sh/sosoz.me/ca.cer /usr/syno/etc/certificate/_archive/uj1Otz/chain.pem
cp /root/.acme.sh/sosoz.me/fullchain.cer /usr/syno/etc/certificate/_archive/uj1Otz/fullchain.pem
cp /root/.acme.sh/sosoz.me/sosoz.me.key /usr/syno/etc/certificate/_archive/uj1Otz/privkey.pem

# nginx 재시작
/usr/syno/sbin/synoservicectl --reload nginx
```

