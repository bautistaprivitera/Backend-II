import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model";
import { validPassword } from "../utils/crypt";

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({ email });

        if(!user) return res.status(401).json({error: "Invalid credentials"});

        const ok = validPassword(password, user);
        if(!ok) return res.status(401).json({error: "Invalid credentials"});

        const token = jwt.sing({id: user._id}, {role: user.role, email: user.email}, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.cookie('accessToken', token, {httpOnly: true});
        res.status(200).json({status: 'success'});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const current = async (req, res) => res.json(req.user);