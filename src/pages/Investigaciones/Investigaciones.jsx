import './Investigaciones.css';
import cover1 from './cover-alabe.png';
import cover2 from './cover-ocnos.jpg';

function Investigaciones() {
    return (
      <div className="investigaciones-page">
        <div className="investigacion-container">
          <div className="seccion-investigacion">
            <h2>¿Qué investigaciones respaldan a Correpalabras?</h2>
            <div className="investigacion-contenido">
              <div className="texto-investigacion">
                <p>
                  La aplicación Correpalabras ha sido validada en dos estudios
                  experimentales. El prototipo inicial se validó con una muestra de 36
                  alumnos de segundo grado de educación primaria. Luego de ello, se
                  hicieron mejoras en el diseño y se implementó una prueba piloto
                  focalizada en 150 colegios públicos. Para ello, se contó con el apoyo
                  de la Dirección Regional de Educación de Lima-Provincias.
                </p>
              </div>
            </div>
          </div>
  
          <div className="seccion-investigacion">
            <h2>¿Cuáles fueron sus principales resultados?</h2>
            <div className="investigacion-contenido">
              <div className="texto-investigacion">
                <p>
                  Las investigaciones realizadas demuestran que la app Correpalabras
                  produce un impacto muy positivo en la atención y comprensión
                  lectora infantil. Permite que cada niña o niño pueda leer a su propio
                  ritmo. Además, ayuda a consolidar las competencias en lectura en
                  2.°, 3.° y 4.° grado de primaria. Por eso, despierta un alto nivel de
                  interés y aceptación en alumnos, docentes y padres de familia.
                </p>
              </div>
            </div>
          </div>
  
          <div className="seccion-articulos">
            <h2>Artículos científicos en revistas internacionales</h2>
            <div className="articulos-grid">
              <div className="articulo-card">
                <div className="articulo-card__image">
                  <img src={cover2} alt="Revista OCNOS" />
                </div>
                <div className="articulo-contenido">
                  <h3>OCNOS, revista de estudios sobre lectura.</h3>
                  <h3 id='tit-art'>"Diseño y evaluación de un nuevo formato digital de lectura de cuentos ilustrados: Correpalabras." (*)</h3>
                  <a href="https://doi.org/10.18239/ocnos_2019.18.3.2008" target="_blank" rel="noopener noreferrer">
                    Ver artículo
                  </a>
                  <p className="nota-premio">
                    <strong>(*) Artículo ganador del segundo puesto en el premio a la investigación en el ámbito del libro y la lectura del Ministerio de Cultura del Perú, el año 2023.</strong>
                  </p>
                </div>
              </div>
  
              <div className="articulo-card">
                <div className="articulo-card__image">
                  <img src={cover1} alt="Revista ÁLABE" />
                </div>
                <div className="articulo-contenido">
                  <h3>ÁLABE, revista de la red de universidades lectoras.</h3>
                  <h3 id='tit-art'>"Diseño de cuentos ilustrados y atención lectora infantil: el caso de la aplicación y biblioteca digital Correpalabras."</h3>
                  <a href="https://doi.org/10.25115/alabe26.7787" target="_blank" rel="noopener noreferrer">
                    Ver artículo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Investigaciones;