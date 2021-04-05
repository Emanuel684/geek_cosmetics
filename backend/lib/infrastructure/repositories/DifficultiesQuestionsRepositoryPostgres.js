'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const DifficultiesQuestions = require('../../domain/DifficultiesQuestions');
const DifficultiesQuestionsRepository = require('../../domain/DifficultiesQuestionsRepository');

module.exports = class extends DifficultiesQuestionsRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_difficulties_questions');
  }

  async persist(difficulties_questionsEntity) {

    const { name_category, points_question, date_creation } = difficulties_questionsEntity;

    const seqDifficultiesQuestions = await this.model.create({ name_category, points_question, date_creation });

    let difficultiesquestions = new DifficultiesQuestions(seqDifficultiesQuestions.id_difficulty, seqDifficultiesQuestions.name_category, seqDifficultiesQuestions.points_question, seqDifficultiesQuestions.date_creation );

    return difficultiesquestions

  }

  async merge(difficultiesquestionsEntity) {
    const seqDifficultiesQuestions = await this.model.findByPk(difficultiesquestionsEntity.id_difficulty);

    if (!seqDifficultiesQuestions) return false;

    const { name_category, points_question, date_creation } = difficultiesquestionsEntity;
    await seqDifficultiesQuestions.update({ name_category, points_question, date_creation },  {where: {id_difficulty: difficultiesquestionsEntity.id_difficulty}});

    return new DifficultiesQuestions(seqDifficultiesQuestions.id_difficulty, seqDifficultiesQuestions.name_category, seqDifficultiesQuestions.points_question, seqDifficultiesQuestions.date_creation);
  }

  async remove(id_difficulty) {
    const seqDifficultiesQuestions = await this.model.findByPk(id_difficulty);
    if (seqDifficultiesQuestions) {
      return seqDifficultiesQuestions.destroy();
    }
    return false;
  }

  async get(id_difficulty) {
    const seqDifficutliesQuestions = await this.model.findByPk(id_difficulty);
    if(seqDifficutliesQuestions)
      return new DifficultiesQuestions(seqDifficutliesQuestions.id_difficulty, seqDifficutliesQuestions.name_category, seqDifficutliesQuestions.points_question, seqDifficutliesQuestions.date_creation);
    else
      return false;
  }

  async find() {
    const seqDifficultiesQuestions = await this.model.findAll();
    return seqDifficultiesQuestions.map((seqDifficultiesQuestions) => {
      let data = new DifficultiesQuestions(seqDifficultiesQuestions.id_difficulty, seqDifficultiesQuestions.name_category, seqDifficultiesQuestions.points_question, seqDifficultiesQuestions.date_creation);
      return data;
    });
  }

};