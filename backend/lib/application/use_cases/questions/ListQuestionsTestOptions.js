'use strict';

module.exports = (id_topic_question, id_difficulty, number_questions, { QuestionsRepository }) => {
  return QuestionsRepository.find_questions_test(id_topic_question, id_difficulty, number_questions);
};
