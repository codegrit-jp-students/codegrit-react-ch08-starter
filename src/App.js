import React from 'react';
import Chat from './components/Chat';
import Auth from './Auth';
import LoginPage from './components/LoginPage';
import LogoutLink from './components/LogoutLink';

const ChatComponent = (props) => {
  if (props) {
    return (
      <Chat></Chat>
    )
  }
}

function App() {
  // 分かりやすいように'margin: 50px'を適用しています。
  return (
    <div className="App" style={{ margin: 50 }}>
      <Auth >
        {(props) => {
          if (props.isLoggedIn) {
            const {logout, me} = props;
            return (
              <>
                <LogoutLink logout={logout} me={me}/>
                <Chat />
              </>
            )
          }
          if (!props.isLoggedIn) {
            return (
              <LoginPage login={props.login}/>
            )
          }
        }}
      </Auth>
    </div>
  );
}

export default App;
