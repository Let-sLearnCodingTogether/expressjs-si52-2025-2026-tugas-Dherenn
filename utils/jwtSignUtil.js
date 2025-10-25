import jwt from "jsonwebtoken"

export const jwtSignUtil = (user) => {
    const payload = {
        username : user.username,
        email : user.email
    }
    const expiresIn = {
        expiresIn : "1h"
    }

    return jwt.sign(payload, "JWT_SECRET_KEY", expiresIn)
}