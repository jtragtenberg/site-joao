// Reconstruido a partir do build publicado em gh-pages (assets/index-DMvVWWW3.js).
import { useParams } from 'react-router-dom';
import projetos from '../data/projetos.jsx';

const ProjetoDetalhe = () => {
  const { id } = useParams();
  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) return <div>Projeto não encontrado</div>;

  return (
    <section className="block projeto-detalhe">
      <h2>{projeto.titulo}</h2>

      {projeto.repoLinks &&
        projeto.repoLinks.map((repo, i) => (
          <a
            key={i}
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#111',
              fontWeight: 'bold',
              marginBottom: '1rem',
              marginRight: '1rem',
            }}
          >
            <img src="/images/icons/github.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
            {repo.replace('https://github.com/', '')}
          </a>
        ))}

      {projeto.videos &&
        projeto.videos.map((video, i) => (
          <div
            key={i}
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '1rem' }}
          >
            <iframe
              src={video}
              title={`Vídeo ${i + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        ))}

      {projeto.imagens &&
        projeto.imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${projeto.titulo} imagem ${i + 1}`}
            style={{ width: '100%', maxWidth: '100%', marginBottom: '1rem' }}
          />
        ))}

      {projeto.links &&
        projeto.links.map((link, i) => (
          <p key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </p>
        ))}

      {projeto.conteudoAdicional && (
        <div className="conteudo-adicional">{projeto.conteudoAdicional}</div>
      )}
    </section>
  );
};

export default ProjetoDetalhe;
