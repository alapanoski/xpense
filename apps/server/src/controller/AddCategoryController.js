const AddCategory = require("../services/categories.service.js");
const AddCategoryController = async (req, res) => {

    const username = req.body.username
    const category = req.body.category    
    AddCategory(username, category)


}

module.exports = AddCategoryController