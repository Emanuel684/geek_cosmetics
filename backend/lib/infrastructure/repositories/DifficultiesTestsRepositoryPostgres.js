'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const DifficultiesTests = require('../../domain/DifficultiesTests');
const DifficultiesTestsRepository = require('../../domain/DifficultiesTestsRepository');

module.exports = class extends DifficultiesTestsRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_difficulties_tests');

    this.db.import('../orm/sequelize/models/TtOptions');
    this.db.import('../orm/sequelize/models/TtTopics');
    this.db.import('../orm/sequelize/models/TtBancksQuestions');
    this.db.import('../orm/sequelize/models/TtDifficultiesQuestions');
    this.db.import('../orm/sequelize/models/TtTests')

    this.TtOptions = this.db.model('tt_options');
    this.TtTopics = this.db.model('tt_topics');
    this.TtBancksQuestions = this.db.model('tt_bancks_questions');
    this.TtDifficultiesQuestions = this.db.model('tt_difficulties_questions');
    this.TtTests = this.db.model('tt_tests');
    this.model = this.db.model('tt_difficulties_tests');


    // tt_difficulties_tests - tt_difficulties_questions
    this.model.hasOne(this.TtDifficultiesQuestions, {
      foreignKey: 'id_difficulty'
    })

    // tt_difficulties_tests - tt_tests
    this.model.belongsTo(this.TtTests, {
      foreignKey: 'id_test'
    })

    // tt_difficulties_questions - tt_bancks_questions
    this.TtDifficultiesQuestions.belongsTo(this.TtBancksQuestions, {
      foreignKey: 'id_difficulty'
    })
  }

  async persist(difficulties_testsEntity) {

    const { id_difficulty, id_test, number_questions, date_creation, date_update } = difficulties_testsEntity;

    const seqDifficultiesTests = await this.model.create({ id_difficulty, id_test, number_questions, date_creation, date_update });

    let difficultiestests = new DifficultiesTests(seqDifficultiesTests.id_difficulty_test, seqDifficultiesTests.id_difficulty, seqDifficultiesTests.id_test, seqDifficultiesTests.number_questions, seqDifficultiesTests.date_creation, seqDifficultiesTests.date_update );

    return difficultiestests

  }

  async merge(difficultiestestsEntity) {
    const seqDifficultiesTests = await this.model.findByPk(difficultiestestsEntity.id_difficulty_test);

    if (!seqDifficultiesTests) return false;

    const { id_difficulty, id_test, number_questions, date_creation, date_update } = difficultiestestsEntity;
    await seqDifficultiesTests.update({ id_difficulty, id_test, number_questions, date_creation, date_update },  {where: {id_difficulty_test: difficultiestestsEntity.id_difficulty_test}});

    return new DifficultiesTests(seqDifficultiesTests.id_difficulty_test, seqDifficultiesTests.id_difficulty, seqDifficultiesTests.id_test, seqDifficultiesTests.number_questions, seqDifficultiesTests.date_creation, seqDifficultiesTests.date_update);
  }

  async remove(id_difficulty_test) {
    const seqDifficultiesTests = await this.model.findByPk(id_difficulty_test);
    if (seqDifficultiesTests) {
      return seqDifficultiesTests.destroy();
    }
    return false;
  }

  async get_difficulties_test(id_test) {
    const seqDifficultiesTests = await this.model.findAll({
      where: {
        id_test: id_test
      },
      include: [
        {
          model: this.TtDifficultiesQuestions
        },
        {
          model: this.TtTests
        }
      ]
    });
    return seqDifficultiesTests.map((seqDifficultiesTests) => {
      let data = new DifficultiesTests(seqDifficultiesTests.id_difficulty_test, seqDifficultiesTests.id_difficulty, seqDifficultiesTests.id_test, seqDifficultiesTests.number_questions, seqDifficultiesTests.date_creation, seqDifficultiesTests.date_update);
      return data;
    });

  }

  async get(id_difficulty_test) {
    const seqDifficultiesTests = await this.model.findByPk(id_difficulty_test);
    if(seqDifficultiesTests)
      return new DifficultiesTests(seqDifficultiesTests.id_difficulty_test, seqDifficultiesTests.id_difficulty, seqDifficultiesTests.id_test, seqDifficultiesTests.number_questions, seqDifficultiesTests.date_creation, seqDifficultiesTests.date_update);
    else
      return false;
  }

  async find() {
    const seqDifficultiesTests = await this.model.findAll();
    return seqDifficultiesTests.map((seqDifficultiesTests) => {
      let data = new DifficultiesTests(seqDifficultiesTests.id_difficulty_test, seqDifficultiesTests.id_difficulty, seqDifficultiesTests.id_test, seqDifficultiesTests.number_questions, seqDifficultiesTests.date_creation, seqDifficultiesTests.date_update);
      return data;
    });
  }

};