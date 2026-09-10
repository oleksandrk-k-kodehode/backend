import sequelize from "../config/database.js";

import user from "../models/User.model.js";


export const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    // await sequelize.query(`
    //     INSERT INTO t_Users (UserName, Email, IsActive)
    //     VALUES (:username, :email, :IsActive);
    // `, {
    //     replacements: {
    //         username,
    //         email,
    //         IsActive: true
    //     }
    // })

    try {
        const data = await user.create({
            username,
            email,
            password
        })

            res.status(201).json({
                message: "User created",
                data
        })
    } catch (err) {
        console.log('Error creating user:', err)
        res.status(400)
        res.status(500)
    }
}