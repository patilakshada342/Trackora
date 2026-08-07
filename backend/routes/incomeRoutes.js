const express = require("express")

const router = express.Router();

const  { createIncome, getAllIncomes, updateIncome, deleteIncome } = require('../controllers/incomeController');

router.post("/",createIncome);
router.get("/",getAllIncomes);
router.put("/:id",updateIncome);
router.delete("/:id",deleteIncome);

module.exports = router;

