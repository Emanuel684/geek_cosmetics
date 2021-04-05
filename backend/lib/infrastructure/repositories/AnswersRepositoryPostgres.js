'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Answers = require('../../domain/Answers');
const AnswersRepository = require('../../domain/AnswersRepository');

module.exports = class extends AnswersRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_answers');
  }

  async persist(answersEntity) {

    const { id_option, id_test_person, date_registration } = answersEntity;

    const seqAnswers = await this.model.create({ id_option, id_test_person, date_registration });

    let answers = new Answers(seqAnswers.id_answer, seqAnswers.id_option, seqAnswers.id_test_person, seqAnswers.date_registration);

    return answers

  }

  async merge(answersEntity) {
    const seqAnswers = await this.model.findByPk(answersEntity.id_answer);

    if (!seqAnswers) return false;

    const { id_option, id_test_person, date_registration } = answersEntity;
    await seqAnswers.update({ id_option, id_test_person, date_registration },  {where: {id_answer: answersEntity.id_answer}});

    return new Answers(seqAnswers.id_answer, seqAnswers.id_option, seqAnswers.id_test_person, seqAnswers.date_registration);
  }

  async remove(id_answer) {
    const seqAnswers = await this.model.findByPk(id_answer);
    if (seqAnswers) {
      return seqAnswers.destroy();
    }
    return false;
  }

  async get(id_answer) {
    const seqAnswers = await this.model.findByPk(id_answer);
    if(seqAnswers)
      return new Answers(seqAnswers.id_answer, seqAnswers.id_option, seqAnswers.id_test_person, seqAnswers.date_registration);
    else
      return false;
  }

  async find() {
    const seqAnswers = await this.model.findAll();
    return seqAnswers.map((seqAnswers) => {
      let data = new Answers(seqAnswers.id_answer, seqAnswers.id_option, seqAnswers.id_test_person, seqAnswers.date_registration);
      return data;
    });
  }

};