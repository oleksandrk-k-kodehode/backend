import { includes } from "zod";

export default function hasPermission (req, res, next) {
    const number = Math.floor((Math.random() + 1) * 6)
    if (number == 6) {
        return res.status(401).json({ error: "Russian rouletted your ahh" });
    } else {
        next();
    }
} 