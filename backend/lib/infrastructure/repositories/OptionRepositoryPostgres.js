'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Option = require('../../domain/Option');
const OptionRepository = require('../../domain/OptionsRepository');

module.exports = class extends OptionRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('tt_options');
  }

  async persist(optionEntity) {

    const { id_question, id_img_option, description_option, answer_option, date_creation, date_update } = optionEntity;

    const seqOption = await this.model.create({ id_question, id_img_option, description_option, answer_option, date_creation, date_update });

    let option = new Option(seqOption.id_option, seqOption.id_question, seqOption.id_img_option, seqOption.description_option, seqOption.answer_option, seqOption.date_creation, seqOption.date_update);

    return option

  }

  async merge(optionEntity) {
    const seqOption = await this.model.findByPk(optionEntity.id_option);

    if (!seqOption) return false;

    const { id_question, id_img_option, description_option, answer_option, date_creation, date_update } = optionEntity;
    await seqOption.update({ id_question, id_img_option, description_option, answer_option, date_creation, date_update },  {where: {id_option: optionEntity.id_option}});

    return new Option(seqOption.id_option, seqOption.id_question, seqOption.id_img_option, seqOption.description_option, seqOption.answer_option, seqOption.date_creation, seqOption.date_update);
  }

  async remove(id_option) {
    const seqOption = await this.model.findByPk(id_option);
    if (seqOption) {
      return seqOption.destroy();
    }
    return false;
  }

  async get(id_option) {
    const seqOption = await this.model.findByPk(id_option);
    if(seqOption)
      return new Option(seqOption.id_option, seqOption.id_question, seqOption.id_img_option, seqOption.description_option, seqOption.answer_option, seqOption.date_creation, seqOption.date_update );
    else
      return false;
  }

  async get_options(id_question) {
    const seqOption = await this.model.findAll({ where: { id_question: id_question } });
    if(seqOption)
      return new Option(seqOption.id_option, seqOption.id_question, seqOption.id_img_option, seqOption.description_option, seqOption.answer_option, seqOption.date_creation, seqOption.date_update );
    else
      return false;
  }

  async find() {
    const seqOptions = await this.model.findAll();
    return seqOptions.map((seqOptions) => {
      let data = new Option(seqOptions.id_option, seqOptions.id_question, seqOptions.id_img_option, seqOptions.description_option, seqOptions.answer_option, seqOptions.date_creation, seqOptions.date_update );
      return data;
    });
  }

};