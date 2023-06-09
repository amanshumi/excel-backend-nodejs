const TaskList = require("../model/tasklist");

const createTask = async (req, res) => {
    const allTasks = req.body;

    if(allTasks.length < 1) {
        return res.status(403).json({message: "data cannot be empty"});
    }

    await TaskList.bulkCreate(req.body).then((result) => {
        return res.status(201).json({message: "task uploaded", data: req.body});
    }).catch((err) => {
        return res.status(500).json({message: "server error"});
    })
}

const getTasks = async (req, res) => {
    await TaskList.findAll()
    .then((result) => {
        return res.status(200).json({
            message: "success",
            data: result
        })
    })
    .catch((err) => {
        return res.status(500).json({message: "server error"});
    })
}

const updateTasks = async (req, res) => {
    const uuid = req.params.uuid;

    if(!uuid) {
        return res.status(403).json({message: "uuid is required"});
    }

    TaskList.update(req.body, {
        where: {
            id: uuid
        }
    }).then((result) => {
        console.log(result);
        return res.status(200).json({message: "update successful"})
    }).catch((err) => {
        return res.status(500).json({message: "server error"});
    })
}

const deleteTask = async (req, res) => {
    const uuid = req.params.uuid;

    if(!uuid) {
        return res.status(403).json({message: "uuid is required"});
    }

    await TaskList.destroy({where: {id: uuid}})
    .then((result) => {
        return res.status(200).json({message: "delete success"})
    })
    .catch((err) => {
        return res.status(500).json({message: "server error"});
    })
}

module.exports = {
    createTask,
    getTasks,
    updateTasks,
    deleteTask
}