// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './App.css';
import './colors.css';
import { useMemo } from 'react';
import projetos from './data/projetos';
import ProjetoDetalhe from './pages/ProjetoDetalhe';

const Sobre = () => (
  <section className="block">
    <h2>SOBRE</h2>
    <p>João Tragtenberg é designer de instrumentos digitais de música e dança, artista e pesquisador em interação humano-computador.</p>
  </section>
);

const Projetos = () => (
  <section className="block">
    <h2>PROJETOS</h2>
    <Masonry 
    breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
    className="grid-masonry"
    columnClassName="grid-column"
    >
{projetos.map((p) => {
  const randomAngle = `${(Math.random() * 2 - 1).toFixed(2)}deg`;

  return (
    <div
      key={p.id}
      className="grid-item"
      style={{ transform: `rotate(${randomAngle})` }}
    >
      <Link to={`/projeto/${p.id}`}>
        <div className="image-wrapper">
          <img src={p.imagem} alt={p.titulo} />
          {/*{p.ano && <span className="watermark">{p.ano}</span>}*/}
        </div>
        <h3>{p.titulo}</h3>
      </Link>
      <p>{p.resumo}</p>
    </div>
  );
})}
    </Masonry>
  </section>
);

const Publicacoes = () => (
  <section className="block">
    <h2>PUBLICAÇÕES</h2>
    <ul className="pub-list">
      <li>
        TRAGTENBERG, J.; CALEGARIO, F.; WANDERLEY, M.; CAVALCANTI, V. Designing DMIs with(in) a Music Culture: A Participatory Design Process with the Xambá Quilombola Community. In: NIME 2024 – International Conference on New Interfaces for Musical Expression, Utrecht, Holanda. 2024. DOI: <a href="https://doi.org/10.5281/zenodo.13904882" target="_blank">10.5281/zenodo.13904882</a>
      </li>
      <li>
        TRAGTENBERG, J.; ALBUQUERQUE, G.; CALEGARIO, F. Gambiarra and Techno-Vernacular Creativity in NIME Research. In: NIME 2021 – International Conference on New Interfaces for Musical Expression, Shanghai, China. 2021. DOI: <a href="https://doi.org/10.21428/92fbeb44.98354a15" target="_blank">10.21428/92fbeb44.98354a15</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F.; FRISSON, C.; MENESES, E.; MALLOCH, J.; CUSSON, V.; WANDERLEY, M. Documentation and Replicability in the NIME Community. In: NIME 2021 – International Conference on New Interfaces for Musical Expression, Shanghai, China. 2021. DOI: <a href="https://doi.org/10.21428/92fbeb44.dc50e34d" target="_blank">10.21428/92fbeb44.dc50e34d</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F.; CABRAL, G.; RAMALHO, G. TumTá and Pisada: Digital Dance and Music Instruments Inspired by Popular Brazilian Traditions. Per Musi, n. 40, 2021. DOI: <a href="https://doi.org/10.35699/2317-6377.2020.26151" target="_blank">10.35699/2317-6377.2020.26151</a>
      </li>
      <li>
        TRAGTENBERG, J. et al. Probatio 1.0: collaborative development of a toolkit for functional DMI prototypes. In: NIME 2020 – International Conference on New Interfaces for Musical Expression, Birmingham, UK. 2020. DOI: <a href="https://doi.org/10.5281/zenodo.4813363" target="_blank">10.5281/zenodo.4813363</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F. et al. Open Source DMIs: Towards a Replication Certification for Online Shared Projects of Digital Musical Instruments. In: HCII 2020 – HCI International. Springer. 2020. DOI: <a href="https://www.springer.com/gp/book/9783030601133" target="_blank">9783030601133</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F.; CABRAL, G.; RAMALHO, G. Batebit Controller: Popularizing Digital Musical Instruments’ Technical Development Process. In: SBCM 2019 – Brazilian Symposium on Computer Music, São João del-Rei, MG, Brasil. 2019. DOI: <a href="https://doi.org/10.5753/sbcm.2019.10453" target="_blank">10.5753/sbcm.2019.10453</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F.; CABRAL, G.; RAMALHO, G. TumTá and Pisada: Two Foot-controlled Digital Dance and Music Instruments Inspired by Popular Brazilian Traditions. In: SBCM 2019 – Brazilian Symposium on Computer Music. 2019. DOI: <a href="https://doi.org/10.5753/sbcm.2019.10426" target="_blank">10.5753/sbcm.2019.10426</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F. Gira. In: NIME 2019 – International Conference on New Interfaces for Musical Expression, Porto Alegre, RS, Brasil. <a href="http://www.nime.org/proceedings/2019/nime2019_music006.pdf" target="_blank">PDF</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F.; CABRAL, G.; RAMALHO, G. Towards the Concept of “Digital Dance and Music Instrument”. In: NIME 2020. DOI: <a href="https://doi.org/10.5281/zenodo.3672878" target="_blank">10.5281/zenodo.3672878</a>
      </li>
      <li>
        TRAGTENBERG, J. et al. A Internet das Coisas na Indústria. Instituto SENAI de Inovação para TIC. <a href="http://bit.ly/WP-IoT-01" target="_blank">White Paper</a>
      </li>
      <li>
        TRAGTENBERG, J.; CALEGARIO, F. Caminhos da Inovação para a Indústria da Música. Instituto SENAI de Inovação para TIC. 2019 <a href="https://www.dropbox.com/s/5g09nicxbptimy7/WP-MUS-01.pdf?dl=0" target="_blank">White Paper</a>
      </li>
      <li>
        TRAGTENBERG, J.; BARBOSA, J.; CALEGARIO, F.; CABRAL, G.; RAMALHO, G.; WANDERLEY, M. Designing DMIs for Popular Music in the Brazilian Northeast: Lessons Learned. In: NIME 2018. DOI: <a href="https://doi.org/10.5281/zenodo.1179008" target="_blank">10.5281/zenodo.1179008</a>
      </li>
    </ul>
  </section>
);

const Contato = () => (
  <section className="block">
    <h2>CONTATO</h2>
    <p>contato: tragtenberg@gmail.com</p>
    <p>instagram: https://www.instagram.com/jtragtenberg</p>
  </section>
);

const getRandomRotation = () => {
  return `${(Math.random() * 10 - 5).toFixed(2)}deg`;
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navLinks = [
  { to: '/', label: 'SOBRE' },
  { to: '/projetos', label: 'PROJETOS' },
  { to: '/publicacoes', label: 'PUBLICAÇÕES' },
  { to: '/contato', label: 'CONTATO' }
];

// gera rotação fixa por link
const navAngles = useMemo(() => {
  return navLinks.reduce((acc, link) => {
    acc[link.to] = `${(Math.random() * 5 - 2.5).toFixed(2)}deg`;
    return acc;
  }, {});
}, []);

  return (
    <Router>
      <div className="app poster-style">
        <aside className={`sidebar fixed-sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="title">JOÃO TRAGTENBERG</div>
          <nav className="nav">
  {navLinks.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      style={{ display: 'block', transform: `rotate(${navAngles[link.to]})` }}
      className="nav-link"
    >
      {link.label}
    </Link>
  ))}
</nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </aside>

        <main className="container">
          <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/publicacoes" element={<Publicacoes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projeto/:id" element={<ProjetoDetalhe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
