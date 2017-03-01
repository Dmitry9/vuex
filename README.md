# vuex-test-task

> A Vue.js project


1. Install dependencies.
	npm install
	
2. Backend is faked by serving from the db.json via "json-server".
   App configurated to fetch from http://localhost:3000/users .
	npm run server
	(https://github.com/typicode/json-server) for more info.
	
3. App will not be properly served by browser from the file:/// protocol.
   So you can run Web server for Chrome on the localhost:8887
	(https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/reviews)
   or use local server of your choice. 
   Note: 'npm run dev' will serve app in developmend mode.
   App will fetch the static data for loading into the store when you visit '/' login form.
   Error handling only declarative (via the console). 
   It will be easy to make flash-messages if necessary.
   Navbar is provided only for simplicity of testing 
   (you can access the Admin page without login).