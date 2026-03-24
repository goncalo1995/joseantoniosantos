export interface Article {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  image?: string
  imageAlt?: string
}

export const articles: Article[] = [
  {
    slug: 'o-ultimo-comboio-do-sul',
    title: 'O Último Comboio do Sul',
    date: '15 de Março de 1972',
    image: '/images/article-photo-1.jpg',
    imageAlt: 'O Último Comboio do Sul',
    category: 'Reportagem',
    excerpt: 'Uma viagem pelos últimos quilómetros de uma linha ferroviária condenada ao abandono, onde os passageiros contam histórias de um Portugal que desaparece.',
    content: `A estação de São Bento já não é o que era. As paredes de azulejos azuis, que contam batalhas e conquistas, observam agora um movimento cada vez mais escasso. São sete da manhã quando o comboio para Trás-os-Montes parte pela última vez.

No cais número três, apenas meia dúzia de passageiros aguardam. A maioria são velhos — rostos curtidos pelo sol e pelo tempo, mãos calosas que conhecem o peso da enxada. Vão visitar filhos que ficaram nas aldeias, ou regressam depois de consultas médicas na cidade.

"Eu faço esta viagem há cinquenta anos", conta-me Manuel Silva, de 78 anos, natural de Mirandela. "Primeiro era com os meus pais, depois sozinho, e agora..." Faz uma pausa, olha pela janela embaciada. "Agora já não sei se voltarei."

O comboio arranca com um gemido metálico. Atravessamos pontes de ferro que pendem sobre rios agora secos, passamos por estações onde já ninguém espera. Em cada paragem, o mesmo ritual: o chefe de estação, sozinho no cais, levanta a bandeira verde para um comboio quase vazio.

Em Peso da Régua, sobe uma mulher com um cesto de uvas. Chama-se Maria e tem 65 anos. Vai vender o que resta da vindima ao mercado de Vila Real. "As vinhas estão a morrer", diz-me, sem dramatismo. "Os jovens foram todos embora. Para França, para a Alemanha. Já ninguém quer trabalhar a terra."

As paisagens sucedem-se — terraços de vinha abandonados, casas de pedra com as janelas fechadas, igrejas cujos sinos há muito deixaram de tocar. É um Portugal esquecido, invisível para quem apenas conhece Lisboa ou Porto.

O revisor, um homem de bigode grisalho chamado António, trabalha nesta linha há trinta e dois anos. "Quando comecei, havia três comboios por dia. Agora só resta este." Mostra-me os bilhetes que já não vende — tornaram-se relíquias de papel amarelecido. "Para o mês que vem, vão fechar. Dizem que não é rentável."

Rentável. A palavra ecoa no silêncio da carruagem. Como medir a rentabilidade de uma ligação entre pessoas? Como calcular o valor das histórias que estas paredes ouviram, dos reencontros e despedidas que estes bancos testemunharam?

Chegamos a Bragança ao cair da noite. A estação, outrora majestosa, parece agora um fantasma de si mesma. As bilheteiras estão fechadas, os relógios parados. Apenas uma luz fraca ilumina a entrada, como um último suspiro de dignidade.

Manuel Silva despede-se de mim com um aperto de mão firme. "Escreva sobre nós", pede-me. "Para que não nos esqueçam."

Prometo que o farei. E enquanto o comboio desaparece na escuridão, carrego comigo a certeza de que algumas viagens não se medem em quilómetros, mas em memórias.`
  },
  {
    slug: 'a-fabrica-que-fez-historia',
    title: 'A Fábrica que Fez História',
    date: '8 de Novembro de 1978',
    category: 'Investigação',
    excerpt: 'Nos corredores silenciosos de uma antiga fábrica têxtil, operárias recordam décadas de luta, greves e conquistas que mudaram o país.',
    content: `A chaminé da Fábrica do Carmo já não deita fumo há quinze anos, mas as suas paredes de tijolo vermelho ainda guardam segredos. É aqui que venho encontrar as mulheres que fizeram história — não nos livros oficiais, mas na memória viva de um movimento que transformou Portugal.

Amélia tem 72 anos e mãos que conheceram milhares de teares. "Entrei na fábrica com doze anos", conta-me, sentada num banco de madeira gasto pelo tempo. "Éramos tratadas como máquinas. Doze horas por dia, seis dias por semana. Se adoecíamos, éramos despedidas."

A fábrica empregava quinhentas mulheres no seu auge. Produziam algodão para exportação, mas os lucros nunca chegavam aos bolsos de quem trabalhava. "O patrão tinha três automóveis", lembra Rosa, de 68 anos. "Nós mal tínhamos para comer."

Foi em 1943 que tudo mudou. Amélia recorda esse dia como se fosse ontem: "Uma companheira desmaiou no tear. Estava grávida e não tinha comido desde a véspera. Naquele momento, olhámos umas para as outras e soubemos que já não podíamos calar."

A greve que se seguiu foi ilegal. Em pleno Estado Novo, protestar significava prisão, tortura, desaparecimento. Mas as mulheres do Carmo arriscaram tudo. "Cruzámos os braços durante três dias", conta Amélia. "A polícia cercou a fábrica, mas não entrámos. Ficámos lá fora, de braços dados, a cantar."

Rosa mostra-me uma fotografia amarelecida. Nela, dezenas de mulheres sorriem para a câmara, os punhos erguidos. "Isto foi no terceiro dia, quando soubemos que o patrão aceitou negociar. Ganhámos uma hora de almoço e um dia de descanso por mês. Parece pouco, mas foi uma vitória enorme."

A luta continuou nas décadas seguintes. Houve represálias, despedimentos, ameaças. Algumas das operárias foram presas, outras exilaram-se. Mas a chama nunca se apagou.

"Quando veio o 25 de Abril, chorámos todas", diz Amélia. "Finalmente, podíamos falar sem medo."

A fábrica fechou em 1989, vítima da globalização. As máquinas foram vendidas para a Ásia, o edifício ficou abandonado. Mas as mulheres do Carmo continuam a reunir-se, uma vez por mês, para recordar e celebrar.

"Não queríamos ser heroínas", conclui Rosa, com um sorriso sereno. "Queríamos apenas dignidade. E conseguimos."

Enquanto saio da fábrica, olho para a chaminé imponente contra o céu cinzento. É um monumento silencioso a todas as batalhas travadas entre estas paredes — batalhas que os livros de história raramente contam.`
  },
  {
    slug: 'cartas-de-africa',
    title: 'Cartas de África',
    date: '22 de Junho de 1973',
    category: 'Guerra',
    excerpt: 'De um posto avançado no mato angolano, um jovem soldado escreve cartas que nunca chegaram ao seu destino. Esta é a sua história.',
    content: `As cartas estavam guardadas numa caixa de lata enferrujada, escondidas no sótão de uma casa em Braga. Foram escritas entre 1971 e 1972 por António Ferreira, um soldado de vinte e dois anos que nunca regressou de Angola.

A mãe, Deolinda, tem agora 85 anos. Nunca as tinha mostrado a ninguém. "Não conseguia ler", confessa-me, as mãos trémulas a segurar os papéis amarelecidos. "Eram dele, e ele já cá não está."

António foi mobilizado em Janeiro de 1971. Era estudante de Medicina em Coimbra, tinha uma namorada que o esperava, sonhos de construir uma vida. A guerra levou-lhe tudo.

A primeira carta data de Fevereiro: "Mãe, chegámos ao mato. É diferente de tudo o que imaginei. O calor é insuportável e os mosquitos não nos deixam dormir. Mas estamos todos bem. Não se preocupe."

As cartas seguintes revelam a lenta transformação de um jovem idealista num homem confrontado com o horror: "Ontem vimos uma aldeia destruída. Não sei quem o fez, não sei porquê. Apenas sei que havia crianças entre os destroços. Não consigo dormir."

Em Agosto de 1971, o tom muda: "Já não sei para que estamos aqui. Os nossos superiores dizem que defendemos a pátria, mas que pátria é esta que nos manda morrer por terra que não é nossa? Perdoe-me, mãe, por estas palavras. Mas preciso de as escrever para alguém."

António encontrou consolo na amizade com outros soldados — especialmente Carlos, um rapaz do Alentejo que escrevia poesia. "Ele diz que as palavras são a única coisa que nos pertence. Talvez tenha razão."

Em Março de 1972, a última carta: "Mãe, se esta carta chegar e eu não, saiba que a amei com toda a minha alma. Diga à Maria que nunca a esqueci. E diga ao pai que tentei ser homem como ele me ensinou. O que quer que aconteça, não tive vergonha de chorar quando senti medo. E senti medo muitas vezes."

António morreu três dias depois, numa emboscada perto de Nova Lisboa. O corpo nunca foi encontrado.

Deolinda guarda estas cartas há mais de cinquenta anos. "Ele está aqui", diz-me, apontando para o peito. "Enquanto eu viver, ele vive também."

Antes de partir, pergunto-lhe se posso publicar as cartas. Ela hesita. Depois, acena que sim.

"Para que outros não esqueçam", murmura. "Para que isto nunca mais aconteça."

Saio da casa em silêncio. No bolso, levo cópias das cartas de um jovem que morreu numa guerra que poucos compreenderam. A sua voz, silenciada há cinco décadas, finalmente será ouvida.`
  },
  {
    slug: 'o-pescador-e-o-mar',
    title: 'O Pescador e o Mar',
    date: '3 de Setembro de 1980',
    category: 'Perfil',
    excerpt: 'Na Nazaré, um velho pescador de 80 anos continua a enfrentar as ondas todas as madrugadas. Uma história de teimosia, respeito e saudade.',
    content: `Joaquim da Nazaré levanta-se às quatro da manhã há setenta anos. Nem a idade, nem as dores, nem as tempestades o dissuadem. O mar é a sua vida, e ele pretende vivê-la até ao fim.

Encontro-o no porto, a preparar o barco que herdou do pai e que, por sua vez, herdara do avô. Chama-se "Maria do Céu", nome da mulher que Joaquim amou durante cinquenta anos e que o mar lhe levou numa noite de Inverno.

"Ela não gostava que eu fosse pescador", conta-me enquanto verifica as redes. "Dizia que o mar era cruel e ciumento. Tinha razão nas duas coisas."

Joaquim começou a pescar aos dez anos, como ajudante do pai. Nessa época, não havia motores — o barco era puxado por bois até à água e regressava empurrado pelas ondas. "Era uma luta", recorda. "Cada peixe que apanhávamos, apanhávamos com suor e sangue."

As ondas da Nazaré são conhecidas em todo o mundo pela sua fúria. Joaquim perdeu para elas três irmãos e dois filhos. "O mar dá e o mar leva", diz, sem amargura aparente. "Não podemos lutar contra ele. Só podemos respeitá-lo."

O respeito de Joaquim manifesta-se em rituais antigos: nunca sair em dia de lua nova, beijar a medalha de Nossa Senhora antes de embarcar, nunca pronunciar certas palavras que considera de mau agouro. "Superstições", admite com um sorriso. "Mas não custa nada."

A pesca já não é o que era. Os grandes arrastões varreram os mares, os peixes escasseiam, os jovens preferem trabalhar em fábricas ou emigrar. Joaquim é um dos últimos da sua espécie — um guardião de tradições que morrerão com ele.

"Os meus netos não querem saber disto", confessa. "E eu entendo. É uma vida dura, mal paga, perigosa. Mas é a minha vida."

Acompanho-o numa saída ao amanhecer. O barco enfrenta ondas de três metros como se fossem brincadeira. Joaquim manobra com uma destreza impossível para os seus oitenta anos, lendo o mar como quem lê um livro familiar.

Regressamos com a rede cheia de sardinha. No mercado, as peixeiras regateiam preços que Joaquim aceita sem discussão. "Não é pelo dinheiro", explica-me. "É para não ficar parado."

Ao despedir-me, pergunto-lhe quanto tempo mais pensa pescar. Joaquim olha para o horizonte, onde o sol começa a erguer-se sobre as ondas.

"Até o mar me chamar", responde. "E quando me chamar, irei sem medo."

Uma semana depois desta entrevista, Joaquim da Nazaré saiu ao mar pela última vez. O corpo foi encontrado dois dias mais tarde, abraçado ao barco que lhe tinha dado nome e propósito.

Na Nazaré, dizem que ele morreu como quis — de frente para as ondas.`
  },
  {
    slug: 'o-preco-do-silencio',
    title: 'O Preço do Silêncio',
    date: '14 de Abril de 1983',
    category: 'Investigação',
    excerpt: 'Uma investigação sobre os anos de censura e as histórias que nunca foram contadas, através dos testemunhos de jornalistas que viveram a repressão.',
    content: `"O lápis azul era mais temido que a PIDE." Francisco Almeida, jornalista reformado de 75 anos, não exagera. Durante quarenta anos, a censura prévia do Estado Novo determinou o que os portugueses podiam ou não ler.

Francisco trabalhou em vários jornais entre 1950 e 1974. Viu artigos rasgados, colegas presos, redações encerradas. "Aprendíamos a escrever nas entrelinhas", recorda. "Era uma arte — dizer sem dizer, insinuar sem afirmar."

A Comissão de Censura funcionava num edifício discreto em Lisboa. Os censores eram funcionários públicos, muitos deles professores ou ex-militares. Cada artigo, cada notícia, cada fotografia passava pelas suas mãos antes de chegar aos leitores.

"Havia regras escritas e não escritas", explica Francisco. "Não se criticava o regime, não se falava de greves, não se mencionavam os presos políticos. Mas também não se podia falar de pobreza, de emigração, de injustiça social. Basicamente, não se podia falar de Portugal."

As consequências de desafiar a censura eram graves. Francisco foi preso três vezes. "A primeira, fiquei duas semanas na cadeia do Aljube. Não me bateram, mas o silêncio e a incerteza eram tortura suficiente."

Alguns jornalistas colaboravam com a resistência clandestina, fazendo passar informação para jornais no estrangeiro. Era perigoso — a PIDE infiltrava-se em todo o lado. "Nunca sabíamos em quem confiar", lembra Francisco. "O colega do lado podia ser informador."

Maria Clara Santos foi uma das poucas mulheres jornalistas da época. Aos 70 anos, ainda guarda exemplares de artigos que nunca foram publicados. "Escrevi sobre as condições das trabalhadoras fabris. Sobre as crianças que morriam de fome no Alentejo. Sobre as mulheres que fugiam de maridos violentos sem qualquer proteção legal. Nada disto passou."

A censura não se limitava aos jornais. Livros eram proibidos, filmes cortados, peças de teatro canceladas. A cultura portuguesa viveu décadas amordaçada.

"O pior não era o que nos impediam de publicar", reflecte Francisco. "Era a autocensura que nos impúnhamos. Depois de anos a escrever com medo, já não sabíamos escrever de outra maneira."

O 25 de Abril trouxe a liberdade, mas as cicatrizes permaneceram. Muitos jornalistas nunca recuperaram a capacidade de escrever livremente. Outros carregam até hoje a culpa de terem cedido, de terem colaborado, ainda que minimamente, com o sistema.

"A verdade é que todos tínhamos as mãos sujas", admite Francisco. "Era sobreviver ou desaparecer."

Quarenta anos depois da Revolução, alguns arquivos da censura permanecem classificados. As histórias que foram silenciadas continuam à espera de serem contadas.

Este artigo é um primeiro passo. Há mais vozes para ouvir, mais testemunhos para recolher. O silêncio durou demasiado tempo.`
  }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}
