  const { Schema, default: mongoose } = require("mongoose");

  const productSchema = new Schema({
    title: {type: String, required:true, unique:true},
    description:String,
    price:{type: Number, min:[30, 'minimum price is 30'] , required:[ true, 'Please enter price'] },
    discountPercentage:{type: Number, min:[0, 'wrong min rating'] , max:[50,'wrong max rating']},
    rating : {type: Number, min:[0, 'wrong min rating'] , max:[5,'wrong max rating']},
    brand:{type: String, required: [ true, 'Please enter brand'] },
    category:{type: String, required: [ true, 'Please enter category'] },
    thumbnail : {type: String, required: [ true, 'Please enter thumbnail']},
    image: [ String],
  });
  exports.Product = mongoose.model('Product', productSchema ); 