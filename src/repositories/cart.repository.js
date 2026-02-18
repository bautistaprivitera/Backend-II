export default class CartRepository {
    constructor(dao) {
        this.dao = dao;
    }

    create() {
        return this.dao.create();
    }

    getById(cid) {
        return this.dao.getById(cid);
    }

    getRawById(cid) {
        return this.dao.getRawById(cid);
    }

    update(cid, data) {
        return this.dao.update(cid, data);
    }
}