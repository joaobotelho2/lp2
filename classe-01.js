class tipe {
    constructor(tipo){
        this.tipo = tipo;
    }
    info() {
        return `tipo do jogo: ${this.tipo}`;
    }
}



//criando classe aqui em baixo e tambem usando herança de uma classe anterior
class jogo extends tipe {
    constructor(nome, lancamento) {
        super('jogo');
        this.nome = nome;
        this.lancamento = lancamento;
    }
//método aqui em baixo
    detalhes() {
        return `${super.info()}, nome do logo: ${this.nome}, ano de lançamento do jogo: ${this.lancamento}`;
    }

}
//atributos do meu jogo
let = meujogo = new jogo('dead cells', '2011');
//mostrando o jogo
console.log(meujogo.detalhes());
