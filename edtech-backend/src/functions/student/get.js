const {tableNameStudent} = require('../../config/tables')
const {middleware} = require('../../helpers/middleware')

exports.student = async (event, context) => middleware(event, context, async (event, context, error, success) => {
    try {
        const {page, limit, orderBy, orderDirection, isPagination} = context.fetchParams({
            orderBy: 'id',
        })

        let term = event.queryStringParameters?.term || undefined;

        const query = context.db(tableNameStudent).modify((queryBuilder) => {
            if (term !== undefined) {
                queryBuilder.where(`${tableNameStudent}.name`, 'Like', `%${term}%`).orWhere(`${tableNameStudent}.email`, 'Like', `%${term}%`)
            }
        })

        const result = await query.clone().count(('* as count')).first()
        const count = parseInt(result.count)
        let data = await query.clone()
            .select('*')
            .orderBy(orderBy, orderDirection)
            .modify((queryBuilder) => {
                if (isPagination) {
                    queryBuilder.offset((page * limit) - limit).limit(limit)
                }
            })

        return success({data, count, limit, page})
    } catch (e) {
        return error(e)
    }
})
