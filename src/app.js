require("dotenv").config();
const Koa = require("koa");
const { koaBody } = require("koa-body");
const koaStatic = require("koa-static");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const fileRoutes = require("./routes/fileRoutes");

const app = new Koa();

app.use(logger);
app.use(errorHandler);
app.use(koaBody({ multipart: true }));
console.log(path.join(__dirname, "..", "samples"));
app.use(koaStatic(path.join(__dirname, "..", "samples")));

app.use(fileRoutes.routes());
app.use(fileRoutes.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
