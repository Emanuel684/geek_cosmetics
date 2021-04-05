const Question = require('../../../../lib/domain/Question');
const QuestionsRepository = require('../../../../lib/domain/QuestionsRepository');
const mockQuestionsRepository = new QuestionsRepository();
const GetQuestions = require('../../../../lib/application/use_cases/questions/GetQuestions');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new Question(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockQuestionsRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const user = await GetQuestions(123, { QuestionsRepository: mockQuestionsRepository });

  // then
  expect(mockQuestionsRepository.get).toHaveBeenCalledWith(123);
  expect(user).toEqual(correspondingUser);
});
