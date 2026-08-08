const express = require("express")

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware")

const  { createIncome, getAllIncomes, updateIncome, deleteIncome } = require('../controllers/incomeController');

router.post("/",authMiddleware,createIncome);
router.get("/",authMiddleware,getAllIncomes);
router.put("/:id",authMiddleware,updateIncome);
router.delete("/:id",authMiddleware,deleteIncome);

module.exports = router;

