const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uchihaSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Ninja Name is required"],
    },
    eye: {
      type: String,
      required: [true, "eye is required"],
    },
  },
  { versionKey: false }
);

uchihaSchema.index({ "$**": "text" });

const Uchiha = (module.exports = mongoose.model(
  "uchiha",
  uchihaSchema,
  "uchiha"
));

module.exports.getUchihas = function (callback) {
  Uchiha.find(callback);
};

module.exports.createUchihas = function(uchiha, callback){
  Uchiha.create(uchiha, callback)
}