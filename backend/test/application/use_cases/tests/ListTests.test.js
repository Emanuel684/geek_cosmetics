const TestsRepository = require('../../../../lib/domain/TestsRepository');
const mockTestsRepository = new TestsRepository();
const ListTests = require('../../../../lib/application/use_cases/tests/ListTests');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockTestsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListTests({ TestsRepository: mockTestsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
