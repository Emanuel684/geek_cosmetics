const AnswersReposotory = require('../../../../lib/domain/AnswersRepository');
const mockAnswersReposotory = new AnswersReposotory();
const DeleteAnswers = require('../../../../lib/application/use_cases/answers/DeleteAnswers');

test('should resolve (without result)', async () => {
  // given
  mockAnswersReposotory.remove = jest.fn(() => true);

  // when
  await DeleteAnswers(1, { AnswersReposotory: mockAnswersReposotory });

  // then
  expect(mockAnswersReposotory.remove).toHaveBeenCalledWith(123);
});
