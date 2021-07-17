const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');




const Schema = mongoose.Schema;

const Film = new Schema({
    category: String,
    episodes: [
      {
        episode: String,
        url: String,
        type: String
      }
    ],
    imageUrl: String,
    title: String,
    slug: { $type: String, slug: "title", unique: true }
    },
    { typeKey: '$type',
      timestamps: true
    } 
);


// Add plugins
mongoose.plugin(slug);
Film.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all' 
});

module.exports = mongoose.model('Film', Film);