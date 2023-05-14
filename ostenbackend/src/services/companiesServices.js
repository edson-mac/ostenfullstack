const companiesModel = require('../models/companiesModel');

const listCompanies = async () => { 
    const companies = await companiesModel.listCompanies();
    return companies;
}

const deleteCompany = async (id) => {
    const companies = await companiesModel.deleteCompanies(id);
    return companies;
}

const createCompany = async (name, rua, numero, bairro, cidade, estado) => {
    const company = await companiesModel.createCompany(name, rua, numero, bairro, cidade, estado);
    return company;
}

const getCompanyById = async (id) => {
    const company = await companiesModel.getCompanyById(id);
    return company;
}

const updateCompany = async (id, name, rua, numero, bairro, cidade, estado) => {
    const company = await companiesModel.updateCompany(id, name, rua, numero, bairro, cidade, estado);
    return company;
}

module.exports = { listCompanies, deleteCompany, createCompany, getCompanyById, updateCompany };