import { users } from "../store/users.store.js";


export const updateUser = (req, res) => {
    const { userId } = req.params;
    const { email, username } = req.body;

    

    return res.status(200).json({
        message: "Updated user",
        data: user
    })
};

// localhost:8000/users/1