const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(newProject) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name,
        
        name_image,
        source,
        abstract,
        client_name,
        user_Id) 
        values (?,?,?,?,?,?)`,
      [
        newProject.name,
        newProject.name_image,
        newProject.source,
        newProject.abstract,
        newProject.client_name,
        newProject.user_Id,
      ]
    );
  }

  modifyOne(ProjectId, newContents) {
    return this.connection.query(
      `UPDATE ${ProjectManager.table}
      SET name = ?,
      source_image = ? ,
      name_image = ?,
      source = ?,
      abstract = ?,
      client_name = ?,
      user_Id= 1
      WHERE id = ${ProjectId} `,
      [
        newContents.name,
        newContents.source_image,
        newContents.name_image,
        newContents.source,
        newContents.abstract,
        newContents.client_name,
      ]
    );
  }
}

module.exports = ProjectManager;
