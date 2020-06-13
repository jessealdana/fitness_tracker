const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const daySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
});

const day = mongoose.model("day", daySchema);

module.exports = day;