export default class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAll() {
        return this.dao.getAllUsers();
    }

    getById(id) {
        return this.dao.getUserById(id);
    }

    getByEmail(email) {
        return this.dao.getByEmail(email);
    }

    create(user) {
        return this.dao.createUser(user);
    }

    update(id, user) {
        return this.dao.updateUser(id, user);
    }

    delete(id) {
        return this.dao.deleteById(id);
    }
}