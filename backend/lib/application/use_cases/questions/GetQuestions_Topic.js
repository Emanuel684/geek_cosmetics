'use strict';

module.exports = (id_topic, { QuestionsRepository }) => {
  return QuestionsRepository.get_topic(id_topic);
};
