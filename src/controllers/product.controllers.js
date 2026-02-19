import productService from "../services/product.service.js";

export const createProduct = async (req, res) => {
    try {
        const created = await productService.createProduct(req.body);
        res.status(201).json({status: 'success', payload: created});
    } catch (error) {
        res.status(400).json({status: 'error', error: error.message });
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json({status: 'success', payload: products});
    } catch (error) {
        res.status(500).json({status: 'error', error: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.pid);
        if(!product) return res.status(404).json({status: 'error', error: 'Product not found'});
        res.status(200).json({status: 'success', payload: product});
    } catch (error) {
        res.status(500).json({status: 'error', error: error.message });
    }
}