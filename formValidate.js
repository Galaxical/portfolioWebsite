// const Submission = require ('./api/formSchema.js');


//validate form
const validateForm = (req, res, next) =>{
    const {fullName, email, mobile, subject, message} = req.body

    if(!fullName || !email || !mobile || !subject || !message){
         return res.status(400).json({error: 'All fields are required'})
    }

    next(); //proceed to submission if validation is passed
}

//form submission
const submitForm = async (req, res) => {
    try {
        const {fullName, email, mobile, subject, message} = req.body;

        //Save the data to the database
        const newSubmission = new Submission ({
            fullName,
            email,
            mobile,
            subject,
            message,
        });

        await newSubmission.save();
        console.log('Form data saved:', newSubmission);  // Log saved data
        res.status(201).json({message: "Form submitted successfully"});

    } catch (error){
        console.error("Error submitting form! Please try again.", error);
        res.status(500).json({error: "Server error."})
    }
}

module.exports = {validateForm, submitForm};