import * as productDao from "../daos/product.daos.js"
import ProductRepository from "../repositories/product.repository.js";

const repo = new ProductRepository(productDao);

const createProduct = (data) => repo.create(data);
const getProducts = () => repo.getAll();
const getProductById = (id) => repo.getById(id);

export default { createProduct, getProducts, getProductById };