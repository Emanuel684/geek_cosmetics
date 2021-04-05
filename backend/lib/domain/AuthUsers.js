'use strict';

module.exports = class {

  constructor(id, full_name, last_name, email, pass, register_time, last_entry, status, admin, parent_id, upgrade_time) {
    this.id = id;
    this.full_name = full_name;
    this.last_name = last_name;
    this.email = email;
    this.pass = pass;
    this.register_time = register_time;
    this.last_entry = last_entry;
    this.status = status;
    this.admin = admin;
    this.parent_id = parent_id;
    this.upgrade_time = upgrade_time;
  }

};