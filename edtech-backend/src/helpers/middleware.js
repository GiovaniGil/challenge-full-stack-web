const { responseCross, getFetchParams } = require('./utils')
const debug = require('debug')('middleware')
var db = db || require('../config/db').knex

const error = (error) => {
    let statusCode, body

    statusCode = 400
    body = {
        statusCode,
        message: error
    }

    return responseCross({
        statusCode,
        body: JSON.stringify(body)
    })
}

const success = (response) => {
    return responseCross({
        statusCode: 200,
        body: JSON.stringify(response)
    })
}

const middleware = (event, context, next) => {
    context.callbackWaitsForEmptyEventLoop = false
    debug('event: %o', event)
    debug('context: %o', context)
    context.fetchParams = (config = {}) => {
        return getFetchParams(event, config)
    }
    context.db = db

    return next(event, context, error, success)
}

module.exports = {
    middleware
}
