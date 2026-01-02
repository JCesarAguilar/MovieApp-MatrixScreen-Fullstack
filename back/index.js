const server = require("./src/server");
const router = require("./src/routes/movies");
const configDb = require("./src/config/configDb");

server.use(router);

configDb().then((res) => {
  server.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
  });
});
