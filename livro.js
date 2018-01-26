var Capitulo = function(titulo, numpaginas) {
	var titulo = titulo;
	var numpaginas = numpaginas;

	this.getCapitulo = () => titulo;
	this.getNumPaginas = () => numpaginas;
}

var Livro = function(nome, editora, autor) {
	
	var nome = nome;
	var editora = editora;
	var autor = autor;
	var capitulos = [];

	this.getNome = () => nome;
	this.getEditora = () => editora;
	this.getAutor = () => autor;
	this.addCapitulo = (capitulo) => capitulos.push(capitulo);
	this.getNumCapitulos = () => capitulos.length;
	this.getNumPaginasLivro = () => capitulos.reduce( (a,p) => a +p.numpaginas, 0)
}
