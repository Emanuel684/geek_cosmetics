const TestsStudents = require('../../../../lib/domain/TestsStudents');
const TestsStudentsRepository = require('../../../../lib/domain/TestsStudentsRepository');
const mockTestsStudentsRepository = new TestsStudentsRepository();
const GetTestsStudents = require('../../../../lib/application/use_cases/tests_students/GetTestsStudents');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new TestsStudents(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockTestsStudentsRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const user = await GetTestsStudents(123, { TestsStudentsRepository: mockTestsStudentsRepository });

  // then
  expect(mockTestsStudentsRepository.get).toHaveBeenCalledWith(123);
  expect(user).toEqual(correspondingUser);
});
