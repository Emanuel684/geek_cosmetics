'use strict';

module.exports = class {

  constructor(id_option, id_question, id_img_option, description_option, answer_option, date_creation, date_update) {
    this.id_option = id_option;
    this.id_question = id_question;
    this.id_img_option = id_img_option;
    this.description_option = description_option;
    this.answer_option = answer_option;
    this.date_creation = date_creation;
    this.date_update = date_update
  }

};