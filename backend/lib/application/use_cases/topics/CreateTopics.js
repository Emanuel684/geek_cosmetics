'use strict';

const Topic = require('../../../domain/Topic');

module.exports = async (name_topic,description_topic,date_creation,date_update, { TopicsRepository }) => {

  const topic = new Topic(null,name_topic,description_topic,date_creation,date_update);
  return TopicsRepository.persist(topic);
};
