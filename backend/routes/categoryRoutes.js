const express =require("express");  //connect with express
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();        //define router

const {createCategory , getAllCategories , updateCategory , deleteCategory} = require("../controllers/categoryController");          //import the categorycontoller

router.post("/",authMiddleware,createCategory);        //define the routes
router.get("/",authMiddleware,getAllCategories); 
router.put("/:id",authMiddleware,updateCategory); 
router.delete("/:id",authMiddleware,deleteCategory); 

module.exports = router;            //export router