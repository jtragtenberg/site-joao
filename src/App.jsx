// Reconstruido a partir do build publicado em gh-pages (assets/index-DMvVWWW3.js).
import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import projetos from './data/projetos.jsx';
import ProjetoDetalhe from './pages/ProjetoDetalhe.jsx';
import './App.css';
import './colors.css';

const INSTAGRAM = 'jtragtenberg';
const LINKEDIN = 'joaotragtenberg';
const GITHUB = 'jtragtenberg';

const Sobre = () => (
  <section className="block">
    <h2>JOÃO TRAGTENBERG</h2>
    <img src="/images/retrato.jpg" alt="Retrato de João Tragtenberg" className="sobre-img" />
    <p>Sou desenvolvedor, artista, designer, educador e pesquisador baseado em Recife/PE. Trabalho na interseção entre design, música, tecnologias digitais e cultura popular brasileira. Desenvolvo instrumentos musicais digitais para música e para a dança. Acredito na potência da coletividade e da cultura popular como forças para a criação de outros designs e outras tecnologias digitais.</p>
    <p>Atualmente sou doutorando em Design pela UFPE, onde pesquiso junto à comunidade da Xambá (Olinda/PE) o design participativo de instrumentos musicais digitais enraizados na cultura local, com quem fundei o Bongarbit — Laboratório de Tecnologias Orgânicas e Digitais da Xambá. Também sou mestre em Ciência da Computação com foco em mídia e interação e minha graduação foi em Física (UFSC). </p>
    <p>Já atuei como pesquisador industrial no Instituto SENAI de Inovação em TICs, onde iniciei o CIIMUS — núcleo de Criatividade e Inovação para a Indústria da Música. Também sou fundador do Batebit Artesania Digital, espaço de criação de tecnologias digitais para arte com um foco em contribuir para a cena musical de Recife. </p>
    <p>Tenho apresentado meus trabalhos artísticos em festivais como o Ars Electronica (Áustria/Romênia), no Carnaval do Recife (junto ao Quinteto Violado), e trabalhos de pesquisa na conferência internacional NIME — New Interfaces for Musical Expression, onde fui premiado com o Pamela Z Award for Innovation em 2021, 2022 e 2026, e no SBCM, onde recebi o prêmio de “Best Paper” na edição de 2019.</p>
    <p>Sigo um caminho que transita entre o desenvolvimento de software, de hardware, design participativo, fabricação digital, pesquisa, educação, performance e experimentação para expandir nossos corpos e nossos sons, em busca de tecnologias digitais enraizadas nas nossas identidades culturais.</p>
    <p>Tu também pode ficar sabendo no que e onde estou trabalhando nessas plataformas:</p>
    <div className="contato-redes">
      <a href={`https://www.instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="social-button">
        <img src="/images/icons/instagram.png" alt="Instagram" className="social-icon" loading="lazy" />
        @{INSTAGRAM}
      </a>
      <a href={`https://www.linkedin.com/in/${LINKEDIN}`} target="_blank" rel="noopener noreferrer" className="social-button">
        <img src="/images/icons/linkedin.png" alt="LinkedIn" className="social-icon" loading="lazy" />
        @{LINKEDIN}
      </a>
      <a href={`https://github.com/${GITHUB}`} target="_blank" rel="noopener noreferrer" className="social-button">
        <img src="/images/icons/github.png" alt="GitHub" className="social-icon" loading="lazy" />
        @{GITHUB}
      </a>
    </div>
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
                <img src={p.imagemCard} alt={p.titulo} loading="lazy" />
              </div>
              <h3>{p.titulo}</h3>
              <h4>{p.ano ? `${p.ano}` : ''}</h4>
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
        TRAGTENBERG, J.; CALEGARIO, F.; MIRANDA, E. R. Giromin Residency Report: Creative Exploration by Musicians and Dancers from Frevo and Afro-Brazilian traditions. In: NIME 2026 – International Conference on New Interfaces for Musical Expression. 2026. DOI: <a href="https://doi.org/10.5281/zenodo.20784182" target="_blank">10.5281/zenodo.20784182</a>
      </li>
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

// Email guardado em base64 para dificultar coleta automatica.
const EMAIL_B64 = 'dHJhZ3RlbmJlcmdAZ21haWwuY29t';
const email = atob(EMAIL_B64);

const Contato = () => (
  <section className="block contato">
    <h2>Contato </h2>
    <p>Se tu gostou do meu trabalho, quer conhecer meus instrumentos, me contratar para algum projeto, ou apenas conversar sobre algum interesse em comum, entra em contato comigo por email:</p>
    <div className="contato-redes">
      <a href={`mailto:${email}`} className="social-button">
        <img src="/images/icons/email.png" alt="Email" className="social-icon" loading="lazy" />
        {email}
      </a>
    </div>
    <p></p>
    <p></p>
  </section>
);

const NaoEncontrada = () => (
  <section className="block">
    <h2>PÁGINA NÃO ENCONTRADA</h2>
    <p>Esse endereço não existe por aqui. Talvez o link esteja quebrado ou a página tenha mudado de lugar.</p>
    <p><Link to="/">Voltar para a página inicial</Link></p>
  </section>
);

const Layout = ({ navLinks, navAngles, menuOpen, toggleMenu }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app poster-style">
      <aside className={`sidebar fixed-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="title-bar">
          <div className="title-text">
            <Link to="/" className={`title-link ${isHome ? 'rosa' : 'preto'}`}>
              <div>JOÃO</div>
              <div>TRAGTENBERG</div>
            </Link>
          </div>
          {isHome && (
            <Link to="/contato" className="contato-link">
              <img src="/images/beija-fulo.png" alt="Beija-flor" className="beija-icon" loading="lazy" />
            </Link>
          )}
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ display: 'flex', alignItems: 'center', transform: `rotate(${navAngles[link.to]})` }}
              className={`nav-link ${location.pathname === link.to ? 'ativo' : ''}`}
            >
              {location.pathname === link.to && (
                <img src="/images/beija-fulo.png" alt="Beija-flor" className="beija-flor-menu" loading="lazy" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </aside>
      <main className="container">
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projeto/:id" element={<ProjetoDetalhe />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </div>
  );
};

// Arvore de rotas sem roteador: o navegador a embrulha em BrowserRouter (abaixo)
// e a pre-renderizacao do build em StaticRouter (src/entry-server.jsx).
export const AppShell = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: '/', label: 'SOBRE' },
    { to: '/projetos', label: 'PROJETOS' },
    { to: '/publicacoes', label: 'PUBLICAÇÕES' },
    { to: '/contato', label: 'CONTATO' },
  ];

  // Angulos sorteados uma vez por sessao, para o menu ficar levemente torto.
  const navAngles = useMemo(
    () =>
      navLinks.reduce((acc, link) => {
        acc[link.to] = `${(Math.random() * 5 - 2.5).toFixed(2)}deg`;
        return acc;
      }, {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Layout
      navLinks={navLinks}
      navAngles={navAngles}
      menuOpen={menuOpen}
      toggleMenu={toggleMenu}
    />
  );
};

const App = () => (
  <BrowserRouter basename="/">
    <AppShell />
  </BrowserRouter>
);

export default App;
