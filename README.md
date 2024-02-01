# node-sample-app

- Install the dependencies
  npm install

- to start the application
  node src/app.js

Application will run as http://localhost:3000/

# Three routes present

# To upload the file

Method: POST
URL: "/upload"

# To get the list of file

Method: GET
URL: "/list"

# To delete the file

Method: DELETE
URL: "/delete/:fileName"

where :fileName denotes the actual name of the file which is present inside the sample directory on the root location

e.g: http://localhost:3000/delete/sample1
