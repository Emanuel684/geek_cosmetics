'use strict';

module.exports = class {

  persist(domainQuestion) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainQuestion) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(questionId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(questionId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get_topic(topicId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find_questions_test(id_topic_question, id_difficulty, number_questions) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
