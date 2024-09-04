# witness

# Setup npm workspace

```
// create a root folder witness
md witness
cd witness

// create a package.json file
npm init -y

// create a new workspace (packages) and create two projects (server, web)

npm init -w packages/web
npm init -w packages/server

// Install typescript and ts-node on the project server.  

npm install typescript ts-node --save-dev --workspace packages/server

```

## Setup angular workspace

``` 
// navigate to the folder 'packages' and delete the folder 'web' 
del web

// navigate to the packages folder

cd witness/packages

// create a new angular workspace

npx @angular/cli new web --create-application="false" --skip-git

//navigate to the root folder 'witness' 

cd witness
npm run install --workspace packages/web

// Create a new angular application under the angular 'web' workspace

npm run ng generate application app --workspace packages/web

// create angular client library

npm run ng generate library client-lib  --workspace packages/web

// run the angular project

npm run start --workspace packages/web


```