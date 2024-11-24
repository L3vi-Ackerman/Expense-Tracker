const Budget = require('../Models/Budget');
const Expense = require('../Models/Expense');

const addBudget =async(req,res)=>{
    const { amount, startDate, endDate } = req.body;

    try {
        const budget = new Budget({
            userId: req.user.id,
            amount,
            startDate,
            endDate,
        });

        const savedBudget = await budget.save();
        res.status(201).json(savedBudget);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    } 
}
const getBudgets =async(req,res)=>{
    try {
        const budgets = await Budget.find({ userId: req.user.id });
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
const getBudgetSummary =async(req,res)=>{
    try {
        const budgets = await Budget.find({userId:req.user.id});
        const budgetSummary = [];
        for(const budget of budgets){
            const spentAmount = await Expense.aggregate([
                {
                    $match:{
                        userId:req.user.id,
                        date:{$gte:budget.startDate, $lte:budget.endDate},
                    },
                },
                {
                    $group:{
                        _id:null,
                        totalSpent:{$sum:'$amount'}
                    },
                },
            ]);
            const remainBudget = budget.amount -(spentAmount[0]?.totalSpent || 0);
            budgetSummary.push({
                ...budget._doc,
                spentAmount:spentAmount[0]?.totalSpent || 0,
                remainingBudget,
            });
        }
        res.status(200).json(budgetSummary);
    } catch (err) {
        res.status(500).json({error: err})
    }
}

module.exports ={addBudget,getBudgets,getBudgetSummary};
