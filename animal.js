var Animal = function(expectativavida, numpatas, isbipede) {
	if(this.constructor === Animal) {
		throw new Error("Não podemos iniciar classe abstrata.");
	}

	this.expectativavida = expectativavida;
	this.numpatas = numpatas;
	this.isbipede = isbipede;

	apresentar = () => `Eu sou um animal.`
}

var Cavalo = function(cor, raca, expectativavida, numpatas, isbipede) {
	Animal.call(this, expectativavida, numpatas, isbipede);

	this.cor =  cor;
	this.raca = raca;
	
	apresentar = () => `Eu sou um cavalo, IIIH.`
}

var Humano = function(nome, idade, profissao, expectativavida, numpatas, isbipede) {
	Animal.call(this, expectativavida, numpatas, isbipede);

	this.nome = nome;
	this.idade = idade;
	this.profissao = profissao;

	apresentar = () => `Are we human, or are we dancer?`
}
