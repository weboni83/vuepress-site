### 배포 스크립트 작성하기

#### root 페이지에 deploy.sh 파일을 추가하고 아래와 같은 스크립트를 추가합니다.
```
#!/usr/bin/env sh

# abort on errors
set -e

# build
bundle exec jekyll build

# navigate into the build output directory
cd _site

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/weboni83/weboni83.github.io.git master:gh-pages
```

실행
```
sh deploy.sh
```