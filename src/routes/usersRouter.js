import express from "express";


const router = express.Router();

const users = [
    {
        id: 1,
        username: "admin",
        email: "admin@admin.no"
    },
    {
        id: 2,
        username: "sander",
        email: "sander@jobloop.no"
    },
]

/* OPPGAVE: Lag et DELETE endepunkt
Hvor du kan slette en bruker, basert på id, epost eller brukernavn.
*/
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id == id);
    if (index < 0) {
        return res.status(404).json({"message": "User not found"})
    }

    users.splice(index, 1)
    res.status(200).json({message: "Deleted user"})
})


router.post('/', (req, res) => {
    const { username, email } = req.body;

    users.push({
        id: users.length,
        username,
        email
    })

    res.status(201).json({
        message: "User created"
    })
})

router.get('/', (req, res) => {
    res.status(200).json({
        data: users
    })
})


export default router;