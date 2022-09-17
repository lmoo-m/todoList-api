import ListModels from "../models/ListModels.js";

export const getTask = async (req, res) => {
    try {
        const response = await ListModels.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getTaskById = async (req, res) => {
    try {
        const response = await ListModels.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createTask = async (req, res) => {
    try {
        await ListModels.create(req.body);
        res.status(201).json({ msg: "created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateTask = async (req, res) => {
    try {
        await ListModels.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteTask = async (req, res) => {
    try {
        await ListModels.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "deleted" });
    } catch (error) {
        console.log(error.message);
    }
};
