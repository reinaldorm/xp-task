import React from 'react';
import Main from './components/main/Main';
import { TaskProvider } from './context/task/provider';
import { PlayerProvider } from './context/player/provider';
import { ModalProvider } from './context/modal/provider';

function App() {
  return (
    <div className="app">
      <PlayerProvider>
        <TaskProvider>
          <ModalProvider>
            <Main />
          </ModalProvider>
        </TaskProvider>
      </PlayerProvider>
    </div>
  );
}

export default App;
