import cartService from "../services/cart.service.js";

export const createCart = async (req, res) => {
    try {
        const cart = await cartService.createCart();
        res.status(201).json({status: 'success', payload: cart})
    } catch (error) {
        res.status(500).json({status: 'error', error: error.message})
    }
}

export const getCartById = async (req, res) => {
    try {
        const cart = await cartService.getCartById(req.params.cid);
        if(!cart) return res.status(404).json({status: 'error', error: 'Cart not found'});
        res.status(200).json({status: 'success', payload: cart});
    } catch (error) {
        res.status(500).json({status: 'error', error: error.message})
    }
}

export const addProductToCart = async (req, res) => {
    try {
        const {cid, pid} = req.params;
        const quantity = Number (req.query.quantity || 1);

        const cart = await cartService.addProductToCart(cid, pid, quantity);
        res.json({status: 'success', payload: cart});
    } catch (error) {
        res.status(400).json({status: 'error', error: error.message})
    }
}

export const purchaseCart = async (req, res) => {
    try {
        const {cid} = req.params;

        const purchaserEmail = req.user?.email;
        if(!purchaserEmail) return res.status(401).json({status: 'error', error: 'Unauthorized'});

        const result = await cartService.purchaseCart(cid, purchaserEmail);
        res.json({status: 'success', payload: result});
    } catch (error) {
        res.status(400).json({status: 'error', error: error.message})
    }
}