import './AcercaDe.css';
import app from './app.png';
import premio from './premio.png';
import rpp from './rpp.png';
import canal_n from './canal_n.png';
import exitosa from './exitosa.png';
import andina from './andina.png';

function AcercaDe() {

  const mediaLinks = [
    {
      name: 'RPP',
      imagen: rpp,
      url: 'https://www.youtube.com/embed/DZ34q3qtLJc',
      title: 'Correpalabras: App motiva la lectura'
    },
    {
      name: 'Canal N',
      imagen: canal_n,
      url: 'https://x.com/canalN_/status/1289963385073700865',
      title: 'Nueva app promueve la lectura'
    },
    {
      name: 'Exitosa',
      imagen: exitosa,
      url: 'https://www.youtube.com/embed/c7ZjR5iB0Jk',
      title: 'Correpalabras: Peruanos desarrollan app de lectura'
    },
    {
      name: 'Andina',
      imagen: andina,
      url: 'https://www.youtube.com/embed/2D6crfBxZrA',
      title: 'Correpalabras: app en español y quechua'
    }
  ];

  return (
    <div className="acercade-page">
      <div className='acercade-content-container'>
        <div className='parrafos'>
          <h3>Presentación</h3>
          <div className='parrafo-texto'>
            <p>Correpalabras es el resultado de un proyecto de investigación e innovación
            desarrollado con el apoyo del Instituto de Investigación Científica (IDIC) de la
            Universidad de Lima. Es un trabajo colaborativo entre docentes y estudiantes de la
            Facultad de Comunicación y el Laboratorio de Aprendizaje en Tecnologías de la
            Información (ITLab) de la Carrera de Ingeniería de Sistemas. Consiste en una
            aplicación digital que busca promover la lectura infantil en el hogar aprovechando los
            teléfonos celulares de los padres de familia. Se dirige principalmente a niñas y niños
            de segundo, tercero y cuarto grado de primaria.</p>
          </div>
          
          <h3>Biblioteca de cuentos</h3>
          <div className='parrafo-texto'>
            <p>Correpalabras ofrece cuentos cortos (50 a 300 palabras) que se
            publican periódicamente. Incluye relatos originales y adaptaciones
            de cuentos clásicos o regionales. También hay cuentos creados por
            niñas o niños. Todos los relatos se ilustran con estilos gráficos
            diferentes y atractivos. Algunos cuentos poseen versiones en quechua e inglés.</p>
          </div>
        </div>
        <div className='imagenes'>
          <img src={app} alt="app-sim"></img>
        </div>
      </div>
      <div className="ventajas-tecnicas">
        <h3>Ventajas técnicas</h3>
        <div className='ventajas-texto'>
          <p>Para leer los cuentos descargados no se necesita conexión a internet.</p>
          <p>Un mismo teléfono puede ser aprovechado hasta por cinco usuarios.</p>
          <p>Los cuentos ya leídos se pueden eliminar fácilmente del celular para liberar espacio en la memoria.</p>
          <p>Funciona en teléfonos o tabletas con sistema Android y iOS.</p>
        </div>
      </div>
      <div className="noticia-wow">
        <div className="noticia-content">
          <div className="noticia-imagen">
            <img src={premio} alt="premio"/>
          </div>
          <h3>En el año 2020, el Proyecto Correpalabras ganó el premio ¡Acción ya! de Espacio Fundación Telefónica</h3>
        </div>
      </div>

      <div className="medios">
        <h3>Así informaron los medios</h3>
        <div className="medios-lista">
          {mediaLinks.map((media, index) => (
            <div key={index} className="medio-item">
              <div className="medio-imagen">
                <img src={media.imagen} alt={media.name} className={media.name}/>
              </div>
              <div className="medio-texto">
                <p>{media.title}</p>
                <a href={media.url} target="_blank" rel="noopener noreferrer">
                  VER MÁS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcercaDe;