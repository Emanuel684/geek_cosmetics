'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Topic = require('../../domain/Topic');
const TopicRepository = require('../../domain/TopicsRepository');

module.exports = class extends TopicRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_topics');
  }

  async persist(topicEntity) {

    const { name_topic,description_topic,date_creation,date_update } = topicEntity;

    const seqTopic = await this.model.create({ name_topic,description_topic,date_creation,date_update });

    let topic = new Topic(seqTopic.id_topic, seqTopic.name_topic, seqTopic.description_topic, seqTopic.date_creation, seqTopic.date_update);

    return topic

  }

  async merge(topicEntity) {
    const seqTopic = await this.model.findByPk(topicEntity.id_topic);

    if (!seqTopic) return false;

    const { name_topic,description_topic,date_creation,date_update } = topicEntity;
    await seqTopic.update({ name_topic,description_topic,date_creation,date_update },  {where: {id_topic: topicEntity.id_topic}});

    return new Topic(seqTopic.id_topic, seqTopic.name_topic, seqTopic.description_topic, seqTopic.date_creation, seqTopic.date_update);
  }

  async remove(id_topic) {
    const seqTopic = await this.model.findByPk(id_topic);
    if (seqTopic) {
      return seqTopic.destroy();
    }
    return false;
  }

  async get(id_topic) {
    const seqTopic = await this.model.findByPk(id_topic);
    if(seqTopic)
      return new Topic(seqTopic.id_topic, seqTopic.name_topic, seqTopic.description_topic, seqTopic.date_creation, seqTopic.date_update);
    else
      return false;
  }

  async find() {
    const seqTopics = await this.model.findAll();
    return seqTopics.map((seqTopics) => {
      let data = new Topic(seqTopics.id_topic, seqTopics.name_topic, seqTopics.description_topic, seqTopics.date_creation, seqTopics.date_update);
      return data;
    });
  }

};