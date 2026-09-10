import z from "zod";


export const createUserSchema = z.object({
    body: z.object({
        username: z.string({ error: 'Username must be a string.' })
            .min(3, { error: 'Username must be at least 3 characters.' })
            .max(16, { error: 'Username can only contain 16 characters.' }),
        email: z.email({ error: 'Email must be a valid email.' }),
        password: z.string({ error: 'Password must be a string.' })
            .min(8, { error: 'Password must be at least 8 characters' })
            .max(16, { error: 'Password can only contain 16 characters.' })
    })
})