import { getAllUsers, getUserById, createUser, deleteById } from "../daos/user.daos";

const getAllUsers = async () => getAllUsers();

const getUserById = async (id) => {
    const user = await getUserById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

const createUser = async (user) => {
    const createUser = await createUser(user);
}

const deleteById = async (id) => {
    const deletedUser = await deleteById(id);
    if (!deletedUser) {
        throw new Error("User not found");
    }
    return deletedUser;
}

export default { getAllUsers, getUserById, createUser, deleteById }