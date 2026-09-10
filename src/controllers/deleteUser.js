import sequelize from "../config/database.js";
import user from "../models/User.model.js";


export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        // await sequelize.query(`
        //     DELETE FROM t_Users
        //     WHERE id = :id
        // `, {
        //     replacements: {
        //         id
        //     }
        // })

        user.destroy({
            where: {
                id
            }
        })
    } catch (err) {
       console.log("Error deleting user:", err) 
       return res.status(500).json({ error: "Something went wrong." });
    }

    res.status(200).json({
        message: "User deleted."
    })
}