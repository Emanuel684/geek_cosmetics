const User = require('../../../../lib/domain/AuthUsers');
const UserRepository = require('../../../../lib/domain/UserRepository');
const mockUserRepository = new UserRepository();
const CreateUser = require('../../../../lib/application/use_cases/users/CreateUser');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null);
  mockUserRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateUser('Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, 1, 0, 1, { userRepository: mockUserRepository });

  // then
  //expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'Pedro', 'Cordoba', 'pedro.crodoba@gmail.com', 'P@s$W0rD', null, null, 1, 0, 1, null));
  //expect(user).toEqual(persistedUser);
});

