import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/errorHandler.js';
import { createBook } from './service.js';

export const createOne = catchAsync(async(req,res,next)=>{
    const book = await createBook(req.body);

    res.status(200).json({book})
})