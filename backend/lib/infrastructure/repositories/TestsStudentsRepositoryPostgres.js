'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const TestsStudents = require('../../domain/TestsStudents');
const TestsStudentsRepository = require('../../domain/TestsStudentsRepository');
const { Op } = require("sequelize");

module.exports = class extends TestsStudentsRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_tests_students');

    this.db.import('../orm/sequelize/models/TtTests');

    this.TtTests = this.db.model('tt_tests');


    // tt_bancks_questions - tt_tests
    this.model.belongsTo(this.TtTests, {
      foreignKey: 'id_test'
    })
  }

  async persist(tests_studentsEntity) {

    const { id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test } = tests_studentsEntity;

    const seqTestsStudents = await this.model.create({ id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test });

    let testsstudents = new TestsStudents(seqTestsStudents.id_test_students, seqTestsStudents.id_test, seqTestsStudents.id_prospect_preferent, seqTestsStudents.id_aut_user, seqTestsStudents.date_start, seqTestsStudents.date_end, seqTestsStudents.date_send, seqTestsStudents.final_score, seqTestsStudents.state_test );

    return testsstudents

  }

  async merge(tests_studentsEntity) {
    const seqTestsStudents = await this.model.findByPk(tests_studentsEntity.id_test_students);

    if (!seqTestsStudents) return false;

    const { id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test } = tests_studentsEntity;
    await seqTestsStudents.update({ id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test },  {where: {id_test_students: tests_studentsEntity.id_test_students}});

    return new TestsStudents(seqTestsStudents.id_test_students, seqTestsStudents.id_test, seqTestsStudents.id_prospect_preferent, seqTestsStudents.id_aut_user, seqTestsStudents.date_start, seqTestsStudents.date_end, seqTestsStudents.date_send, seqTestsStudents.final_score, seqTestsStudents.state_test);
  }

  async remove(id_test_students) {
    const seqTestsStudents = await this.model.findByPk(id_test_students);
    if (seqTestsStudents) {
      return seqTestsStudents.destroy();
    }
    return false;
  }

  // Get for all tests a user needs to make
  async find_student_tests(id_prospect_preferent, id_aut_user ) {
    console.log('id_prospect_preferent', id_prospect_preferent);
    console.log('id_aut_user', id_aut_user);
    const seqTestsStudents = await this.model.findAll({
      where: {
        [Op.and]: [
          {final_score: null},
          {state_test: "Asignada"}
        ],
        [Op.or]: [
          {id_prospect_preferent: null},
          {id_aut_user: null}
        ]
      },
      include: [
        {
          model: this.TtTests
        }
      ]
    });
    return seqTestsStudents.map((seqTestsStudents) => {
      let data = new TestsStudents(seqTestsStudents.id_test_students, seqTestsStudents.id_test, seqTestsStudents.id_prospect_preferent, seqTestsStudents.id_aut_user, seqTestsStudents.date_start, seqTestsStudents.date_end, seqTestsStudents.date_send, seqTestsStudents.final_score, seqTestsStudents.state_test);
      return data;
    });
  }
  // Get for all tests a user needs to make

  async get(id_test_students) {
    const seqTestsStudents = await this.model.findByPk(id_test_students);
    if(seqTestsStudents)
      return new TestsStudents(seqTestsStudents.id_test_students, seqTestsStudents.id_test, seqTestsStudents.id_prospect_preferent, seqTestsStudents.id_aut_user, seqTestsStudents.date_start, seqTestsStudents.date_end, seqTestsStudents.date_send, seqTestsStudents.final_score, seqTestsStudents.state_test);
    else
      return false;
  }

  async find() {
    const seqTestsStudents = await this.model.findAll();
    return seqTestsStudents.map((seqTestsStudents) => {
      let data = new TestsStudents(seqTestsStudents.id_test_students, seqTestsStudents.id_test, seqTestsStudents.id_prospect_preferent, seqTestsStudents.id_aut_user, seqTestsStudents.date_start, seqTestsStudents.date_end, seqTestsStudents.date_send, seqTestsStudents.final_score, seqTestsStudents.state_test);
      return data;
    });
  }

};