const DifficultiesTestsRepository = require('../../../../lib/domain/DifficultiesTestsRepository');
const mockDifficultiesTestsRepository = new DifficultiesTestsRepository();
const DeleteDifficultiesTests = require('../../../../lib/application/use_cases/difficulties_tests/DeleteDifficultiesTests');

test('should resolve (without result)', async () => {
  // given
  mockDifficultiesTestsRepository.remove = jest.fn(() => true);

  // when
  await DeleteDifficultiesTests(123, { DifficultiesTestsRepository: mockDifficultiesTestsRepository });

  // then
  expect(mockDifficultiesTestsRepository.remove).toHaveBeenCalledWith(123);
});
