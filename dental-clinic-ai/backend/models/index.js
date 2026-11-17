const db=require('../configs/database.config');const {QueryTypes}=require('sequelize');
const rows=(sql,values=[],transaction)=>db.query(sql,{replacements:values,type:QueryTypes.SELECT,transaction});
const run=(sql,values=[],transaction)=>db.query(sql,{replacements:values,transaction,...(/^\s*INSERT/i.test(sql)?{type:QueryTypes.INSERT}:{})});
module.exports={db,rows,run};
