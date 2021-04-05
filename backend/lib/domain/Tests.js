'use strict';

module.exports = class {

  constructor(id_test, id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update) {
    this.id_test = id_test;
    this.id_topic_test = id_topic_test;
    this.name_test = name_test;
    this.description_test = description_test;
    this.time_duration = time_duration;
    this.date_start = date_start;
    this.date_end = date_end;
    this.password_test = password_test;
    this.date_creation = date_creation;
    this.date_update = date_update
  }

};