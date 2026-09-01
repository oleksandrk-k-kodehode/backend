import { users } from "../store/users.store.js"


export const getAllUsers = (req, res) => {
    res.status(200).json({
        data: users
    })
}