// lista + objeto
let nomeTenistas = [
    {
        titulo: "Bia Haddad Maia",
        descricao: "Bia Haddad Maia é uma tenista brasileira que vem se destacando no cenário internacional e reescrevendo a história do tênis feminino no país. Com um jogo sólido e versátil, Bia conquistou diversos títulos importantes e alcançou posições elevadas no ranking mundial. Sua determinação e talento a tornaram uma das principais atletas brasileiras da atualidade. A tenista paulista tem inspirado uma nova geração de tenistas e levado o nome do Brasil para o alto do pódio em diversos torneios ao redor do mundo.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Haddad_Maia",
        tags: "tenista Brasil top",
        foto: '/assets/Beatriz_Haddad_Maia.jpg',
    },
    {
        titulo: "Rafael Nadal",
        descricao: "Rafael Nadal é um tenista espanhol considerado um dos maiores de todos os tempos. Conhecido por sua dominância no saibro e por sua intensa rivalidade com Roger Federer e Novak Djokovic, Nadal conquistou diversos títulos de Grand Slam e se tornou um ícone do esporte.",
        link: "https://pt.wikipedia.org/wiki/Rafael_Nadal",
        tags: "tenista  espanha españa campeão grand slam wimbledon roland garros usopen top",
        foto: "assets/Rafael_Nadal.jpg"
    },
    {
        titulo: "Carlos Alcaraz",
        descricao: "Carlos Alcaraz é um tenista espanhol que vem se destacando como uma das grandes promessas do tênis mundial. Com um jogo agressivo e versátil, Alcaraz já conquistou diversos títulos importantes.",
        link: "https://pt.wikipedia.org/wiki/Carlos_Alcaraz",
        tags: "tenista espanha españa campeão grand slam wimbledon roland garros usopen top",
        foto: 'assets/Carlos_Alcaraz.jpg',
    },
    {
        titulo: "Aryna Sabalenka",
        descricao: "Aryna Sabalenka é uma tenista bielorrussa conhecida por seu forte saque e jogo de fundo de quadra. Ela conquistou diversos títulos WTA e é considerada uma das principais tenistas da atualidade.",
        link: "https://pt.wikipedia.org/wiki/Aryna_Sabalenka",
        tags: "tenista bielorrusia campeã grand slam usopen top",
        foto: '/assets/Aryna_Sabalenka.jpg'
    },
    {
        titulo: "Novak Djokovic",
        descricao: "Novak Djokovic é um tenista sérvio considerado um dos maiores tenistas de todos os tempos. Com um jogo técnico e mentalmente forte, Djokovic detém diversos recordes e títulos de Grand Slam.",
        link: "https://pt.wikipedia.org/wiki/Novak_Djokovic",
        tags: "tenista  servia campeão grand slam wimbledon australianopen usopen top",
        foto: 'assets/Novak_Djokovic.jpg'
    },
    {
        titulo: "Iga Swiatek",
        descricao: "Iga Swiatek é uma tenista polonesa, atual número 1 do mundo e campeã de diversos Grand Slams. Conhecida por sua consistência e mentalidade forte, Swiatek é considerada uma das melhores tenistas da atualidade.",
        link: "https://pt.wikipedia.org/wiki/Iga_Swiatek",
        tags: "tenista campeã grand slam roland garros usopen top",
        foto: 'assets/Iga_Świątek.jpg'
    },
    {
        titulo: "Jannik Sinner",
        descricao: "Jannik Sinner é um tenista italiano, considerado uma das maiores promessas do tênis masculino. Com um jogo completo e versátil, Sinner já conquistou diversos títulos ATP e é um dos favoritos para os próximos anos.",
        link: "https://pt.wikipedia.org/wiki/Jannik_Sinner",
        tags: "tenista campeão top ",
        foto: 'assets/Sinner.jpg'
    },
    {
        titulo: "Frances Tiafoe",
        descricao: "Frances Tiafoe é um tenista americano conhecido por seu jogo agressivo e carisma. Com um forte saque e voleio, Tiafoe já alcançou diversas semifinais de Grand Slam e é um dos tenistas mais populares da atualidade.",
        link: "https://pt.wikipedia.org/wiki/Frances_Tiafoe",
        tags: "tenista americano usopen top",
        foto: 'assets/Frances_Tiafoe.JPG'
    },
    {
        titulo: "Daniil Medvedev",
        descricao: "Tenista russo com um estilo de jogo defensivo e consistente, Medvedev é conhecido por sua frieza em momentos decisivos.",
        link: "https://pt.wikipedia.org/wiki/Daniil_Medvedev",
        tags: "tenista russo defensivo top",
        foto: '/assets/Medvedev.jpg'
    },
    {
        titulo: "Stefanos Tsitsipas",
        descricao: "Grego com um jogo ofensivo e variado, Tsitsipas é um dos tenistas mais completos da nova geração.",
        link: "https://pt.wikipedia.org/wiki/Stefanos_Tsitsipas",
        tags: "tenista grego ofensivo top",
        foto: '/assets/Stefanos_Tsitsipas.jpg'
    },
  {
    titulo: "Elena Rybakina",
    descricao: "Campeã de Wimbledon, Rybakina é conhecida por sua altura e alcance, que lhe conferem uma vantagem em muitos pontos.",
    link: "https://pt.wikipedia.org/wiki/Elena_Rybakina",
    tags: "tenista cazaque campeã wimbledon top",
    foto: '/assets/Elena_Rybakina.jpg',
  },
  {
    titulo: "Coco Gauff",
    descricao: "A americana Coco Gauff é uma das jovens promessas mais brilhantes do tênis mundial. Com apenas alguns anos de carreira profissional, ela já conquistou diversos títulos e impressiona pela maturidade e talento precoce. Seu jogo versátil e completo, aliado a uma mentalidade forte, a coloca como uma das favoritas para dominar o circuito nos próximos anos.",
    link: "https://pt.wikipedia.org/wiki/Coco_Gauff",
    tags: "tenista americana, jovem promessa, versátil top",
    foto: '/assets/Coco_Gauff.jpg',
  },
  {
    titulo: "Ons Jabeur",
    descricao: "A tunisiana Ons Jabeur é um dos nomes mais originais do tênis feminino. Conhecida por seu estilo de jogo criativo e imprevisível, com slices, lob e dropshots, Jabeur desafiou as convenções do tênis e se tornou a primeira tenista africana a chegar a uma final de Grand Slam. Sua habilidade de surpreender seus adversários a torna uma das tenistas mais emocionantes de assistir.",
    link: "https://pt.wikipedia.org/wiki/Ons_Jabeur",
    tags: "tenista tunisina, estilo criativo, inovadora top",
    foto: '/assets/Ons_Jabeur.jpg',
  },
  {
    titulo: "Jessica Pegula",
    descricao: "A americana Jessica Pegula é uma das tenistas mais consistentes do circuito. Com um jogo sólido em todos os fundamentos, Pegula se destaca pela sua regularidade e capacidade de vencer partidas longas e disputadas. Sua ascensão gradual no ranking mundial a coloca como uma das principais candidatas a conquistar títulos de Grand Slam.",
    link: "https://pt.wikipedia.org/wiki/Jessica_Pegula",
    tags: "tenista americana, consistente, sólida top",
    foto: '/assets/Jessica_Pegula.jpg',
  },
  {
    titulo: "Caroline Garcia",
    descricao: "A francesa Caroline Garcia é conhecida por seu jogo agressivo e poderoso. Com um saque devastador e um forehand explosivo, Garcia domina os pontos e impõe seu ritmo às adversárias. Sua experiência em competições de alto nível a torna uma adversária temida em qualquer torneio.",
    link: "https://pt.wikipedia.org/wiki/Caroline_Garcia",
    tags: "tenista francesa, agressiva, saque poderoso top",
    foto: '/assets/Caroline_Garcia.jpg',
  },
  {
    titulo: "Daria Kasatkina",
    descricao: "A russa Daria Kasatkina é uma das tenistas mais versáteis do circuito. Com habilidade para jogar em qualquer superfície e adaptar seu jogo às diferentes adversárias, Kasatkina é conhecida por sua inteligência tática e sua capacidade de surpreender seus oponentes. Sua ascensão no ranking mundial a coloca como uma das principais promessas do tênis feminino.",
    link: "https://pt.wikipedia.org/wiki/Daria_Kasatkina",
    tags: "tenista russa, versátil, inteligente top",
    foto: '/assets/Daria_Kasatkina.jpg',
  },
  {
    titulo: "Belinda Bencic",
    descricao: "A suíça Belinda Bencic é uma das tenistas mais completas de sua geração. Com um jogo sólido em todos os fundamentos e uma mentalidade forte, Bencic já conquistou diversos títulos importantes e se estabeleceu como uma das principais forças do tênis feminino. Sua capacidade de se recuperar de lesões e voltar a competir no mais alto nível demonstra sua determinação e paixão pelo esporte.",
    link: "https://pt.wikipedia.org/wiki/Belinda_Bencic",
    tags: "tenista suíça, completa, determinada top",
    foto: '/assets/Belinda_Bencic.jpg',
  },
  {
    titulo: "Maria Sakkari",
    descricao: "A grega Maria Sakkari é conhecida por seu jogo de fundo de quadra sólido e sua mentalidade forte. Com uma consistência impressionante, Sakkari se destaca por sua capacidade de manter o foco mesmo em momentos de pressão. Sua ascensão no ranking mundial a coloca como uma das principais candidatas a conquistar títulos de Grand Slam.",
    link: "https://pt.wikipedia.org/wiki/Maria_Sakkari",
    tags: "tenista grega, consistente, mental forte top",
    foto: '/assets/Maria_Sakkari.jpg',
  },
  {
    titulo: "Alexander Zverev",
    descricao: "Alemão com um saque poderoso e um jogo de fundo de quadra sólido, Zverev é um dos tenistas mais altos do circuito.",
    link: "https://pt.wikipedia.org/wiki/Alexander_Zverev",
    tags: "tenista alemão saque poderoso top",
    foto: '/assets/Alexander_Zverev.jpg',
  },
  {
    titulo: "Andrey Rublev",
    descricao: "Russo que tem se destacado no circuito ATP nos últimos anos. Conhecido por seu jogo agressivo e potente, especialmente seu forehand, Rublev já conquistou diversos títulos importantes e se consolidou como um dos principais nomes do tênis mundial.",
    link: "https://pt.wikipedia.org/wiki/Andrey_Rublev_(tenista)?uselang=pt",
    tags: "tenista russo agressivo top",
    foto: '/assets/Andrey_Rublev.jpg',
  },
  {
    titulo: "Holger Rune",
    descricao: "Dinamarquês com um estilo de jogo versátil, Rune é um dos jovens tenistas mais promissores do momento.",
    link: "https://pt.wikipedia.org/wiki/Holger_Rune",
    tags: "tenista dinamarquês versátil top",
    foto: '/assets/Rune.jpg',
  },
  {
    titulo: "Casper Ruud",
    descricao: "O norueguês Casper Ruud é um dos tenistas mais consistentes de sua geração. Conhecido por seu jogo de fundo de quadra sólido e sua mentalidade resiliente, Ruud tem escalado rapidamente o ranking mundial. Sua ascensão meteórica é marcada por finais de Grand Slam e títulos importantes em diversos torneios. A força e a regularidade de seu jogo o colocam entre os principais favoritos do circuito.",
    link: "https://pt.wikipedia.org/wiki/Casper_Ruud",
    tags: "tenista norueguês, fundo de quadra, consistente top",
    foto: '/assets/Casper_Ruud.jpg'
}
  ];