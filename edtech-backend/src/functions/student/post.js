const { tableNameStudent } = require('../../config/tables');
const {middleware} = require('../../helpers/middleware')

exports.student = async (event, context) => middleware(event, context, async (event, context, error, success) => {
    try {    

      let { academicRegistry, document, email, name } = JSON.parse(event.body)
      
      if (!academicRegistry || !document || !name || !email) {
        return error('Campos obrigatórios não informados.')
      }

      const repeated = await context
        .db(tableNameStudent)
        .select('*')
        .where('document', document)
        .first();

      if (repeated?.id) {
        return error('Documento já cadastrado.');
      }

      const student = {
        academic_registry: academicRegistry, document , email , name }


      const [id] = await context
        .db(tableNameStudent)
        .insert(student);
      let data = await context
        .db(tableNameStudent)
        .select('*')
        .where('id', id).first();

      return success({data})
  } catch (e) {
      return error(e)
  }
});
