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
    const schema = {
        name: { type: "string", optional: false, max: "100" },
        department: { type: "string", optional: false, max: "100" },
        status: { type: "string", optional: false },
        remark: { type: "string", optional: false, max: "500" },
    }
    const v = new Validator();
    const validationResponse = v.validate(assest, schema);
    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed!!!",
            errors: validationResponse
        })
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
    const updateAssest = {  
        name: req.body.name,
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
function find(req, res){
    models.Assests.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong!"
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
    find: find,
    destroy: destroy
    
}