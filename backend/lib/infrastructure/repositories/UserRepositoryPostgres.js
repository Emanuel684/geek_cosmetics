'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const bcrypt = require('bcrypt')
const User = require('../../domain/AuthUsers');
const UserRepository = require('../../domain/UserRepository');

module.exports = class extends UserRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('auth_users');
  }

  async persist(userEntity) {

    const { full_name, last_name, email, pass, register_time, status, admin, parent_id } = userEntity;

    const seqUser = await this.model.create({ full_name, last_name, email, pass, register_time, status, admin, parent_id });

    let user = new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);

    return user

  }

  async merge(userEntity) {
    const seqUser = await this.model.findByPk(userEntity.id);

    if (!seqUser) return false;

    const { full_name, last_name, email, pass, upgrade_time, last_entry, status, admin, parent_id } = userEntity;
    await seqUser.update({ full_name, last_name, email, pass, last_entry, status, admin, parent_id, upgrade_time },  {where: {id: userEntity.id}});

    return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
  }

  async remove(userId) {
    const seqUser = await this.model.findByPk(userId);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async get(userId) {
    const seqUser = await this.model.findByPk(userId);
    if(seqUser)
      return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
    else
      return false;
  }

  async getByEmail(userEmail) {
    const seqUser = await this.model.findOne({ where: { email: userEmail } });
    return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
  }

  async findUsers() {
    const seqUsers = await this.model.findAll();
    console.log("seqUsers",seqUsers)
    return seqUsers.map((seqUser) => {
      return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id);
    });
  }

};
