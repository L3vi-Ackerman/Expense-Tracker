const Category = require('../Models/Category');
const addCategory = async (req,res)=>{
    const {name,description}=req.body;
    try {
        const category = new Category({
            userId:req.user.id,
            name,
            description
        });
        const savedCategory = await Category.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        console.log("Error in addCategory: ",err)
        res.status(500).json({error: err})
    }
}
const getCategories = async (req,res)=>{
    try {
        const categories = await Category.find({userId:req.user.id}).sort({name:1});
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({error: err})
    }
};
const updateCategory = async (req,res)=>{
    const {id} = req.params;
    const {name,description} = req.body;
    try {
        const category = await Category.findById(id);
        if(!category)
            return res.status(404).json({message: 'Category not found'});
        if (category.userId.toString()!==req.user.id)
            return res.status(403).json({message: 'Unauthorized to update this category'});
        category.name = name || category.name;
        category.description = description || category.description;
        const udpatedCategory = await Category.save();
        res.status(200).json(udpatedCategory);
    } catch (err) {
        res.status(500).json({error: err})
    }
};

const deleteCategory = async (req,res)=>{
    const {id} = req.params;
    try {
        const category = await Category.findById(id);
        if(!category)
            return res.status(404).json({message:"Category not found!"});
        if(category.userId.toString()!==req.user.id)
            return res.status(403).json({message:"Unauthorized to delete this category"});
        await Category.remove();
        res.status(200).json({message:'Category deleted successfully!'});
    } catch (err) {
        res.status(500).json({error: err})
    }
};

module.exports = {addCategory,updateCategory,getCategories,deleteCategory};