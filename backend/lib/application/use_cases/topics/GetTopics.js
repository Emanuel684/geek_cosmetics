'use strict';

module.exports = (id_topic, { TopicsRepository }) => {
  return TopicsRepository.get(id_topic);
};
