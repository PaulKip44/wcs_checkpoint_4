const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  static table = "language";

  insert(newLanguage) {
    return this.connection.query(
      `insert into ${LanguageManager.table} (name,name_logo,user_Id) values (?,?,?)`,
      [newLanguage.name, newLanguage.name_logo, newLanguage.user_Id]
    );
  }
}

module.exports = LanguageManager;
