import { request } from "express";
import { describe, it, expect } from "vitest";

import app from "../../src/app.js";

describe("POST /users/", async () => {
    it("Should create a user", async () => {
        const payload = {
            username: "TsetUser",
            email: "testuser@test.com",
            password: "test1235",
        };
        const response = await request(app).post("/users/").send(payload);
        expect(response.status).toBe(201);
    });

    it("should fail with invalid email", async () => {
        const payload = {
            username: "TsetUser",
            email: "testuser",
            password: "test1235",
        };
        const response = await request(app).post("/users/").send(payload);
        expect(response.status).toBe(400);
    });
});
