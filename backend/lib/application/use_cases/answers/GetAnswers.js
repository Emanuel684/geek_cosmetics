'use strict';

module.exports = (id_answer, { AnswersRepository }) => {
  return AnswersRepository.get(id_answer);
};
