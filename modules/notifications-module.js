const db = require("../db/dbConfig.js");
module.exports={}
module.exports = {
  add,
};
async function add(notification) {
  const [id] = await db('notifications').insert(notification);
  return findById(id);
}
function findById(id){
 return db('notifications').where({id})
}
