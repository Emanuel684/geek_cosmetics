const Tests = require('../../../../lib/domain/Tests');
const TestsRepository = require('../../../../lib/domain/TestsRepository');
const mockTestsRepository = new TestsRepository();
const GetTests = require('../../../../lib/application/use_cases/tests/GetTests');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingUser = new Tests(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockTestsRepository.get = jest.fn((userId) => correspondingUser);

  // when
  const user = await GetTests(123, { TestsRepository: mockTestsRepository });

  // then
  expect(mockTestsRepository.get).toHaveBeenCalledWith(123);
  expect(user).toEqual(correspondingUser);
});
