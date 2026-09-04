// Entrada usada apenas no build, para pre-renderizar cada rota em HTML estatico.
// Nao vai para o bundle do navegador.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App.jsx';

export function render(url) {
  return renderToString(
    <StaticRouter location={url} basename="/">
      <AppShell />
    </StaticRouter>
  );
}

export { todasAsRotas, metaDaRota, sitemapHints, SITE } from './seo.js';
