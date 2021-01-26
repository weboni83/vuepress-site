# git으로 관리되는 소스 초기화 하는 방법

```
# 프로젝트 폴더로 이동
$ cd <folder name>
$ rm -rf .git

# git 초기화
$ git init

# 소스파일 추가 후 커밋
$ git add .
$ git commit -m 'Initial commit'

# 원격 저장소 지정
$ git remote add origin <url>

# 현재 브랜치를 원격 저장소 master에 강제로 반영
$ git push --force --set-upstream origin master
```