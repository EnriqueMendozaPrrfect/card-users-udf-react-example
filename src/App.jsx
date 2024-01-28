import { Component, Fragment } from 'react'

import getRandomUsers from './api/getRandomUsers'

import './App.css'
import { Context as LanguageContext } from './AppContext/language'
import UserCard from './Components/UserCard'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      users: []
    }
  }
  async getRandomUsers() {
    const users = await getRandomUsers()

    this.setState({ users });
  }

  componentDidMount() {
    this.getRandomUsers()
  }

  render() {
    return (
      <Fragment>
        <div className='languaje-section'>
          <p>Language / Idioma</p>
          <div>
            <button onClick={this.context.useEnglish}>English</button>
            <button onClick={this.context.useSpanish}>Spanish</button>
          </div>
        </div>
        {
          this.state.users.length === 0 && <p>Loading...</p>
        }
        {
          this.state.users.length !== 0
          && <div className='cards-container'>
            { this.state.users.map((user, index) =>{
              return(
                <UserCard
                  key={user.firstName+user.lastName+user.created+index}
                  firstName={ user.first }
                  lastName={ user.last }
                  email={ user.email }
                  balance={ user.balance }
                  address={ user.address }
                  registrationDate={ user.created }
                />
              )
            })}
          </div>
        }
      </Fragment>
    )
  }
}

App.contextType = LanguageContext;

export default App
