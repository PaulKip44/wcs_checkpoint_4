const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(newUser) {
    return this.connection.query(
      `insert into ${this.table} (email,password) values (?,?)`,
      [newUser.email, newUser.password]
    );
  }

  findByEmail(email) {
    return this.connection
      .query(`select * from  ${this.table} where email = ?`, [email])
      .then(([result]) => result[0]);
  }
}

module.exports = UserManager;
