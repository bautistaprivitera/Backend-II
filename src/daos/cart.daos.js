import {cartModel} from "../models/cart.model.js";

export const create = () => cartModel.create({products: []});
export const getById = (cid) => cartModel.findById(cid).populate("products.product").lean();
export const getRawById = (cid) => cartModel.findById(cid);
export const update = (cid, data) => cartModel.findByIdAndUpdate(cid, data, {new: true}).lean();