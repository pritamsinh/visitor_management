const models = require('../models')

//

function add (req, res){
    const assest = {
        name: req.body.name,
        department: req.body.department,
        status: req.body.status,
        remark: req.body.remark,
        aId: req.body.aid
    }
    models.Assests.create(assest).then(result => {
        res.status(201).json({
            message: "assest created sucessfully",
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
function update (req, res) {
    const id = req.params.id;
    const updateAssest = { name: req.body.name,
        department: req.body.department,
        status: req.body.status,
        remark: req.body.remark,
        aId: req.body.aid

    }
    models.Assests.update(updateAssest, {where: {id: id}}).then(result => {
        res.status(201).json({
            message: "assest updated sucessfully",
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
function destroy(req, res){
    const id = req.params.id;
    models.Assests.destroy({where: {id: id}}).then(result => {
        res.status(201).json({
            message: "assest deleted sucessfully",
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
    add: add,
    update: update,
    destroy: destroy
    
}