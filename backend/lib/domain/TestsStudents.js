'use strict';

module.exports = class {

  constructor(id_test_students, id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test) {
    this.id_test_students = id_test_students;
    this.id_test = id_test;
    this.id_prospect_preferent = id_prospect_preferent;
    this.id_aut_user = id_aut_user;
    this.date_start = date_start;
    this.date_end = date_end;
    this.date_send = date_send;
    this.final_score = final_score;
    this.state_test = state_test
  }

};