function logRequest(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const ms = Date.now() - start;
    const user = req.user ? `${req.user.sub}(${req.user.role})` : "anonymous";
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${
        res.statusCode
      } ${ms}ms user=${user}`
    );
  });
  next();
}

module.exports = { logRequest };
