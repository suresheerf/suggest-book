import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    ageGroup:{type:String,enum:['child','teen','youngAdult','adult','middleAged','senior']},
    gender: {type:String,enum:['male','female','other']}
  },
  { timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);
export default Student;
