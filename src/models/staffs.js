const { executeQuery } = require("../libs/db");

class StaffModel {
  #table = "staff_user";
  /**
   * @description 查找一条数据
   * @param {string} user
   * @returns { {
   *    id: number,
   *    user: string,
   *    password: string
   * } }
   */
  async findOneForUser(user) {
    const sql = `
            SELECT * FROM ${this.#table} WHERE user='${user}'
        `;
    const [result] = await executeQuery(sql);
    console.log("result--", result);
    return result[0];
  }
}

module.exports = new StaffModel();
