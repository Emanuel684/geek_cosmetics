const DifficultiesQuestions = require('../../../../lib/domain/DifficultiesQuestions');
const DifficultiesQuestionsRepository = require('../../../../lib/domain/DifficultiesQuestionsRepository');
const mockDifficultiesQuestionsRepository = new DifficultiesQuestionsRepository();
const GetDifficultiesQuestions = require('../../../../lib/application/use_cases/difficulties_questions/GetDifficultiesQuestions');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new DifficultiesQuestions(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockDifficultiesQuestionsRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const user = await GetDifficultiesQuestions(123, { DifficultiesQuestionsRepository: mockDifficultiesQuestionsRepository });

  // then
  expect(mockDifficultiesQuestionsRepository.get).toHaveBeenCalledWith(123);
  expect(user).toEqual(correspondingUser);
});
