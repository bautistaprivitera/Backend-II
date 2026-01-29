import * as userDaos from "../daos/user.daos.js";

const getAll = async () => {
  return await userDaos.getAllUsers();
};

const getById = async (id) => {
  const user = await userDaos.getUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const create = async (userData) => {
  const newUser = await userDaos.createUser(userData);
  return newUser;
};

const update = async (id, userData) => {
  const user = await userDaos.updateUser(id, userData);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const remove = async (id) => {
  const user = await userDaos.deleteById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export default { getAll, getById, create, update, remove };
