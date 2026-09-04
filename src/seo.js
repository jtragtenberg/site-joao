// Metadados por rota, usados tanto na pre-renderizacao (scripts/prerender.mjs)
// quanto na geracao do sitemap. Fonte unica: se uma rota nasce aqui, ela ganha
// arquivo estatico, <head> proprio e entrada no sitemap.
import projetos from './data/projetos.jsx';

export const SITE = {
  origin: 'https://joaotragtenberg.com.br',
  autor: 'João Tragtenberg',
  imagemPadrao: '/images/retrato_150px.jpg',
};

const paginas = {
  '/': {
    title: 'Portfolio de João Tragtenberg | Design, Música e Tecnologias Digitais',
    description:
      'João Tragtenberg é artista, designer e pesquisador. Atua com design de interação, instrumentos musicais digitais, tecnologias criativas, pesquisa novas interfaces para expressão musical (NIME). Trabalha com Arduino, Bela, Pure Data, C++, fabricação digital e artesanal no contexto da cultura popular brasileira em Recife, Pernambuco, Brasil.',
  },
  '/projetos': {
    title: 'Projetos | João Tragtenberg',
    description:
      'Instrumentos musicais digitais, instalações interativas e performances criados por João Tragtenberg entre 2012 e hoje, com o Bongarbit, o Grupo Orí e o Batebit, em diálogo com a cultura popular brasileira.',
  },
  '/publicacoes': {
    title: 'Publicações | João Tragtenberg',
    description:
      'Artigos e white papers de João Tragtenberg sobre design de instrumentos musicais digitais, design participativo e gambiarra, publicados na NIME, no SBCM, na Per Musi e na HCI International.',
  },
  '/contato': {
    title: 'Contato | João Tragtenberg',
    description:
      'Entre em contato com João Tragtenberg para conhecer os instrumentos, propor projetos ou conversar sobre design, música e tecnologias digitais.',
  },
};

// Corta no limite de palavra, para a description nao terminar no meio de uma.
function resumir(texto, limite = 160) {
  const t = texto.replace(/\s+/g, ' ').trim();
  if (t.length <= limite) return t;
  const corte = t.slice(0, limite);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '…';
}

export function metaDaRota(pathname) {
  const fixa = paginas[pathname];
  if (fixa) {
    return {
      ...fixa,
      canonical: SITE.origin + pathname,
      imagem: SITE.origin + SITE.imagemPadrao,
      noindex: false,
    };
  }

  const m = pathname.match(/^\/projeto\/([^/]+)$/);
  const projeto = m && projetos.find((p) => p.id === m[1]);
  if (projeto) {
    return {
      title: `${projeto.titulo} | João Tragtenberg`,
      description: resumir(projeto.descricao || projeto.resumo),
      canonical: `${SITE.origin}/projeto/${projeto.id}`,
      imagem: SITE.origin + (projeto.imagemDetalhe || projeto.imagemCard || SITE.imagemPadrao),
      noindex: false,
    };
  }

  // Rota desconhecida: 404.html. Fica fora do indice de proposito.
  return {
    title: 'Página não encontrada | João Tragtenberg',
    description: 'Esta página não existe no site de João Tragtenberg.',
    canonical: SITE.origin + '/',
    imagem: SITE.origin + SITE.imagemPadrao,
    noindex: true,
  };
}

// Todas as rotas que ganham arquivo estatico, na ordem em que entram no sitemap.
export function todasAsRotas() {
  return [...Object.keys(paginas), ...projetos.map((p) => `/projeto/${p.id}`)];
}

// Prioridade e frequencia por rota, para o sitemap.
export function sitemapHints(pathname) {
  if (pathname === '/') return { changefreq: 'weekly', priority: '1.0' };
  if (pathname === '/projetos') return { changefreq: 'weekly', priority: '0.9' };
  if (pathname.startsWith('/projeto/')) return { changefreq: 'monthly', priority: '0.8' };
  return { changefreq: 'monthly', priority: '0.7' };
}
