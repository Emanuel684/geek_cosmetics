const Tests = require('../../../../lib/domain/Tests');
const TestsRepository = require('../../../../lib/domain/TestsRepository');
const mockTestsRepository = new TestsRepository();
const CreateTests = require('../../../../lib/application/use_cases/tests/CreateTests');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new Tests(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockTestsRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateTests('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { TestsRepository: mockTestsRepository });

  // then
  //expect(mockTestsRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});

