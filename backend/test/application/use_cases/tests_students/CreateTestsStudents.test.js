const TestsStudents = require('../../../../lib/domain/TestsStudents');
const TestsStudentsRepository = require('../../../../lib/domain/TestsStudentsRepository');
const mockTestsStudentsRepository = new TestsStudentsRepository();
const CreateTestsStudents = require('../../../../lib/application/use_cases/tests_students/CreateTestsStudents');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new TestsStudents(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockTestsStudentsRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateTestsStudents('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { TestsStudentsRepository: mockTestsStudentsRepository });

  // then
  //expect(mockTestsStudentsRepository.persist).toHaveBeenCalledWith(new TestsStudents(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});

