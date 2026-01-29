import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt} from "passport-jwt";
import { userModel } from "../models/user.model.js"; 

export const initializePassport = () => {
  const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) token = req.cookies["accessToken"];
    return token;
  };

  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([
          ExtractJwt.fromAuthHeaderAsBearerToken(),
          cookieExtractor,
        ]),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        try {
          const user = await userModel.findById(jwtPayload.id).lean();
          if (!user) return done(null, false);
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};