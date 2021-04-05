'use strict';


const _serializeSingleTopic = (topic) => {
  return {
    "id_topic" : topic.id_topic, 
    "name_topic" : topic.name_topic,
    "description_topic": topic.description_topic,
    "date_creation": topic.date_creation,
    "date_update" : topic.date_update
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null topic');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTopic);
    }
    return _serializeSingleTopic(data);
  }

};