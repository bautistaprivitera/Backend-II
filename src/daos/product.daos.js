import { productModel } from "../models/product.model";

export const create = (data) => productModel.create(data);
export const getById = (id) => productModel.findById(id).lean();
export const update = (id, data) => productModel.findByIdAndUpdate(id, data, {new: true}).lean();
export const getAll = () => productModel.find().lean();