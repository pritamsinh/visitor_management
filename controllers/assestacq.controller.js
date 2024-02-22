const models = require('../models')

//
function add2 (req, res){
    const assestacq = {
        date: req.body.date,
        purpose: req.body.purpose
    }
    models.Assestacq.create(assestacq).then(result => {
        res.status(201).json({
            message: "assest acquired by someone sucessfully",
            post: result
        });
     }).catch(error => {
        res.status(500).json({
            message: "something went wrong",
            error: error
        });
     });
}

//
function update2 (req, res) {
    const id = req.params.id;
    const updateAssestacq = {  
        date: req.body.date,
        purpose: req.body.purpose

    }
    models.Assestacq.update(updateAssestacq, {where: {id: id}}).then(result => {
        res.status(201).json({
            message: "assest acquired updated sucessfully",
            post: updateAssest
        });
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong",
            error: error
        });
    });
}

//
function destroy2(req, res){
    const id = req.params.id;
    models.Assestacq.destroy({where: {id: id}}).then(result => {
        res.status(201).json({
            message: "assest acquired deleted sucessfully",
            post: deleted
        });
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong",
            error: error
        });
    });
}
module.exports = {
    add2: add2 ,
    update2: update2,
    destroy2: destroy2
}