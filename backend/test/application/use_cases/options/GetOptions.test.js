const Option = require('../../../../lib/domain/Option');
const OptionsRepository = require('../../../../lib/domain/OptionsRepository');
const mockOptionsRepository = new OptionsRepository();
const GetOptions = require('../../../../lib/application/use_cases/options/GetOptions');

test('should resolve with the corresponding persisted user entity', async () => {
  // given
  const correspondingOptions = new Option(123, 'John', 'Doe', 'john.doe@email.com', 'P@s$W0rD');
  mockOptionsRepository.get = jest.fn((userId) => correspondingOptions);

  // when
  const options = await GetOptions(123, { OptionsRepository: mockOptionsRepository });

  // then
  expect(mockOptionsRepository.get).toHaveBeenCalledWith(123);
  expect(options).toEqual(correspondingOptions);
});
