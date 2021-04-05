const QuestionsRepository = require('../../../../lib/domain/QuestionsRepository');
const mockQuestionsRepository = new QuestionsRepository();
const ListQuestions = require('../../../../lib/application/use_cases/questions/ListQuestions');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockQuestionsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListQuestions({ QuestionsRepository: mockQuestionsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
