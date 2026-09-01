import { users } from "../store/users.store.js";


export const createUser = (req, res) => {
    const { username, email } = req.body;

    users.push({
        id: users.length + 1,
        username,
        email
    })

    res.status(201).json({
        message: "User created"
    })
}