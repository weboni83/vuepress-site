# firebase 설치하기


1. firebase-tools 설치

```
npm install -g firebase-tools
```
2. firebase login
```
firebase login
```
3. firebase 초기화
```
firebase init
```
4. Firebase SDK 추가 및 Firebase 초기화
```
npm init
npm install --save firebase
```
5. Firebase plugins 폴더에 firebase.js를 추가 하고 사용할 모듈을 설정한다.
```
import Vue from 'vue'
import { firebase } from '@firebase/app'

import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/database'
import firebaseConfig from '../../firebaseconfig'

firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase

```
6. package.json 에 firebase dependencies 가 추가되었는지 확인한다.
![dependencies](/2020-10-30_192625.png)

ref: [자바스크립트 프로젝트에 Firebase 추가 ](https://firebase.google.com/docs/web/setup?hl=ko#node.js-%EC%95%B1)




