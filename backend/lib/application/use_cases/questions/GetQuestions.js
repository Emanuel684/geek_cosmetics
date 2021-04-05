'use strict';

module.exports = (id_question, { QuestionsRepository }) => {
  return QuestionsRepository.get(id_question);
};
