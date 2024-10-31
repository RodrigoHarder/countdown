import Display from './componentes/Display';
import Controles from './componentes/Controles';
import { observer } from 'mobx-react';
import './App.css';

const App = observer(() => {
  return (
    <div className="app">
      <h1>Countdown</h1>
      <Display />
      <Controles />
    </div>
  );
});

export default App;
