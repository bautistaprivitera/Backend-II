import bcrypt, { hash } from "bcrypt";

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const validPassword = (password, user) => bcrypt.compareSync(password, user.password);