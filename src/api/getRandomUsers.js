// import randomGetUsers from './fake/randomapi-get-users.json'

const getRandomUsers = async () => {
  const response = await fetch(
    'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb',
    {
      method: 'GET',
    }
  )

  const usersData = await response.json()

  return usersData.results[0]

  // Use this mock for testing
  // return randomGetUsers.results[0]
}

export default getRandomUsers
