import { describe, it, expect } from "vitest";
import { validateUserDetails } from "../../src/util/validateUserDetails";

describe("Validate user details!", () => {
    it("Should accept a valid User!", () => {
        const user = {
            name: "Sander",
            email: "sander@haha.no",
        };

        const result = validateUserDetails(user);
        expect(result).toBe(true);
    });
    it("Should not accept an invalid name", () => {
        const user = {
            name: "admin",
            email: "admin@admin.no",
        };
        const result = validateUserDetails(user);
        expect(result).toBe(false);
    });

    it("should not accept missing name", () => {
        const user = {
            email: "hehe@haha.no",
        };
        const result = validateUserDetails(user);
        expect(result).toBe(false);
    });
});
