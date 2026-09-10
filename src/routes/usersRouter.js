import express from "express";

import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { getUserById } from "../controllers/getUserById.js";
import { updateUser } from "../controllers/updateUser.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../schemas/create.user.schema.js";
import { deleteUser } from "../controllers/deleteUser.js";
import hasPermission from "../middlewares/hasPermissions.js";


const router = express.Router();

// localhost:8000/users
router.post('/', validate(createUserSchema), createUser)

// localhost:8000/users
router.get('/example', isLoggedIn, hasPermission, getAllCoolPeople);
router.get('/', hasPermission, getAllUsers)

// DELETE: localhost:8000/users/1
router.delete('/:userId', deleteUser);

/* Get user by ID */
router.get('/:userId', getUserById)
router.patch('/:userId', updateUser)

// localhost:8000/users/1/business/1
// localhost:8000/users/:userId/business/:businessId

export default router;