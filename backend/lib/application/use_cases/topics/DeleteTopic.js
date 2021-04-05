'use strict';

module.exports = (id_topic, { TopicsRepository }) => {
  return TopicsRepository.remove(id_topic);
};
