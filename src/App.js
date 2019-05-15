import React from 'react';
import Chat from './components/Chat';
import Auth from './Auth';
import LoginPage from './components/LoginPage';
import LogoutLink from './components/LogoutLink';

function App() {
  // 分かりやすいように'margin: 50px'を適用しています。
  return (
    <div className="App" style={{ margin: 50 }}>
      <Chat />
    </div>
  );
}

export default App;
