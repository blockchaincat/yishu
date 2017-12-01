const Article = require('../../models/articles');
const User = require('../../models/users');
const bcrypt = require('bcrypt-nodejs');
class Edit{
  static async editDescription(userId,description){
    return new Promise((resolve,reject)=>{
      try {
        User.findByIdAndUpdate(userId,{ $set: { description: description }},{upsert:true},(err,doc)=>{
          if(doc){
            resolve(true)
          }
          else {
            resolve(false)
          }
        });
      }
      catch (err){
        reject(err)
      }
    })
  }
  static async editInfo(userId,infoDoc){
    return new Promise((resolve,reject)=>{
      try {
        User.findByIdAndUpdate(userId,{$set:{sex:infoDoc.sex,description:infoDoc.description,website:infoDoc.website}},{upsert:true},(err,doc)=>{
          if(doc){
            resolve(true)
          }
          else {
            resolve(false)
          }
        })
      }
      catch (err){
        reject(err)
      }
    })
  }
}
module.exports = Edit
