'use strict';

const Topic = require('../../../domain/Topic');

module.exports = async (id_topic, name_topic, description_topic, date_creation, date_update, { TopicsRepository }) => {
  const topic = new Topic(id_topic, name_topic, description_topic, date_creation, date_update);
  return TopicsRepository.merge(topic);
};
