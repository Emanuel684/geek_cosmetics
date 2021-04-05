const TestsStudentsRepository = require('../../../../lib/domain/TestsStudentsRepository');
const mockTestsStudentsRepository = new TestsStudentsRepository();
const DeleteTestsStudents = require('../../../../lib/application/use_cases/tests_students/DeleteTestsStudents');

test('should resolve (without result)', async () => {
  // given
  mockTestsStudentsRepository.remove = jest.fn(() => true);

  // when
  await DeleteTestsStudents(123, { TestsStudentsRepository: mockTestsStudentsRepository });

  // then
  expect(mockTestsStudentsRepository.remove).toHaveBeenCalledWith(123);
});
