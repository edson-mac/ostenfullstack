const router = require('express').Router();
const companiesController = require('../controllers/companiesController');

const { listCompanies, deleteCompany, createCompany, getCompanyById, updateCompany } = companiesController;

router.get('/', listCompanies);
router.post('/', createCompany);
router.delete('/:id', deleteCompany);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompany);

module.exports = router;    