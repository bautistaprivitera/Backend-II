import { userModel } from "../models/user.model.js";

export const getAllUsers = async () => userModel.find().lean();
export const getUserById = async (id) => userModel.findById(id).lean();
export const createUser = async (user) => userModel.create(user);
export const deleteById = async (id) => userModel.findByIdAndDelete(id);