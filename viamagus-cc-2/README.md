# How to clone in your local device ?

## Setup backend

* Clone the given url using the command: git clone https://github.com/skashyap9934/viamagus-cc.git
* Goto the path /viamagus-cc-2/server
* Goto the package.json file and intall all the dependencies
* Once done you are all set to start the server using netlify dev (Make sure netlify in installed globally in your local device. If not first install netlify-cli globally and then follow the furter steps written down).
* The homepage URL should be http://localhost:8888/.netlify/functions/api and it should send "Server is UP & Running" response as a heading.

## Setup frontend
* Goto the path /viamagus-cc-2/client/posts
* Goto package.json file and install all the required dependencies
* Once done you are all set to start the frontend
* Start the frontend using the command yarn dev or npm run dev

## When the above steps don't work
* Goto the directory where you want to start this project
* Open this directory with VS Code and run the command npm create vite@latest my-app -- --template react
* Delete the src folder and paste the only from the /viamagus-cc-2/client/posts path.
* Repeat the last 3 steps as mentioned above
* Make sure to change the VITE_BASE_URL in the .env file to http://localhost:8888

In case of any query mail me at: kashyapsaurav531@gmail.com
