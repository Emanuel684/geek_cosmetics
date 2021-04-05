'use strict';

const Question = require('../../../domain/Question');

module.exports = async (id_difficulty, id_topic_question, description_question, id_img_question, date_creation, date_update, { QuestionsRepository }) => {
  const question = new Question(null, id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update);
  return QuestionsRepository.persist(question);
};
