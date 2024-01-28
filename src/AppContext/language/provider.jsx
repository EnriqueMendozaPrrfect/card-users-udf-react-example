import { Component } from 'react';
import Context from './context';

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en'
    }

    this.isEnglish = this.isEnglish.bind(this)
    this.isSpanish = this.isSpanish.bind(this)
    this.useEnglish = this.useEnglish.bind(this)
    this.useSpanish = this.useSpanish.bind(this)
  }

  isEnglish() {
    return this.state.language === 'en'
  }

  isSpanish() {
    return this.state.language === 'es'
  }

  useSpanish() {
    this.setState({
      language: 'es'
    })
  }

  useEnglish() {
    this.setState({
      language: 'en'
    })
  }

  render() {
    return(
    <Context.Provider value={{
      language: this.state.language,
      isEnglish: this.isEnglish,
      isSpanish: this.isSpanish,
      useEnglish: this.useEnglish,
      useSpanish: this.useSpanish
    }}>
      { this.props.children }
    </Context.Provider>
    )
  }
}

export default Provider
