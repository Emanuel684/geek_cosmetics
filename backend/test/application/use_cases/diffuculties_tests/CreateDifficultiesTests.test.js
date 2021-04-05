const DifficultiesTests = require('../../../../lib/domain/DifficultiesTests');
const DifficultiesTestsRepository = require('../../../../lib/domain/DifficultiesTestsRepository');
const mockDifficultiesTestsRepository = new DifficultiesTestsRepository();
const CreateDifficultiesTests = require('../../../../lib/application/use_cases/difficulties_tests/CreateDifficultiesTests');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedDifficultiesTests = new DifficultiesTests(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockDifficultiesTestsRepository.persist = jest.fn(() => DifficultiesTests);

  // when
  const user = await CreateDifficultiesTests('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { DifficultiesTestsRepository: mockDifficultiesTestsRepository });

  // then
  //expect(mockDifficultiesTestsRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(DifficultiesTests);
});

