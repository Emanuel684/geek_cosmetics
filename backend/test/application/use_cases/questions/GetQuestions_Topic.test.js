const QuestionsRepository = require('../../../../lib/domain/QuestionsRepository');
const mockQuestionsRepository = new QuestionsRepository();
const GetQuestions_Topic = require('../../../../lib/application/use_cases/questions/GetQuestions_Topic');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockQuestionsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await GetQuestions_Topic({ QuestionsRepository: mockQuestionsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
