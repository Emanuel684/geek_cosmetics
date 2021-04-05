const Option = require('../../../../lib/domain/Option');
const OptionsRepository = require('../../../../lib/domain/OptionsRepository');
const mockOptionsRepository = new OptionsRepository();
const CreateOptions = require('../../../../lib/application/use_cases/options/CreateOptions');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new Option(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockOptionsRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateOptions('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { OptionsRepository: mockOptionsRepository });

  // then
  //expect(mockOptionsRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});

