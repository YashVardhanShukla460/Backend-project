const asyncHandler = (requestHandler) =>{
    Promise.resolve(requestHandler).catch((err)=> next(err));       
    };

export {asyncHandler};