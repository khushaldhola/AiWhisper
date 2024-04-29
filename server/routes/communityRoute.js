const express = require('express');
const Community = require('../models/Community');

const router = express.Router();

// Get Community
router.get('/', async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities)
    } catch (error) { res.status(500).json({ message: error.message }) }
})

// Create a new Community
router.post('/', async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            createdBy: req.body.createdBy,
            members: [{ user: req.body.createdBy }],
            posts: [] 
        }

        const communityRes = await Community.create(data);
        res.status(201).json(communityRes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;