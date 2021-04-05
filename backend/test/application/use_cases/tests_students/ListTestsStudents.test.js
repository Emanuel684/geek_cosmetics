const TestsStudentsRepository = require('../../../../lib/domain/TestsStudentsRepository');
const mockTestsStudentsRepository = new TestsStudentsRepository();
const ListTestsStudents = require('../../../../lib/application/use_cases/tests_students/ListTestsStudents');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockTestsStudentsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListTestsStudents({ TestsStudentsRepository: mockTestsStudentsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
