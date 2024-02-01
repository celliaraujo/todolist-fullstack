const validateFieldTitle = (request, response, next) =>{
    const { body } = request;

    if (body.title == undefined){
        response.status(400).json({message: 'The field "title" is required'});
    }

    else if (body.title == ''){
        response.status(400).json({message: 'Title cannot be empty'});
    }

    else next();

}

const validateFieldStatus = (request, response, next) =>{
    const { body } = request;

    if (body.status == undefined){
        response.status(400).json({message: 'The field "status" is required'});
    }

    else if (body.status == ''){
        response.status(400).json({message: 'Status cannot be empty'});
    }

    else next();

}

module.exports = {
    validateFieldTitle,
    validateFieldStatus
}