const fs = require("fs").promises;
const path = require("path");

const uploadFile = async (ctx) => {
  const file = ctx.request.files.file;

  if (!file) {
    ctx.status = 500;
    ctx.body = { message: "No file found" };
    return;
  }

  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "samples",
    file.originalFilename
  );

  await fs.writeFile(filePath, await fs.readFile(file.filepath));
  ctx.status = 201;
  ctx.body = { message: "File uploaded successfully" };
};

const listFiles = async (ctx) => {
  const files = await fs.readdir(path.join(__dirname, "..", "..", "samples"));
  ctx.body = { files };
};

const deleteFile = async (ctx) => {
  const fileName = ctx.params.fileName;

  const filePath = path.join(__dirname, "..", "..", "samples", fileName);

  await fs.unlink(filePath);
  ctx.body = { message: "File deleted successfully" };
};

module.exports = { uploadFile, listFiles, deleteFile };
