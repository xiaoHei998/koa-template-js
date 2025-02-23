const StaffsSvc = require("../services/staffs");
class StaffControllers {
  /**
   * @param {import('koa').Context} ctx
   */
  async userLogin(ctx) {
    console.log("ctx", ctx);
    const { user = "", password = "" } = ctx.request.body;
    const staffsSvc = new StaffsSvc().setPassword(password).setUser(user);
    const res = await staffsSvc.signIn()
    ctx.body = "login success";
  }
}

module.exports = new StaffControllers();
