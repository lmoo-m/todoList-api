import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const list = db.define(
    "tasks",
    {
        name: DataTypes.STRING,
        dateline: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

export default list;

(async () => {
    await db.sync();
})();
