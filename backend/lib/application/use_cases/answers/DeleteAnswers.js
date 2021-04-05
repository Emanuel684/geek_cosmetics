'use strict';

module.exports = (id_answer, { AnswersRepository }) => {
  return AnswersRepository.remove(id_answer);
};
