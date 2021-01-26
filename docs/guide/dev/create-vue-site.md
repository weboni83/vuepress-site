# Scaffolding a VuePress project
## Tutorial

1. VuePress site generator 를 사용하여 기본 템플릿을 생성합니다.
	```
	# npx create-vuepress-site
	yarn create vuepress-site
	```
2. Setup local environment
	```
	# Navigate into newly scaffolded docs directory
	cd docs

	# Install dependencies
	yarn install

	# Start local dev server
	yarn run dev
	```
3. .gitignore 파일을 만들어 노드_모듈 폴더를 제외합니다.
	```
	echo node_modules > .gitignore
	```
4. Git 리포지토리를 초기화합니다.
	```
	git init
	git add -A
	git commit -m "initial commit"
	```
5. 원격 리포지토리를 추가하고 파일을 업로드 합니다.
	```
	git remote add origin https://github.com/weboni83/vuepress-site.git
	git push -u origin master
	```
##