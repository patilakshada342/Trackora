const express =require("express");  //connect with express

const router = express.Router();        //define router

const {createCategory , getAllCategories , updateCategory , deleteCategory} = require("../controllers/categoryController");          //import the categorycontoller

router.post("/",createCategory);        //define the routes
router.get("/",getAllCategories); 
router.put("/:id",updateCategory); 
router.delete("/:id",deleteCategory); 

module.exports = router;            //export router