import { action, computed, observable } from 'mobx';

class TemporizadorStore {
  @observable accessor tempoRestante = 1500;
  @observable accessor temporizadorFuncionando = false;
  @observable accessor tempoDeTrabalho = 25 * 60;
  timeoutId = null;

  @action
  alternarTemporizador() {
    this.temporizadorFuncionando = !this.temporizadorFuncionando;
    if (this.temporizadorFuncionando) {
      this.contagemRegressiva();
    } else {
      clearTimeout(this.timeoutId);
    }
  }

  @action
  contagemRegressiva() {
    if (this.temporizadorFuncionando && this.tempoRestante > 0) {
      this.timeoutId = setTimeout(() => {
        this.tempoRestante--;
        this.contagemRegressiva();
      }, 1000);
    }
  }

  @action
  resetarTemporizador() {
    clearTimeout(this.timeoutId); 
    this.temporizadorFuncionando = false; 
    this.tempoRestante = this.tempoDeTrabalho; 
  }

  @action
  atualizarTempoDeTrabalho(minutosDeTrabalho, segundosDeTrabalho) {
    this.tempoDeTrabalho = (minutosDeTrabalho * 60) + segundosDeTrabalho;
    this.tempoRestante = this.tempoDeTrabalho;
    this.temporizadorFuncionando = false;
  }

  @computed get tempoFormatado() {
    const minutos = Math.floor(this.tempoRestante / 60);
    const segundos = this.tempoRestante % 60;
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }
}

const temporizadorStore = new TemporizadorStore();
export default temporizadorStore;



