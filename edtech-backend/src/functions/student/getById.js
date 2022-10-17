const { tableNameStudent } = require('../../config/tables');
const { middleware } = require('../../helpers/middleware')

exports.student = async (event, context) => middleware(event, context, async (event, context, error, success) => {
    try {
        let { id } = event.pathParameters;

        if (!id) {
            return error('Id não informado.');
        }

        let data = await context
          .db(tableNameStudent)
          .select(`*`, 'academic_registry as academicRegistry')
          .where(`id`, id).first();

        return success({ data })
    } catch (e) {
        return error(e)
    }
});
