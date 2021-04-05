'use strict';

module.exports = (id_difficulty, { DifficultiesQuestionsRepository }) => {
  return DifficultiesQuestionsRepository.get(id_difficulty);
};
