const Question = require('../../../../lib/domain/Question');
const QuestionsRepository = require('../../../../lib/domain/QuestionsRepository');
const mockQuestionsRepository = new QuestionsRepository();
const CreateQuestions = require('../../../../lib/application/use_cases/questions/CreateQuestions');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new Question(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockQuestionsRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateQuestions('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { QuestionsRepository: mockQuestionsRepository });

  // then
  //expect(mockQuestionsRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});

