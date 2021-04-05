'use strict';

module.exports = (id_question, { QuestionsRepository }) => {
  return QuestionsRepository.remove(id_question);
};
