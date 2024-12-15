const express = require ('express');
const {validateForm, submitForm} = require ('../formValidate.js');
const router = express.Router();

//Route for submitting the form

router.post('/submit', validateForm, submitForm);

module.exports = router;