import userService from "../services/user.service.js";

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.json(user);
    if (!user) {
        res.status(404).json({ error: "User not found" });
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    const newUser = await userService.createUser(user);
    res.status(201).json(newUser);
}

const deleteById = async (req, res) => {
    const { id } = req.params;
    await userService.deleteById(id);
    res.status(200).json(deletedUser);

    if (!deletedUser) {
        res.status(404).json({ error: "User not found" });
    }
}

export default { getAllUsers, getUserById, createUser, deleteById }