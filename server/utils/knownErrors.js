/**
 * For demonstrational purposes
 * This is how to format known errors that can occur in the application
 * 
 * error: the error that should be caught. 
 * code: the statuscode that the error response should have
 * message: The message that will go with the response.
 * 
 */
 module.exports = [
    {
        error: 'resource not found',
        code: 404,
        message: 'The requested resource was not founds'
    },
    {
        error: 'Cast to Number failed for value',
        code: 400,
        message: 'Could not read value as a number'
    },
    {
        error: 'jwt malformed',
        code: 403,
        message: 'Forbidden'
    },
    {
        error: 'invalid signature',
        code: 403,
        message: 'Forbidden'
    },
    {
        error: 'User validation failed: email: Provide a valid email, password: Password must have minimum 8 characters',
        code: 400,
        message: 'Provide valid email & password. Password must have minimum 8 characters'
    },
    {
        error: 'User validation failed: password: Password must have minimum 8 characters',
        code: 400,
        message: 'Provide valid password. Password must have minimum 8 characters'
    },
    {
        error: 'User validation failed: email: Provide a valid email',
        code: 400,
        message: 'Provide valid email'
    }
]
