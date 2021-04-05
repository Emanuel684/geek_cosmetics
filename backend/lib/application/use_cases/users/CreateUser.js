'use strict';

const User = require('../../../domain/AuthUsers');
const { generateTimestampUnix, encryptPassword } = require('../../utilities/general_functions');

module.exports = async (full_name, last_name, email, pass, register_time, status, admin, parent_id, { userRepository }) => {
  register_time = await generateTimestampUnix()
  pass = await encryptPassword(pass)
  const user = new User(null, full_name, last_name, email, pass, register_time, null, status, admin, parent_id);
  return userRepository.persist(user);
};
