const Expense = require('../Models/Expense');

const addExpense =async (req,res)=>{
    const {title,amount,category,date}= req.body;
    try {
        const expense = new Expense({
            userId:req.user.id,
            title,
            amount,
            category,
            date: date || new Date(),
        });

        const savedExpense = await expense.save();
        return res.status(201).json(savedExpense);
    } catch (err) {
        console.log("Error in addExpense: ",err)
        return res.status(500).json({error: err});
    }
}
const getExpenses=async(req,res)=>{
    const {category,startDate, endDate} = req.query;
    try {
        const filter = {userId:req.user.id};

        if(category) filter.category = category;
        if(startDate || endDate) {
            filter.date = {};
            if (startDate) filter.date.$gte = new Date(startDate);
            if (endDate) filter.date.$lte = new Date(endDate);
        }

        const expenses = await Expense.find(filter).sort({date:-1});
        res.status(200).json(expenses);
    } catch (err) {
        console.log("error in getExpenses: ", err)
       return res.status(500).json({ message: 'Server error', error: err.message });
    }
}
const updateExpense=async(req,res)=>{
    const {id} = req.params;
    const {title, amount,category, date} = req.body;

    try {
        const expense = await Expense.findOne(id);
        if(!expense)
            return res.status(404).json({message:"Expense not found"});

        if (expense.userId.toString()!==req.user.id){
            return res.status(403).json({message:"Unauthorized to update this expense"})
        }

        expense.title = title || expense.title;
        expense.amount = amount  || expense.amount;
        expense.category = amount || expense.category;
        expense.date = date || expense.date;

        const updatedExpense = await expense.save();
        res.status(200).json(updatedExpense);
    } catch (err) {
        res.status(500).json({message:"Server Error", error: err.message});
    }
}
const deleteExpense=async(req,res)=>{
    const {id} = req.params;
    try {
        const expense = await Expense.findById(id);
        if(!expense){
            return res.status(404).json({message:"Expense not found"});
        }
        if(expense.userId.toString()!==req.user.id){
            return res.status(403).json({message:"Unauthorized to delete this expense"});
        }
        await expense.remove();
        res.status(200).json({message:'Expense deleted successfully!'});
    } catch (err) {
        res.status(500).json({messaege:"Server error", error: err.message})
    }
}

module.exports = {addExpense,getExpenses,deleteExpense,updateExpense};