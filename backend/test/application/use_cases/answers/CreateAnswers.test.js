const Answers = require('../../../../lib/domain/Answers');
const AnswersRepository = require('../../../../lib/domain/AnswersRepository');
const mockAnswersRepository = new AnswersRepository();
const CreateAnswers = require('../../../../lib/application/use_cases/answers/CreateAnswers');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedAnswers = new Answers(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockAnswersRepository.persist = jest.fn(() => persistedAnswers);

  // when
  const answers = await CreateAnswers('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { AnswersRepository: mockAnswersRepository });

  // then
  //expect(mockAnswersRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});