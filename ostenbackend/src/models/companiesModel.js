const connection = require(`../models/connection`)
require('dotenv').config();

const dbName = process.env.MYSQL_DATABASE;

const listCompanies = async () => {
    const [companies] = await connection.execute(
        `SELECT * FROM ${dbName}.Companies`);
    return companies;
};

const deleteCompany = async (id) => {
    const [companies] = await connection.execute(
        `DELETE FROM ${dbName}.Companies WHERE id = ?`, [id]);
    return companies;
};

const createCompany = async (name, rua, numero, bairro, cidade, estado) => {
    const [company] = await connection.execute(
        `INSERT INTO ${dbName}.Companies (name, rua, numero, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?)`,
         [name, rua, numero, bairro, cidade, estado]);
        return company;
};

const getCompanyById = async (id) => {
    const [company] = await connection.execute(
        `SELECT * FROM ${dbName}.Companies WHERE id = ?`, [id]);
    return company;
};

const updateCompany = async (id, name, rua, numero, bairro, cidade, estado) => {
    const [company] = await connection.execute(
        `UPDATE ${dbName}.Companies SET name = ?, rua = ?, numero = ?, bairro = ?, cidade = ?, estado = ? WHERE id = ?`,
         [name, rua, numero, bairro, cidade, estado, id]);
    return company;
};




module.exports = { listCompanies, deleteCompany, createCompany, getCompanyById, updateCompany };