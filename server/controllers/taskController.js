const express = require('express');
const mongoose = require('mongoose');
const taskModel = require('../model/taskModel')

module.exports.getTasks = async(req,res)=>{
    try {
        const tasks = await taskModel.find();
        res.send(tasks)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports.addTask = async(req,res)=>{
    let newTask = new taskModel({
        title: req.body.title
    })

    try {
        const addedTask = await newTask.save();
        res.send(addedTask);        
    } catch (error) {
        res.status(400).json({err:error.message})
    }

}

module.exports.deleteTask = async(req,res)=>{
    try {
        const task = await taskModel.findById(req.params.id)
        const t = task.remove();
        res.send(t)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports.getById = async(req,res)=>{
    try {
        const task = await taskModel.findById(req.params.id)
        res.send(task)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports.updateTask = async(req,res)=>{
    try {
        const task = await taskModel.updateOne(
            {_id:req.params.id},
            {$set:{
                title:req.body.title
            }}
        )
        res.send(task)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}