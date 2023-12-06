import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
