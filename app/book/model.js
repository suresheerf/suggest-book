import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name:{type: String},
    author:{type: String},
    genre:{type: String},
    publishedYear:{type: Number},
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
