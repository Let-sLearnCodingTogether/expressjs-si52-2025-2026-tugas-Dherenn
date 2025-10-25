import passport from "passport";
import {ExtractJwt, Strategy} from "passport-jwt"
import UserModel from "../model/userModel.js";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "JWT_SECRET_KEY"
}

passport.use(
    new Strategy(opts, async (payload, done) => {
        try{
            console.log(payload)
            const user = await UserModel.findOne({
                email : payload.email,
            });
            if(!user){
                return done (null, false)
            }
            return done (null, {
                id: user._id,
                email: user.email,
                username: user.username
            })
        }catch(error){
            return done (null, false)
        }
    })
)