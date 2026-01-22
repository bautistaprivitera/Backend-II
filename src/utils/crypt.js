import bcrypt from "bcrypt";

export async function hashPassword(plain) {
    const saltRound = 10;
    return await bcrypt.hash(plain, saltRound);
}

export async function comparePassword(plain, hash) {
    return bcrypt.compare(plain, hash);
}