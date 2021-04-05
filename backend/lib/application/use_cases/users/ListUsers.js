'use strict';

module.exports = ({ userRepository }) => {
  return userRepository.findUsers();
};
