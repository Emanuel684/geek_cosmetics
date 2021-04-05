const DifficultiesQuestionsRepository = require('../../../../lib/domain/DifficultiesQuestionsRepository');
const mockDifficultiesQuestionsRepository = new DifficultiesQuestionsRepository();
const ListDifficultiesQuestions = require('../../../../lib/application/use_cases/difficulties_questions/ListDifficultiesQuestions');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockDifficultiesQuestionsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListDifficultiesQuestions({ DifficultiesQuestionsRepository: mockDifficultiesQuestionsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
