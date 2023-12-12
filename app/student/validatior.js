import Joi from 'joi';

const studentSchema = Joi.object(
    {
        ageGroup: Joi.string().valid('child','teen','youngAdult','adult','middleAged','senior'),
        gender: Joi.string().valid('male','female','other'),
    }
)


export const isValid = (studentObj)=>{
    const result = Joi.validate(studentObj,studentSchema);
    console.log("result:",result);
}