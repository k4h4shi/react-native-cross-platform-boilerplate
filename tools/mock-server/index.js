const data = require("../data");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  // add your authorization logic here
  const isAuthorized = req => true;
  if (isAuthorized(req)) {
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});
server.use("/api", router);
server.listen(9000, () => {
  console.log("JSON Server is running");
});
