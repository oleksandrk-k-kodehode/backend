import { users } from "../store/users.store.js";


export const updateUser = (req, res) => {
    const { userId } = req.params;
    const { email, username } = req.body;

    const user = users.find(user => user.id == userId);
    if (!user) {
        return res.status(404).json({"message": "User not found"})
    }

    /* PUT PATCH 
    - PUT: Puttter inn nye data i stedenfor
    - PATCH: Bytter KUN dataene vi ønsker å bytte.
    */

    if (email ) user.email = email;
    if (username) user.username = username;

    return res.status(200).json({
        message: "Updated user",
        data: user
    })
};

// localhost:8000/users/1