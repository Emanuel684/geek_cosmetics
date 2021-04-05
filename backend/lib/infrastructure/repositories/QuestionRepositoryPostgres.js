'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Question = require('../../domain/Question');
const QuestionRepository = require('../../domain/QuestionsRepository');
const { Sequelize } = require('../orm/sequelize/sequelize');

module.exports = class extends QuestionRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_bancks_questions');

    this.db.import('../orm/sequelize/models/TtOptions');

    this.TtOptions = this.db.model('tt_options');


    // tt_bancks_questions - tt_options
    this.model.hasMany(this.TtOptions, {
      foreignKey: 'id_question'
    })

  }

  async persist(questionEntity) {

    const { id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update } = questionEntity;

    const seqQuestion = await this.model.create({ id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update });

    let question = new Question(seqQuestion.id_question, seqQuestion.id_difficulty, seqQuestion.id_topic_question, seqQuestion.id_img_question, seqQuestion.description_question, seqQuestion.date_creation, seqQuestion.date_update);

    return question

  }

  async merge(questionEntity) {
    const seqQuestion = await this.model.findByPk(questionEntity.id_question);

    if (!seqQuestion) return false;

    const { id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update } = questionEntity;
    await seqQuestion.update({ id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update },  {where: {id_question: questionEntity.id_question}});

    return new Question(seqQuestion.id_question, seqQuestion.id_difficulty, seqQuestion.id_topic_question, seqQuestion.id_img_question, seqQuestion.description_question, seqQuestion.date_creation, seqQuestion.date_update);
  }

  async remove(id_question) {
    const seqQuestion = await this.model.findByPk(id_question);
    if (seqQuestion) {
      return seqQuestion.destroy();
    }
    return false;
  }

  async get(id_question) {
    const seqQuestion = await this.model.findByPk(id_question);
    if(seqQuestion)
      return new Question(seqQuestion.id_question, seqQuestion.id_difficulty, seqQuestion.id_topic_question, seqQuestion.id_img_question, seqQuestion.description_question, seqQuestion.date_creation, seqQuestion.date_update );
    else
      return false;
  }

  async get_topic(id_topic) {
    const seqQuestions = await this.model.findAll({ where: { id_topic_question: id_topic } });
    return seqQuestions.map((seqQuestions) => {
      let question = new Question(seqQuestions.id_question, seqQuestions.id_difficulty, seqQuestions.id_topic_question, seqQuestions.id_img_question, seqQuestions.description_question, seqQuestions.date_creation, seqQuestions.date_update );
      return question;
    });
  }

  async find_questions_test(id_topic_question, id_difficulty, number_questions) {
    console.log('id_topic_question', id_topic_question);
    console.log('id_difficulty', id_difficulty);
    console.log('number_questions', number_questions);
    const seqQuestions = await this.model.findAll({
          where: {
            id_topic_question: id_topic_question,
            id_difficulty: id_difficulty
          },
          order: [
            Sequelize.literal('random()'),
          ],
          limit: number_questions,
          include: [
            {
              model: this.TtOptions
            }
          ]
        });
    return seqQuestions.map((seqQuestions) => {
      let question = new Question(
        seqQuestions.id_question, 
        seqQuestions.id_difficulty, 
        seqQuestions.id_topic_question, 
        seqQuestions.id_img_question, 
        seqQuestions.description_question, 
        seqQuestions.date_creation, 
        seqQuestions.date_update );
      return question;
    });
  }

  async find() {
    const seqQuestions = await this.model.findAll();
    return seqQuestions.map((seqQuestions) => {
      let question = new Question(seqQuestions.id_question, seqQuestions.id_difficulty, seqQuestions.id_topic_question, seqQuestions.id_img_question, seqQuestions.description_question, seqQuestions.date_creation, seqQuestions.date_update );
      return question;
    });
  }

};