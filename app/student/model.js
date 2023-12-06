import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);
export default Student;
