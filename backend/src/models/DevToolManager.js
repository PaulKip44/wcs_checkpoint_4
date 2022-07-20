const AbstractManager = require("./AbstractManager");

class DevToolManager extends AbstractManager {
  static table = "dev_tool";

  insert(newDevTool) {
    return this.connection.query(
      `insert into ${DevToolManager.table} (name,source_logo,name_logo,user_Id) values (?,?,?,?)`,
      [
        newDevTool.name,
        newDevTool.source_logo,
        newDevTool.name_logo,
        newDevTool.user_Id,
      ]
    );
  }
}

module.exports = DevToolManager;
