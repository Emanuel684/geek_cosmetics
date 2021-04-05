const AnswersRepository = require('../../../../lib/domain/AnswersRepository');
const mockAnswersRepository = new AnswersRepository();
const ListAnswers = require('../../../../lib/application/use_cases/answers/ListAnswers');

test('should resolve with all the answers persisted in repository', async () => {
  // given
  mockAnswersRepository.find = () => ['John', 'Jane'];

  // when
  const answers = await ListAnswers({ AnswersRepository: mockAnswersRepository });

  // then
  expect(answers).toEqual(['John', 'Jane']);
});
