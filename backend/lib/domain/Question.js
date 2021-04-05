'use strict';

module.exports = class {

  constructor(id_question, id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update) {
    this.id_question = id_question;
    this.id_difficulty = id_difficulty;
    this.id_topic_question = id_topic_question;
    this.id_img_question = id_img_question;
    this.description_question = description_question;
    this.date_creation = date_creation;
    this.date_update = date_update
  }

};