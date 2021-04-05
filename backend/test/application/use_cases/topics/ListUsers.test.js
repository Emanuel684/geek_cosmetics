const TopicsRepository = require('../../../../lib/domain/TopicsRepository');
const mockTopicsRepository = new TopicsRepository();
const ListTopics = require('../../../../lib/application/use_cases/topics/ListTopics');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockTopicsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListTopics({ TopicsRepository: mockTopicsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
