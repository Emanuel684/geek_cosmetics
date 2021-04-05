const TestsRepository = require('../../../../lib/domain/TestsRepository');
const mockTestsRepository = new TestsRepository();
const DeleteTests = require('../../../../lib/application/use_cases/tests/DeleteTests');

test('should resolve (without result)', async () => {
  // given
  mockTestsRepository.remove = jest.fn(() => true);

  // when
  await DeleteTests(123, { TestsRepository: mockTestsRepository });

  // then
  expect(mockTestsRepository.remove).toHaveBeenCalledWith(123);
});
