const DifficultiesQuestionsRepository = require('../../../../lib/domain/DifficultiesQuestionsRepository');
const mockDifficultiesQuestionsRepository = new DifficultiesQuestionsRepository();
const DeleteUser = require('../../../../lib/application/use_cases/difficulties_questions/DeleteDifficultiesQuestions');

test('should resolve (without result)', async () => {
  // given
  mockDifficultiesQuestionsRepository.remove = jest.fn(() => true);

  // when
  await DeleteUser(123, { DifficultiesQuestionsRepository: mockDifficultiesQuestionsRepository });

  // then
  expect(mockDifficultiesQuestionsRepository.remove).toHaveBeenCalledWith(123);
});
