const checkMillionDollarIdea = (req, res, next) => {
    const data = req.body;
    const numWeeks = data.numWeeks;
    const weeklyRevenue = data.weeklyRevenue;
    const totalMoney = Number(numWeeks) * Number(weeklyRevenue);

    if(!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
        res.status(400).send();
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
