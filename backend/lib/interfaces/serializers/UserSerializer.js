'use strict';

const _serializeSingleUser = (user) => {
  return {
    "id" : user.id, 
    "full_name" : user.full_name, 
    "last_name" : user.last_name, 
    "email" : user.email, 
    "pass" : user.pass, 
    "register_time" : user.register_time, 
    "upgrade_time" : user.upgrade_time, 
    "last_entry" : user.last_entry, 
    "status" : user.status, 
    "admin" : user.admin, 
    "parent_id" : user.parent_id
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }

};