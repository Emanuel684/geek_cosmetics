const TopicsRepository = require('../../../../lib/domain/TopicsRepository');
const mockTopicsRepository = new TopicsRepository();
const DeleteTopic = require('../../../../lib/application/use_cases/topics/DeleteTopic');

test('should resolve (without result)', async () => {
  // given
  mockTopicsRepository.remove = jest.fn(() => true);

  // when
  await DeleteTopic(123, { TopicsRepository: mockTopicsRepository });

  // then
  expect(mockTopicsRepository.remove).toHaveBeenCalledWith(123);
});
