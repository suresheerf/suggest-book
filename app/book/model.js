import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title:{type: String},
    isbn:{type: String},
    pageCount:{type:Number},
    publishedDate:{type: Date},
    thumbnailUrl:{type: String},
    shortDescription:{type: String},
    longDescription:{type: String},
    status : {type:String},
    authors:{type: [String]},
    categories:{type:[String]}
  },
  { timestamps: true }
);
bookSchema.index({tile:"text",shortDescription:"text",categories:"text"});
const Book = mongoose.model('Book', bookSchema);
export default Book;
