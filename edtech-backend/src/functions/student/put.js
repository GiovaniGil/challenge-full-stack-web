const { tableNameStudent } = require('../../config/tables');
const {middleware} = require('../../helpers/middleware')

exports.student = async (event, context) => middleware(event, context, async (event, context, error, success) => {
    try {
        const {id} = event.pathParameters;

        let { document, email, name } = JSON.parse(event.body)
                 
        if (!id) {
            return error('Id não informado.');
        }

        const student = { academic_registry: academicRegistry, document , email , name }

        await context.db(tableNameStudent).update(student).where('id', id);

        let data = await context
          .db(tableNameStudent)
          .select('*')
            .where('id', id).first();

        return success({data})
    } catch (e) {
        return error(e)
    }
});
