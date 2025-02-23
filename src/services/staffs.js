const staffModel = require("../models/staffs");
class StaffServices {
  #user;
  #password;
  setUser(user = "") {
    this.#user = user;
    return this;
  }
  setPassword(password = "") {
    this.#password = password;
    return this;
  }
  async signIn() {
    if (!this.#user) {
      throw new Error("用户不能为空");
    }
    if (!this.#password) {
      throw new Error("密码不能为空");
    }
    const userData = await staffModel.findOneForUser(this.#user)
    if(!userData) {
      throw new Error('用户不存在')
    }
    if(userData.password !== this.#password) {
      throw new Error('密码不正确')
    }
    return userData
  }
}

module.exports = StaffServices;
