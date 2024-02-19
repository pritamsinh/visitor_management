const models = require('../models')

//

const addAssest = async (req, res) => {
    let info ={
        id: req.body.id,
        name: req.body.name,
        department: req.body.department,
        status: req.body.status,
        remark: req.body.remark
    }
    const assest = await Assest.create(info)
    res.status(200).send(assest)
    console.log(assest)
}

//
const updateAssest = async (req, res) => {
    let id = req.params.id
    const assest = await Assest.update(req.body, {where: {id: id}})
    res.status(200).send(assest)
}

//
const deleteAssest = async (req, res) => {
    let id = req.params.id
    await Assest.destroy({ where: { id: id}})
    res.status(200).send('assest is deleted !')
}

module.exports = {
    addAssest,
    updateAssest,
    deleteAssest
}