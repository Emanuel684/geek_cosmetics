const OptionsRepository = require('../../../../lib/domain/OptionsRepository');
const mockOptionsRepository = new OptionsRepository();
const ListOptions = require('../../../../lib/application/use_cases/options/ListOptions');

test('should resolve with all the users persisted in repository', async () => {
  // given
  mockOptionsRepository.find = () => ['John', 'Jane'];

  // when
  const users = await ListOptions({ OptionsRepository: mockOptionsRepository });

  // then
  expect(users).toEqual(['John', 'Jane']);
});
