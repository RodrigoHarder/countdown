import { observer } from 'mobx-react';
import temporizadorStore from '../../store/TemporizadorStore';
import './Controles.css';

const Controles = observer(() => (
  <div className="controles">
    <button className="alternar" onClick={() => temporizadorStore.alternarTemporizador()}>
      {temporizadorStore.temporizadorFuncionando ? 'Pausar' : 'Iniciar'}
    </button>
    {temporizadorStore.temporizadorFuncionando && (
      <button className="reiniciar" onClick={() => temporizadorStore.resetarTemporizador()}>
        Reiniciar
      </button>
    )}
  </div>
));

export default Controles;



