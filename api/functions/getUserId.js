import knex from "../config/database.js";

const getUserId = async (email) => {
  return await knex("users")
    .where("email", email)
    .select("user_id")
    .then((results) => {
      if (results.length > 0) {
        return results[0].user_id;
      } else {
        return null;
      }
    });
};

export default getUserId;
