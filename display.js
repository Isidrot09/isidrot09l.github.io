class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.valorActual = '';
    this.ValorAnterior = '';


  }

  agregarNumero(numero){
    this.valorActual =   this.valorActual + numero;
    this.imprimirValores();

  }
  imprimirValores(){
    this.displayValorActual.textContent = displayValorActual;
    this.displayValorAnterior.textContent = displayValorAnterior;

  }
}
