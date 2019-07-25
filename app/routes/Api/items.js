const express = require('express');
const router = express.Router();
//item model
const Item = require('../../src/Item');

//route GET items
//desc Get ALL Items
// access public


router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

//route post items
//desc Get ALL Items
// access public
router.post('/', (req, res) => {
  const newItem = new Item({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    university: req.body.university,
    major: req.body.major,
    cv: req.body.cv
  });
  newItem.save().then(item => res.json(item));
});

//route delet Api/items/:id
//desc Get ALL Items
// access public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: true }));
});

module.exports = router;









