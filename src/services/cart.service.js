import * as cartDaos from "../daos/cart.daos.js";
import * as productDaos from "../daos/product.daos.js";
import * as ticketDaos from "../daos/ticket.daos.js";

import CartRepository from "../repositories/cart.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import TicketRepository from "../repositories/ticket.repository.js";

const cartRepo = new CartRepository(cartDaos);
const productRepo = new ProductRepository(productDaos);
const ticketRepo = new TicketRepository(ticketDaos);

const createCart = () => cartRepo.create();

const getCartById = (cid) => cartRepo.getById(cid);

const addProductToCart = async (cid, pid, quantity = 1) => {
    
    const cart = await cartRepo.getRawById(cid);
    if(!cart) throw new Error("Cart not found");

    const product = await productRepo.getById(pid);
    if(!product) throw new Error("Product not found");

    const idx = cart.products.findIndex(p => String(p.product) === String(pid));
    if(idx === -1) cart.products.push({product: pid, quantity});
    else cart.products[idx].quantity += quantity;

    await cart.save();
    return cartRepo.getById(cid);
}

const purchaseCart = async (cid, purchaserEmail) => {
  const cart = await cartRepo.getRawById(cid);
  if (!cart) throw new Error("Cart not found");

  const fullCart = await cartRepo.getById(cid);
  const rejectedProducts = [];
  let amount = 0;

  for (const item of fullCart.products) {
    const product = item.product;
    const quantity = item.quantity;

    if (!product || typeof product.stock !== "number") {
      rejectedProducts.push({ product: item.product?._id ?? null, quantity });
      continue;
    }

    if (product.stock >= quantity) {
      await productRepo.update(product._id, { stock: product.stock - quantity });
      amount += product.price * quantity;
    } else {
      rejectedProducts.push({ product: product._id, quantity });
    }
  }

  let ticket = null;

  if (amount > 0) {
    const code = `T-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    ticket = await ticketRepo.create({ code, amount, purchaser: purchaserEmail });

    const rejectedIds = new Set(rejectedProducts.map(r => String(r.product)));
    cart.products = cart.products.filter(p => rejectedIds.has(String(p.product)));

    await cart.save();
  }

  return { ticket, rejectedProducts };
};

export default { createCart, getCartById, addProductToCart, purchaseCart };