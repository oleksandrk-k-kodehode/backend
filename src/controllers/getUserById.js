import { users } from "../store/users.store.js";


// localhost/8000/users/1
export const getUserById = (req, res) => {
    const { userId } = req.params;

    const user = users.find(user => user.id == userId);
    if (!user) {
        return res.status(404).json({
            error: "User not found"
        })
    }

    return res.status(200).json({
        data: user
    })
    
}