import userService from "../services/user.service.js";
import { createHash } from "../utils/crypt.js";

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
}

const getUserById = async (req, res) => {
    try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    
    if (!user) res.status(404).json({ error: "User not found" });

    res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createUser = async (req, res) => {
    try {
    const user = req.body;

    user.password = createHash(user.password);
    const newUser = await userService.createUser(user);
    res.status(201).json(newUser);
    }catch (error) {
        res.status(400).json({ error: error.message }); 
    }

}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
    const updated = await userService.update(id, req.body);

    if (!updated) res.status(404).json({ error: "User not found" });

    res.status(200).json(updated);

    }catch (error) {
        res.status(500).json({ error: error.message });
    } 
}

const deleteById = async (req, res) => {
    try {
    const { id } = req.params;
    const deletedUser = await userService.remove(id);
    
    if (!deletedUser) {
        res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({status: 'success' }, deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

export default { getAllUsers, getUserById, createUser, updateUser, deleteById }