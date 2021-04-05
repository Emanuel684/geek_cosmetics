'use strict';

module.exports = (id_difficulty, { DifficultiesQuestionsRepository }) => {
  return DifficultiesQuestionsRepository.remove(id_difficulty);
};
