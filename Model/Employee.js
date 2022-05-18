const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
}, {
    timestamps: true
})


module.exports = mongoose.model("Employee", employeeSchema)