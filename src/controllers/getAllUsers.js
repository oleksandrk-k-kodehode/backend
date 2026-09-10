import sequelize from "../config/database.js"
import user from "../models/User.model.js"


export const getAllUsers = async (req, res) => {
    // const users = await sequelize.query("SELECT * FROM t_Users");

    const users = await user.findAll()

    res.status(200).json({
        data: users
    })
}