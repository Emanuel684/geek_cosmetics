const Topic = require('../../../../lib/domain/Topic');
const TopicsRepository = require('../../../../lib/domain/TopicsRepository');
const mockTopicsRepository = new TopicsRepository();
const GetTopics = require('../../../../lib/application/use_cases/topics/GetTopics');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new Topic(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockTopicsRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const topic = await GetTopics(123, { TopicsRepository: mockTopicsRepository });

  // then
  expect(mockTopicsRepository.get).toHaveBeenCalledWith(123);
  expect(topic).toEqual(correspondingUser);
});
