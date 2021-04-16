# Install Jekyll on Windows 10

## 개발 환경 구성하기


### Ruby 설치하기
jekyll 공식 사이트를 참고 하여 루비를 설치합니다.
https://jekyllrb.com/

### jekyll Ruby Gem 설치
```
gem install bundler jekyll
```
### jekyll project 생성
```
jekyll new jekyll-site
```
### jekyll 실행 해보기
```
bundle exec jekyll serve
```

## 테마 적용하기

### 테마 검색 사이트
[jekyllthemes](http://jekyllthemes.org/)

### 테마 적용 방법
무료테마 중에 많이 적용하는 clean thema를 적용한다.
Gemfile 을 수정한다.
```
gem "jekyll-thema-clean-blog"
```
_config.yml의 테마를 수정한다.
```
theme: jekyll-theme-clean-blog
```
의존성 설치
```
bundle install
```
테마가 적용되었는지 확인한다.
```
bundle exec jekyll serve
```

### 테마를 다운로드 해서 설치한다.
테마 파일을 다운로드 해서 압축을 풀어서 복사해도 되지만 git hub에 업로드 해야 하니까 clone 하는 방법을 사용한다.
```
git clone https://github.com/StartBootstrap/startbootstrap-clean-blog-jekyll.git
```
### clone 한 설치파일 복사해서 현재 루트에 덮어쓰기
```
cp -Rf startbootstrap-clean-blog-jekyll .
```
### 의존성 설치
```
bundle install
```
### conflict 나는 index.markdown 파일 삭제하기
```
rm index.markdown about.markdown
```
### clone 한 프로젝트 폴더도 강제로 삭제한다.
```
rm -rf startbootstrap-clean-blog-jekyll
```
### 소스파일 추가 후 커밋
```
$ git -M main
$ git add .
$ git commit -m 'Initial commit'
```
### 원격 저장소 지정
```
$ git remote add origin <url>
$ git remote -v
```
### 현재 브랜치를 원격 저장소 master에 강제로 반영
```
$ git push --force --set-upstream origin master
```

### github Repository name을 <id>.github.io로 변경한다.

