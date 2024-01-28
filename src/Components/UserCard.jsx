import { Component } from 'react';
import UniversalDateFormat from 'universal-date-format'

import { Context as LanguageContext } from '../AppContext/language'
import { englishFormat, spanishFormat } from './dateFormat';

import './UserCard.css'

class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const format = this.context.isEnglish() ? englishFormat: spanishFormat;
    const registrationDate = new UniversalDateFormat(
      new Date(this.props.registrationDate),
      format
    )
    const titles = this.context.isEnglish() ? {
      emal: 'Email',
      address: 'Address',
      balance: 'Balance',
      registrationDate: 'Registration Date'
    }: {
      emal: 'Correo',
      address: 'Direción',
      balance: 'Valor de cuenta',
      registrationDate: 'Fecha de registro'
    };

    return(
      <div className='card'>
        <div>
          <h1>{this.props.firstName} {this.props.lastName}</h1>
        </div>
        <div>
          <p>{titles.emal}:</p>
          <p className='card-overflow-content'>{this.props.email}</p>
        </div>
        <hr />
        <div>
          <p>{titles.address}:</p>
          <p className='card-overflow-content'>{this.props.address}</p>
        </div>
        <hr />
        <div>
          <p>{titles.balance}:</p>
          <p>{this.props.balance}</p>
        </div>
        <hr />
        <div>
          <p>{titles.registrationDate}:</p>
          <p className='card-overflow-content'>{registrationDate.getDateFormat()}</p>
        </div>
      </div>
    )
  }
}

UserCard.contextType = LanguageContext;

export default UserCard;
