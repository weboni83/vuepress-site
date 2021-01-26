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
![dependencies](/2021-01-26_180047.png)

## 발급된 인증서 경로로 이동
```
$ cd /root/.acme.sh/sosoz.me/
```
