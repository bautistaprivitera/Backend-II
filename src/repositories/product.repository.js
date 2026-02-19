export default class ProductRepository {
    constructor(dao) {
        this.dao = dao;
    }

    create(data) {
        return this.dao.create(data);
    }

    getById(id) {
        return this.dao.getById(id);
    }

    update(id, data) {
        return this.dao.update(id, data);
    }

    getAll() {
        return this.dao.getAll();
    }
}