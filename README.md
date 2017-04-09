# Vuex

> A Vue.js project

![Vuex](VueJS_cover.png?raw=true "Vuex")

1. Install dependencies.
	```shell
	$ npm install
	```
	
2. Backend is faked by serving from the db.json via "json-server".
   App configurated to fetch from http://localhost:3000/users .
	```shell
	$ npm run server
	```
	[for more info](https://github.com/typicode/json-server) .
	
3. App will not be properly served by browser from the file:/// protocol.
   So you can run [Web server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/reviews) on the localhost:8887 or use local server of your choice. 
   Note: 'npm run dev' will serve app in developmend mode.
   App will fetch the static data for loading into the store when you visit '/' login form.
   Error handling is only declarative (via the console). 
   It will be easy to make flash-messages if necessary.
   Navbar is provided only for simplicity of testing 
   (you can access the Admin page without login).
