const DifficultiesQuestions = require('../../../../lib/domain/DifficultiesQuestions');
const DifficultiesQuestionsRepository = require('../../../../lib/domain/DifficultiesQuestionsRepository');
const mockDifficultiesQuestionsRepository = new DifficultiesQuestionsRepository();
const CreateDifficultiesQuestions = require('../../../../lib/application/use_cases/difficulties_questions/CreateDifficultiesQuestions');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedDifficultiesQuestions = new DifficultiesQuestions(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockDifficultiesQuestionsRepository.persist = jest.fn(() => persistedDifficultiesQuestions);

  // when
  const difficultiesquestions = await CreateDifficultiesQuestions('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { DifficultiesQuestionsRepository: mockDifficultiesQuestionsRepository });

  // then
  //expect(mockDifficultiesQuestionsRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(difficultiesquestions).toEqual(persistedDifficultiesQuestions);
});

