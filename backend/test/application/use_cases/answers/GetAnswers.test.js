const Answers = require('../../../../lib/domain/Answers');
const AnswersRepository = require('../../../../lib/domain/AnswersRepository');
const mockAnswersRepository = new AnswersRepository();
const GetAnswers = require('../../../../lib/application/use_cases/answers/GetAnswers');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingAnswers = new Answers(1, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockAnswersRepository.get = jest.fn((id_answer) => correspondingAnswers);

  // when
  const answers = await GetAnswers(123, { AnswersRepository: mockAnswersRepository });

  // then
  expect(mockAnswersRepository.get).toHaveBeenCalledWith(123);
  expect(answers).toEqual(correspondingAnswers);
});
