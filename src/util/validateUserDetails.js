// Example
export const validateUserDetails = (user) => {
    if (!user.name || user.name === "admin") {
        return false;
    }

    if (!user.email) {
        return false;
    }

    return true;
};
