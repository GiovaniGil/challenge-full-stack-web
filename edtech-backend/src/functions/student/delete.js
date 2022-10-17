const {tableNameStudent} = require('../../config/tables')
const {middleware} = require('../../helpers/middleware')

exports.student = async (event, context) => middleware(event, context, async (event, context, error, success) => {
    try {
        const {id} = event.pathParameters;

        if (!id) {
            return
        }

        const removed = await context.db(tableNameStudent)
            .del()
            .where('id', id)

        return success({ "success": `${removed} removed`})
    } catch (e) {
        return error(e)
    }
});
