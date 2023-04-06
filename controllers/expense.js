const Expense = require('../models/expense');

exports.postExpenseData = async (req, res, next) => {
    try {
        if (!req.body.amount || !req.body.description || !req.body.category) {
            throw new Error('Missing Some Data');
        }
        const newAmount = req.body.amount;
        const newDescription = req.body.description;
        const newCategory = req.body.category;
        let data = await Expense.create({
            amount: newAmount,
            description: newDescription,
            category: newCategory
        });
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.getExpenseData = async (req, res, next) => {
    try {
        let data = await Expense.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.deleteExpenseData = async (req, res, next) => {
    try {
        const id = req.params.id;
        let data = await Expense.destroy({ where: { id: id } });
        res.status(200).json({ id: id });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};