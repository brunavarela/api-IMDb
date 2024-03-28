// import users from "../database/users.js";
// import { db } from "../database/mysql.js";

const listUsersService = () => {
  return users;
};

export default listUsersService;

// export const getUsers = (_, res) => {
//   const q = "SELECT * FROM usuarios";

//   db.query(q, (err, data) => {
//     if (err) return res.json(err);

//     return res.status(200).json(data);
//   });
