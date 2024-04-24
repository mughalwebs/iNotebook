const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// Route # 1 : Fetching Notes from database using endpoint (/fetchAllNotes)
router.get('/fetchAllNotes', fetchUser, async (request, response) => {
    try {
        const notes = await Notes.find({ user: request.user.id });
        response.send(notes);
    } catch (error) {
        console.error(error);
        response.status(500).send("Internal Server Error.");
    }
})
// Route # 2 : Adding Notes to database using endpoint (/fetchAllNotes)
router.post('/addingNotes', [
    body('title', "Enter Title in Notes.").isLength({ min: 1 }),
    body('description', "Description must be at least 5 characters..").isLength({ min: 1 })
], fetchUser, async (request, response) => {
    try {
        const { title, description, tag } = request.body;
        const error = validationResult(request);
        if (!error.isEmpty()) {
            return response.status(400).json({ error: error.array() });
        }
        const note = new Notes({
            title, description, tag, user: request.user.id
        })
        const savedNote = await note.save();
        response.json(savedNote);
    } catch (error) {
        console.error(error);
        response.status(500).send("Internal Server Error.");
    }
})
// Route # 3 : Update an existing Notes using endpoint (/updateNotes)
router.put('/updateNotes/:id', fetchUser, async (request, response) => {
    try {
        const { title, description, tag } = request.body;
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }
        let note = await Notes.findById(request.params.id);
        if (!note) {
            return response.status(404).send('Not Found.');
        }
        if (note.user.toString() !== request.user.id) {
            return response.status(401).send('Not Allowed.');
        }
        note = await Notes.findByIdAndUpdate(request.params.id, { $set: newNote }, { new: true });
        response.json(note);
    } catch (error) {
        console.error(error);
        response.status(500).send("Internal Server Error.");
    }
})
// Route # 4 : Delete an existing Notes using endpoint (/deleteNotes)
router.delete('/deleteNotes/:id', fetchUser, async (request, response) => {
    try {
        let note = await Notes.findById(request.params.id);
        if (!note) {
            return response.status(404).send('Not Found.');
        }
        if (note.user.toString() !== request.user.id) {
            return response.status(401).send('Not Allowed.');
        }
        note = await Notes.findByIdAndDelete(request.params.id);
        response.json({ status: 200, description: 'Successfully Deleted.' });
    } catch (error) {
        console.error(error);
        response.status(500).send("Internal Server Error.");
    }
})
module.exports = router;