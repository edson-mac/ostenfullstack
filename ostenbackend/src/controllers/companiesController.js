const companiesService = require('../services/companiesServices');

const listCompanies = async (req, res) => {
    try {
        const companies = await companiesService.listCompanies();
        res.status(200).json(companies);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ "message": "Algo deu errado" });
    }
}

const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        await companiesService.deleteCompanie(id);
        res.status(204).json({ "message": "Empresa deletada com sucesso" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ "message": "Algo deu errado" });
    }
}

const createCompany = async (req, res) => {
    try {
        const { name, rua, numero, bairro, cidade, estado } = req.body;
        const company = await companiesService.createCompany(name, rua, numero, bairro, cidade, estado);
        res.status(201).json(company);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ "message": "Algo deu errado" });
    }
}

const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await companiesService.getCompanyById(id);
        res.status(200).json(company);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ "message": "Algo deu errado" });
    }
}

const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, rua, numero, bairro, cidade, estado } = req.body;
        const company = await companiesService.updateCompany(id, name, rua, numero, bairro, cidade, estado);
        res.status(200).json(company);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({"message":`${req.body}`});
    }
}

module.exports = { listCompanies, deleteCompany, createCompany, getCompanyById, updateCompany };