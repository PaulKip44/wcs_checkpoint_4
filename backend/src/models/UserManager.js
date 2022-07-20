const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${ItemManager.table} (email,password) values (?,?)`,
      [user.email, user.password]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ItemManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;
