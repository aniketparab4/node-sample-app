const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = { error: error.message };
    ctx.app.emit("error", error, ctx);
  }
};

module.exports = errorHandler;
