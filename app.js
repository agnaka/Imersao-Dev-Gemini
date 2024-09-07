function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultado_pesquisa");


  let campoPesquisa = document.getElementById("campo_pesquisa").value;

  if (!campoPesquisa) { // campoPesquisa == "" foi simplificado o '!' significa se não existe ou se não tem nada
    section.innerHTML = "<p>Você não digito nada. Digite um tenista ou uma palavra chave</p>"
    return;
  }

  campoPesquisa = campoPesquisa.toLocaleLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada tenista no array 'nomeTenistas'
  for (let dado of nomeTenistas) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    tags = dado.tags.toLocaleLowerCase();

    // se titulo está includes no campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento;
      resultados += `
        <div class="item-resultado">
          <img src="${dado.foto}" width='50' height= 'auto'>
            <div class="item-resultado-direita">
            <h2>                        
              <a>${dado.titulo}</a> <img src="${dado.foto}" class="foto_pequena">
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>          
        </div>
      `;
    }
  }
  if (!resultados) {
    resultados = "<P>Nada foi encontrado</p>"
  }
  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}