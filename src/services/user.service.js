import * as userDaos from "../daos/user.daos.js";

const getAllUsers = async () => {
  return await userDaos.getAll();
};

const getUserById = async (id) => {
  const user = await userDaos.getUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const createUser = async (userData) => {
  const newUser = await userDaos.createUser(userData);
  return newUser;
};

const deleteById = async (id) => {
  const user = await userDaos.deleteById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export default { getAllUsers, getUserById, createUser, deleteById };
