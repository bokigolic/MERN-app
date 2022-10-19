//@desc Get goals
//@route GET /api/goals
//@scces Private


const getGoals = (req, res) => {
  res.status(200).json({ message: `get goal ${req.params.id}` })

  //@desc SET goals
  //@route POST /api/goals
  //@scces Private


  const setGoal = (req, res) => {
    res.status(200).json({ message: `set goal ${req.params.id}` })
  }
  //@desc SET goals
  //@route POST /api/goals
  //@scces Private


  const updateGoal = (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })

  }
  //@desc delete goals
  //@route DELETE/api/goals/:id
  //@scces Private


  const deleteGoal = (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}`})

  }

  module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
  }