import db from "./db.service";
import helper from "@utils/helper.util";
import config from "@configs/general.config";

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ?,?`,
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(programmingLanguage: any) {
  const result: any = await db.query(
    `INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (?, ?, ?, ?, ?)`,
    [
      programmingLanguage.name,
      programmingLanguage.released_year,
      programmingLanguage.githut_rank,
      programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank,
    ]
  );

  let message = "Error in creating programming language";

  if (result.affectedRows) {
    message = "Programming language created successfully";
  }

  return { message };
}

async function update(id: any, programmingLanguage: any) {
  const result: any = await db.query(
    `UPDATE programming_languages 
    SET name=?, released_year=?, githut_rank=?, 
    pypl_rank=?, tiobe_rank=? 
    WHERE id=?`,
    [
      programmingLanguage.name,
      programmingLanguage.released_year,
      programmingLanguage.githut_rank,
      programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank,
      id,
    ]
  );

  let message = "Error in updating programming language";

  if (result.affectedRows) {
    message = "Programming language updated successfully";
  }

  return { message };
}

async function remove(id: any) {
  const result: any = await db.query(`DELETE FROM programming_languages WHERE id=?`, [id]);

  let message = "Error in deleting programming language";

  if (result.affectedRows) {
    message = "Programming language deleted successfully";
  }

  return { message };
}

export default {
  getMultiple,
  create,
  update,
  remove,
};
