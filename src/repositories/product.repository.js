export default class ProductRepository {
    constructor(dao) {
        this.dao = dao;
    }

    create(data) {
        return this.dao.create(data);
    }

    getById(id) {
        return this.dao.getProductById(id);
    }

    update(id, data) {
        return this.dao.updateProduct(id, data);
    }

    getAll() {
        return this.dao.getAllProducts();
    }
}