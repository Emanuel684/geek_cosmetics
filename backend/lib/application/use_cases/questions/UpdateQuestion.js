'use strict';

const Question = require('../../../domain/Question');

module.exports = async (id_question, id_difficulty, id_topic_question, description_question, id_img_question, date_creation, date_update, { QuestionsRepository }) => {
  const question = new Question(id_question, id_difficulty, id_topic_question, description_question, id_img_question, date_creation, date_update);
  return QuestionsRepository.merge(question);
};
