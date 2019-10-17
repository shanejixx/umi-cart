export default {
  'post /api/login'(req, res, next) {
    const { username, password } = req.body;

    console.log(username, password);

    if (username == "admin" && password == "admin") {
      return res.json({
        code: 0,
        data: {
          token: "adminisgood",
          role: "admin",
          balance: 1000,
          username: "admin"
        }
      });
    }
    if (username == "guest" && password == "guest") {
      return res.json({
        code: 0,
        data: {
          token: "guestbaisgood",
          role: "guest",
          balance: 100,
          username: "guest"
        }
      });
    }
    return res.status(401).json({
      code: -1,
      msg: "密码错误"
    });
  }
}
