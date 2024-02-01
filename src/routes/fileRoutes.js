const Router = require("koa-router");
const fileController = require("../controllers/fileController");

const router = new Router();

router.post("/upload", fileController.uploadFile);
router.get("/list", fileController.listFiles);
router.delete("/delete/:fileName", fileController.deleteFile);

module.exports = router;
