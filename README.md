# React + ejs Templating(Server-side Universal rendering)

### Database:
Used Mongodb cloud server, hence no need to run mongodb instance from your computer. Connections are already made,and working like a charm(Tested it).
### Elastic Search: 
Have been setup in amazon cloud. Connections are yet to be configured.
### React: 
React components are yet to be made by integrating stackoverflow desing pages.

### To run in production mode:
```npm start```
This mode does not support hot-reloading. Whenever you change server code, you need to restart the server manually.
Changing the raect component is not reflected in the web browser as of now, have to figure it.
### To run in development mode:
```npm start-dev-hmr```
The production mode supports hot reloading only for react. Whenever you modify react components and save them,
the webpage in the browser automatically reloads the pages, without restarting the server. However, if the server code is changed,
it does not reflect in the browser automatically.
#### Update:
webpack-dev-server(internal call for npm start-dev-hmr) serves only front end server, it does not run express-server and hence cannot serve login, register pages.

### Mode verdict:
If you want to test react, run development mode,
if you want to test backend server, run production mode.
