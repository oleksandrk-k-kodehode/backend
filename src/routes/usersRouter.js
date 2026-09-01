import express from "express";

import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { getUserById } from "../controllers/getUserById.js";
import { updateUser } from "../controllers/updateUser.js";


const router = express.Router();

// localhost:8000/users
router.post('/', createUser)

// localhost:8000/users
router.get('/', getAllUsers)

/* Get user by ID */
router.get('/:userId', getUserById)
router.patch('/:userId', updateUser)

// localhost:8000/users/1/business/1
// localhost:8000/users/:userId/business/:businessId

export default router;