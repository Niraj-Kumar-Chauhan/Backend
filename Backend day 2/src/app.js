const express = require('express')
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json())

app.post('/notes', async (req, res) => {
    const data = req.body   /* note: {title, description} */

    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

app.get('/notes', async (req, res) => {
    
    const notes = await noteModel.find()  //* it gives array [{note1}, {note2}, ......] if data exist in array. Or it give [] if data not exist in array

    // const notes = await noteModel.find({
    //     title: "test_title1"
    // })

    // const note = await noteModel.findOne({    //* it gives {} if data exist in array. Or it gives null if data not exist in array
    //     title: "test_title5"
    // })

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })
    
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    const title = req.body.title

    await noteModel.findOneAndUpdate({ _id: id }, { description: description, title: title })

    res.status(200).json({
        massage: "Note updated successfully"
    })
})

module.exports = app;