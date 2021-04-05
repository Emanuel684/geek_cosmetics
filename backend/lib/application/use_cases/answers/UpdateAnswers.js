'use strict';

const Answers = require('../../../domain/Answers');

module.exports = async (id_answer, id_option, id_test_person, date_registration, { AnswersRepository }) => {
  const answers = new Answers(id_answer, id_option, id_test_person, date_registration);
  return AnswersRepository.merge(answers);
};
