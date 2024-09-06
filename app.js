function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultado_pesquisa");


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada tenista no array 'nomeTenistas'
    for (let dado of nomeTenistas) {
      // Cria um novo elemento div para cada tenista
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }