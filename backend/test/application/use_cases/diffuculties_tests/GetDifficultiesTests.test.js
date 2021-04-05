const DifficultiesTests = require('../../../../lib/domain/DifficultiesTests');
const DifficultiesTestsRepository = require('../../../../lib/domain/DifficultiesTestsRepository');
const mockDifficultiesTestsRepository = new DifficultiesTestsRepository();
const GetDifficultiesTests = require('../../../../lib/application/use_cases/difficulties_tests/GetDifficultiesTests');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingDifficultiesTests = new DifficultiesTests(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockDifficultiesTestsRepository.get = jest.fn((userId) => DifficultiesTests);

  // when
  const difficultiestests = await GetDifficultiesTests(123, { DifficultiesTestsRepository: mockDifficultiesTestsRepository });

  // then
  expect(mockDifficultiesTestsRepository.get).toHaveBeenCalledWith(123);
  expect(difficultiestests).toEqual(DifficultiesTests);
});
