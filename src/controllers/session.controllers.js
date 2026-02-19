import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import { validPassword } from "../utils/crypt.js";
import UserDTO from "../dto/user.dto.js";

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({ email }).lean();

        if(!user) return res.status(401).json({error: "Invalid credentials"});

        const ok = validPassword(password, user);
        if(!ok) return res.status(401).json({error: "Invalid credentials"});

        const payload = {id: user._id, role: user.role, email: user.email};

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.cookie('accessToken', token, {httpOnly: true});
        return res.status(200).json({status: 'success', token});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const current = async (req, res) => {

    return res.json({status: 'success', payload: new UserDTO(req.user)});

}