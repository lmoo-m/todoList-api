import { Sequelize } from "sequelize";

const db = new Sequelize("todoList", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;
