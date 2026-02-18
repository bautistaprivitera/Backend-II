import * as userDaos from "../daos/user.daos.js";
import UserRepository from "../repositories/user.repository.js";

const userRepository = new UserRepository(userDaos);

const getAllUsers = async () => userRepository.getAll();
const getUserById = async (id) => userRepository.getById(id);
const getUserByEmail = async (email) => userRepository.getByEmail(email);
const createUser = async (user) => userRepository.create(user);
const updateUser = async (id, user) => userRepository.update(id, user);
const deleteById = async (id) => userRepository.delete(id);


export default { getAllUsers, getUserById, getUserByEmail, createUser, updateUser, deleteById };
