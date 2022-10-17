const responseCross = (response) => {
    return {
        ...response,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
    }
}

const getFetchParams = (event, config) => {
    var qs = require('qs');
    let defaults = {
        page: undefined,
        limit: undefined,
        orderBy: "id",
        orderDirection: "ASC",
        filters: {}
    }

    defaults = {
        ...defaults,
        ...config
    }

    const params = qs.parse(event.queryStringParameters)

    const page = (params.page && parseInt(params.page)) || defaults.page
    const limit = (params.limit && parseInt(params.limit)) || defaults.limit
    const isPagination = page !== undefined && limit !== undefined
    const orderBy = params.orderBy || defaults.orderBy
    const orderDirection = params.orderDirection || defaults.orderDirection
    const filters = params.filters || defaults.filters

    return { page, limit, orderBy, orderDirection, isPagination, filters }
}

module.exports = {
    responseCross,
    getFetchParams,
}
