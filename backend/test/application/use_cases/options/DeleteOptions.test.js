const OptionsRepository = require('../../../../lib/domain/OptionsRepository');
const mockOptionsRepository = new OptionsRepository();
const DeleteOptions = require('../../../../lib/application/use_cases/options/DeleteOptions');

test('should resolve (without result)', async () => {
  // given
  mockOptionsRepository.remove = jest.fn(() => true);

  // when
  await DeleteOptions(123, { OptionsRepository: mockOptionsRepository });

  // then
  expect(mockOptionsRepository.remove).toHaveBeenCalledWith(123);
});
