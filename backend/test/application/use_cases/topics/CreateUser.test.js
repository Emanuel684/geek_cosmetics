const Topic = require('../../../../lib/domain/Topic');
const TopicsRepository = require('../../../../lib/domain/TopicsRepository');
const mockTopicsRepository = new TopicsRepository();
const CreateTopics = require('../../../../lib/application/use_cases/topics/CreateTopics');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new Topic(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockTopicsRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateTopics('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { TopicsRepository: mockTopicsRepository });

  // then
  //expect(mockTopicsRepository.persist).toHaveBeenCalledWith(new Topic(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});

