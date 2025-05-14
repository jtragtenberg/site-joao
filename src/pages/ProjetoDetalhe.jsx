import { useParams } from 'react-router-dom';
import projetos from '../data/projetos';

const ProjetoDetalhe = () => {
  const { id } = useParams();
  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) return <p>Projeto não encontrado.</p>;

  return (
    <section className="block">
      <h2>{projeto.titulo}</h2>
      <img src={projeto.imagem} alt={projeto.titulo} style={{ width: '100%', marginBottom: '1rem' }} />
      <p>{projeto.descricao}</p>
      {projeto.link && <a href={projeto.link} target="_blank" rel="noreferrer">ver mais</a>}
    </section>
  );
};

export default ProjetoDetalhe;
