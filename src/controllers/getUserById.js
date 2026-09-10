import sequelize from "../config/database.js";
import User from "../models/User.model.js";


// localhost:8000/users/1 / UUID / uawd999wDaweF
export const getUserById = async (req, res) => {
    const { userId } = req.params;

    // const [users] = await sequelize.query(
    //     `SELECT id FROM t_Users WHERE id = :userId`,
    //     {
    //         replacements: { userId }
    //     }
    // );

    // const user = await User.findByPk(userId)
    const user = await User.findOne({ where: { id: userId }})

    return res.status(200).json({
        data: user
    })
    
}