
module.exports = ({ statusCode, message }) => {
    const customError = new Error(message); 
    customError.statusCode = statusCode;    
    return customError;
};
