const AbstractManager = require("./AbstractManager");

class DevToolManager extends AbstractManager {
  static table = "dev_tool";

  insert(newDevTool) {
    return this.connection.query(
      `insert into ${DevToolManager.table} (name,name_logo,user_Id) values (?,?,?)`,
      [newDevTool.name, newDevTool.name_logo, newDevTool.user_Id]
    );
  }
}

module.exports = DevToolManager;
