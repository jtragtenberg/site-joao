// Pos-build: transforma o SPA de um arquivo em um arquivo HTML por rota.
//
// Sem isso, o GitHub Pages nao encontra arquivo em /publicacoes, responde 404 e
// serve o 404.html; o app conserta a rota no navegador, mas o Google ve o 404 e
// descarta a URL. Aqui cada rota ganha arquivo proprio (200) e <head> proprio.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const { render, todasAsRotas, metaDaRota, sitemapHints, SITE } = await import(
  '../dist-ssr/entry-server.js'
);

const dist = 'dist';
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escapar = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Troca o valor de uma tag existente no template, exigindo que ela exista:
// se o index.html mudar de forma e a tag sumir, o build falha em vez de
// publicar paginas com metadados errados.
function trocar(html, regex, substituto, rotulo) {
  if (!regex.test(html)) throw new Error(`prerender: nao achei ${rotulo} no index.html`);
  return html.replace(regex, substituto);
}

function paginaDaRota(rota) {
  const meta = metaDaRota(rota);
  let html = template;

  html = trocar(html, /<title>[\s\S]*?<\/title>/, `<title>${escapar(meta.title)}</title>`, '<title>');
  html = trocar(
    html,
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${escapar(meta.description)}" />`,
    'meta description'
  );
  html = trocar(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapar(meta.canonical)}" />`,
    'link canonical'
  );
  html = trocar(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapar(meta.title)}" />`,
    'og:title'
  );
  html = trocar(
    html,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapar(meta.description)}" />`,
    'og:description'
  );
  html = trocar(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapar(meta.canonical)}" />`,
    'og:url'
  );
  html = trocar(
    html,
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${escapar(meta.imagem)}" />`,
    'og:image'
  );
  html = trocar(
    html,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapar(meta.title)}" />`,
    'twitter:title'
  );
  html = trocar(
    html,
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapar(meta.description)}" />`,
    'twitter:description'
  );
  html = trocar(
    html,
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${escapar(meta.imagem)}" />`,
    'twitter:image'
  );

  if (meta.noindex) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex" />\n</head>');
  }

  const corpo = render(rota);
  html = trocar(html, /<div id="root"><\/div>/, `<div id="root">${corpo}</div>`, 'div#root');

  return html;
}

// Arquivo plano por rota: o Pages serve /publicacoes a partir de publicacoes.html
const arquivoDaRota = (rota) => (rota === '/' ? 'index.html' : `${rota.slice(1)}.html`);

const rotas = todasAsRotas();
for (const rota of rotas) {
  const destino = join(dist, arquivoDaRota(rota));
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, paginaDaRota(rota));
}

// 404 de verdade: pagina propria com noindex, nao mais uma copia da home.
writeFileSync(join(dist, '404.html'), paginaDaRota('/__nao-encontrada__'));

// Sitemap gerado das mesmas rotas, para nunca mais divergir do site.
const hoje = new Date().toISOString().slice(0, 10);
const urls = rotas
  .map((rota) => {
    const { changefreq, priority } = sitemapHints(rota);
    return `  <url>
    <loc>${SITE.origin}${rota}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);

console.log(`prerender: ${rotas.length} rotas + 404.html + sitemap.xml`);
