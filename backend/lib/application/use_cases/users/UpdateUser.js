'use strict';

const User = require('../../../domain/AuthUsers');
// const { generateTimestampUnix, encryptPassword } = require('../utilities/general_functions');

module.exports = async (userId, full_name, last_name, email, pass, status, admin, parent_id, { userRepository }) => {
  //const upgrade_time = await generateTimestampUnix()
  // pass = await encryptPassword(pass)
  const user = new User(userId, full_name, last_name, email, pass, null, null, status, admin, parent_id);
  return userRepository.merge(user);
};
