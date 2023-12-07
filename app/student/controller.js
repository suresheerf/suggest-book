import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/errorHandler.js';
import { createStudent } from './service.js';

export const createOne = catchAsync(async(req,res,next)=>{
    const student = await createStudent(req.body);

    res.status(200).json({student})
})