'use strict';

const Answers = require('../../../domain/Answers');

module.exports = async (id_option, id_test_person, date_registration, { answersRepository }) => {
  
  const answers_data = new Answers(null, id_option, id_test_person, date_registration);
  return answersRepository.persist(answers_data);
};
