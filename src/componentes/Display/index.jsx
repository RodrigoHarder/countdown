import { observer } from 'mobx-react';
import temporizadorStore from '../../store/TemporizadorStore';
import './Display.css';

const Display = observer(() => {
  const atualizarTempo = (minutos = 0, segundos = 0) => {
    temporizadorStore.atualizarTempoDeTrabalho(
      Number(document.getElementById('minutos')?.value || minutos),
      Number(document.getElementById('segundos')?.value || segundos)
    );
  };

  return (
    <div className="display-temporizador">
      {temporizadorStore.tempoRestante === temporizadorStore.tempoDeTrabalho && !temporizadorStore.temporizadorFuncionando ? (
        <div className="configuracoes-de-temporizador">
          {['minutos', 'segundos'].map((id) => (
            <div key={id} className="inputs">
              <label>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
              <input
                id={id}
                type="number"
                onChange={() => atualizarTempo()}
                value={
                  id === 'minutos'
                    ? Math.floor(temporizadorStore.tempoDeTrabalho / 60)
                    : temporizadorStore.tempoDeTrabalho % 60
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="tempo-restante">{temporizadorStore.tempoFormatado}</h2>
      )}
    </div>
  );
});

export default Display;
