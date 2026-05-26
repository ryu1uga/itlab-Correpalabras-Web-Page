import './CreaCuentos.css';
import creacuentos from './logo_creacuentos.png';
import unicorn from './unicorn.png';
import venadito from './venadito.png';
import aventura from './aventura.png';
import arbol from './arbol.png';
import google_play from './googleplay.png';
import app_store from './appstore.png';

function CreaCuentos() {
  return (
    <div className="creacuentos-page">
      <div className='creacuentos-page__container1'>
        <section className='creacuentos-page__container1__about'>
          <div className='creacuentos-page__container1__about__text'>
            <h3>¿Qué es Creacuentos?</h3>
            <p>Creacuentos es un concurso dirigido a niñas y niños de todo 
            el Perú interesados en escribir e ilustrar un cuento. Su objetivo 
            es incentivar la creatividad infantil. En la primera versión del 
            concurso hubo 4 ganadores, cuyos cuentos se publicaron 
            en la app Correpalabras.</p>
          </div>
          <img src={creacuentos} alt="Creacuentos" />
        </section>
        <section className='creacuentos-page__container1__winners'>
          <h3>Cuentos ganadores</h3>
          <div className="creacuentos-page__container1__winners__stories-grid">
            <div className="creacuentos-page__container1__winners__stories-grid__story-card">
              <img src={unicorn} alt="La unicornio valiente" />
            </div>
            <div className="creacuentos-page__container1__winners__stories-grid__story-card">
              <img src={venadito} alt="El venadito y el hada" />
            </div>
            <div className="creacuentos-page__container1__winners__stories-grid__story-card">
              <img src={aventura} alt="Una aventura espacial" />
            </div>
            <div className="creacuentos-page__container1__winners__stories-grid__story-card">
              <img src={arbol} alt="El árbol presumido" />
            </div>
          </div>
        </section>
        <section className="creacuentos-page__container1__announcement">
          ¡Próximamente anunciaremos un nuevo concurso!
        </section>
      </div>

      <div className='creacuentos-page__container2'>
        <p>Descarga la aplicación</p>
        <section className='creacuentos-page__container2__download'>
          <a href="https://play.google.com/store/apps/details?id=com.itlab.idic.correpalabras" target='_blank' rel="noopener noreferrer">
            <img src={google_play} alt="Google play" />
          </a>
          <a href="https://apps.apple.com/pe/app/correpalabras/id6746462623" target='_blank' rel="noopener noreferrer">
            <img src={app_store} alt="App store" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default CreaCuentos;