const QuestionsRepository = require('../../../../lib/domain/QuestionsRepository');
const mockQuestionsRepository = new QuestionsRepository();
const DeleteQuestion = require('../../../../lib/application/use_cases/questions/DeleteQuestion');

test('should resolve (without result)', async () => {
  // given
  mockQuestionsRepository.remove = jest.fn(() => true);

  // when
  await DeleteQuestion(123, { QuestionsRepository: mockQuestionsRepository });

  // then
  expect(mockQuestionsRepository.remove).toHaveBeenCalledWith(123);
});
