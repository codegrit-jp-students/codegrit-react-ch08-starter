import { Component } from 'react'

class Auth extends Component {
  state = {
    me: JSON.parse(localStorage.getItem('me')),
    isLoggedIn: localStorage.getItem('isLoggedIn')
  }

  login = (e = null) => {
    if (e) e.preventDefault()
    const me = {
      email: "test@test.com",
      authToken: 'test',
      name: "テストユーザー",
      username: "testuser"
    }
    localStorage.setItem('me', JSON.stringify(me))
    this.setState({ 
      me, 
      isLoggedIn: true 
    });
  }

  logout = (e = null) => {
    
  }
  
  render() {
    return this.props.children()
  }
}

export default Auth;