const DifficultiesTestsRepository = require('../../../../lib/domain/DifficultiesTestsRepository');
const mockDifficultiesTestsRepository = new DifficultiesTestsRepository();
const ListDifficultiesTests = require('../../../../lib/application/use_cases/difficulties_tests/ListDifficultiesTests');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockDifficultiesTestsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListDifficultiesTests({ DifficultiesTestsRepository: mockDifficultiesTestsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
