'use strict';

const Tests = require('../../../domain/Tests');

module.exports = async (id_test, id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update, { TestsRepository }) => {
  const tests_data = new Tests(id_test, id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update);
  return TestsRepository.merge(tests_data);
};
