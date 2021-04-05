'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Tests = require('../../domain/Tests');
const TestsRepository = require('../../domain/TestsRepository');
const { Sequelize } = require('../orm/sequelize/sequelize');

module.exports = class extends TestsRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.db.import('../orm/sequelize/models/TtOptions');
    this.db.import('../orm/sequelize/models/TtTopics');
    this.db.import('../orm/sequelize/models/TtBancksQuestions');
    this.db.import('../orm/sequelize/models/TtDifficultiesTests');
    

    this.TtOptions = this.db.model('tt_options');
    this.TtTopics = this.db.model('tt_topics');
    this.TtBancksQuestions = this.db.model('tt_bancks_questions');
    this.TtDifficultiesTests = this.db.model('tt_difficulties_tests');
    this.model = this.db.model('tt_tests');

    this.model.hasOne(this.TtTopics, {
      foreignKey: 'id_topic_test',
      as: 'topico'
    })
    this.model.hasMany(this.TtDifficultiesTests, {
      foreignKey: 'id_test',
      as: 'difficulties-test'
    })
    

  }

  async persist(testsEntity) {

    const { id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update } = testsEntity;

    const seqTests = await this.model.create({ id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update });

    let tests = new Tests(seqTests.id_test, seqTests.id_topic_test, seqTests.name_test, seqTests.description_test, seqTests.time_duration, seqTests.date_start, seqTests.date_end, seqTests.password_test, seqTests.date_creation, seqTests.date_update);

    return tests

  }

  async merge(testsEntity) {
    const seqTests = await this.model.findByPk(testsEntity.id_test);

    if (!seqTests) return false;

    const { id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update } = testsEntity;
    await seqTests.update({ id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update },  {where: {id_test: testsEntity.id_test}});

    return new Tests(seqTests.id_test, seqTests.id_topic_test, seqTests.name_test, seqTests.description_test, seqTests.time_duration, seqTests.date_start, seqTests.date_end, seqTests.password_test, seqTests.date_creation, seqTests.date_update);
  }

  async remove(id_test) {
    const seqTests = await this.model.findByPk(id_test);
    if (seqTests) {
      return seqTests.destroy();
    }
    return false;
  }

  async get(id_test) {
    const seqTests = await this.model.findByPk(id_test);
    if(seqTests)
      return new Tests(seqTests.id_test, seqTests.id_topic_test, seqTests.name_test, seqTests.description_test, seqTests.time_duration, seqTests.date_start, seqTests.date_end, seqTests.password_test, seqTests.date_creation, seqTests.date_update);
    else
      return false;
  }

  async randomQuestionsTest(id_test) {

  }

  async get_question(id_test) {
    
    
    const questions = this.db.model('tt_bancks_questions');
    const options = this.db.model('tt_options');
    const topic = this.db.model('tt_topics');
    const difficulties_tests = this.db.model('tt_difficulties_tests');

    
    

    const seqTests = await this.model.findAll({
      where: {
        id_test: id_test
      },
      include: [
        {
          model: topic,
        },
        {
        model: difficulties_tests,
        where: {
          id_test: id_test
        }
      }]
    });
    console.log('seqTests', seqTests);

    if(seqTests)
      return new Tests(seqTests.id_test, seqTests.id_topic_test, seqTests.name_test, seqTests.description_test, seqTests.time_duration, seqTests.date_start, seqTests.date_end, seqTests.password_test, seqTests.date_creation, seqTests.date_update);
    else
      return false;
  }

  // async find() {
  //   const seqTests = await this.model.findAll({
  //     where: {
  //       id_topic_test: 1
  //     },
  //     order: [
  //       Sequelize.literal('random()'),
  //     ],
  //     limit: 2,
  //   });
  //   console.log('seqTests', seqTests)
  //   return seqTests.map((seqTests) => {
  //     let data = new Tests(seqTests.id_test, seqTests.id_topic_test, seqTests.name_test, seqTests.description_test, seqTests.time_duration, seqTests.date_start, seqTests.date_end, seqTests.password_test, seqTests.date_creation, seqTests.date_update);
  //     return data;
  //   });
  // }


  async find() {
    const seqTests = await this.model.findAll();
    return seqTests.map((seqTests) => {
      let data = new Tests(seqTests.id_test, seqTests.id_topic_test, seqTests.name_test, seqTests.description_test, seqTests.time_duration, seqTests.date_start, seqTests.date_end, seqTests.password_test, seqTests.date_creation, seqTests.date_update);
      return data;
    });
  }
};