import { useState, useEffect } from 'react';
import './FichasComprension.css';

function FichasComprension() {
  const [selectedCuento, setSelectedCuento] = useState('');
  const [evaluationMsgError, setEvaluationMsgError] = useState('');
  const [downloadMsgError, setDownloadMsgError] = useState('');
  const [evaluation, setEvaluation] = useState(false);
  const openEvaluation = () => {
    if(selectedCuento) {
      setEvaluation(true)
    } else {
      setDownloadMsgError('')
      setEvaluationMsgError("*Debes seleccionar un cuento")
    }
  };
  const closeEvaluation = () => setEvaluation(false);
  const [loadingEvaluation, setLoadingEvaluation] = useState(true);
  const evaluationLoaded = () => setLoadingEvaluation(false);
  const evaluationUnloaded = () => setLoadingEvaluation(true);

  const cuentos = [
    '¡APURADOS!',
    '¿DÓNDE ESTÁ MI MONEDA?',
    'EL ÁRBOL PRESUMIDO',
    'EL ARCO IRIS',
    'EL CÍRCULO',
    'EL GATO POMPÓN',
    'EL GUSANO MÁS VENENOSO',
    'EL PASEO DEL CUCHIMILCO',
    'EL PASTORCITO MENTIROSO',
    'EL TRUEQUE',
    'EL VENADITO Y EL HADA',
    'EL ZORRO Y EL GALLO',
    'LA ARAÑA BASNEMPORO',
    'LA CARRERA',
    'LA CÁSCARA DE PLÁTANO',
    'LA CIGARRA Y LA HORMIGA',
    'LA INUNDACIÓN',
    'LA LETRA H',
    'LA MASCARILLA',
    'LA UNICORNIO VALIENTE',
    'LAS PIZARRAS PARLANCHINAS',
    'LOS GLOBITS 1',
    'LOS GLOBITS 2',
    'LOS GLOBITS 3',
    'LOS GLOBITS 4',
    'LOS GLOBITS 5',
    'LOS PIRATAS',
    'LOS TRES AMIGOS',
    'MAX, EL MICROBIO 1',
    'MAX, EL MICROBIO 2',
    'PUFI QUIERE ORINAR',
    'PUÑO CONTRA PUÑO',
    'SUEÑO PROFUNDO',
    'TERROR EN CASA',
    'TIEMPO SUPLEMENTARIO',
    'UNA AVENTURA ESPACIAL'
  ];

  const formUrls = {
    'LA CÁSCARA DE PLÁTANO': 'https://docs.google.com/forms/d/1Km2Vk6vcX3HeFvebtVBZQMHJBVvacciQSy9fl5x8JGk/viewform',
    'EL ARCO IRIS': 'https://docs.google.com/forms/d/1AI46s_uLL7gg7T16ZUy7FFWXd1A8QQIhlBMhsPlaac4/viewform',
    'LA INUNDACIÓN': 'https://docs.google.com/forms/d/1V6WFT-btBfyvsLgvFA0RnW2gyL4MFAPwvbtLBIUoLdY/viewform',
    '¡APURADOS!': 'https://docs.google.com/forms/d/1QEg819APgHcUNaK-1u_mXeP0Cxs8YQyp_sEXyFXozck/viewform',
    '¿DÓNDE ESTÁ MI MONEDA?': 'https://docs.google.com/forms/d/1mCRpq9K-rgBaLUifK__1J0caz3nPK3k3j8zW6bHv29c/viewform',
    'EL ÁRBOL PRESUMIDO': 'https://docs.google.com/forms/d/1o445dGCkQaFVy_d29Ru_W6K0HftUOiO5tGGERAeHgNY/viewform',
    'EL CÍRCULO': 'https://docs.google.com/forms/d/1u_Ny0LSy2_4UY9BjWKMXr3Oi3z8cAnIWwKIhaWNrGFw/viewform',
    'EL GATO POMPÓN': 'https://docs.google.com/forms/d/1OphuYnSlu_doS5DasTl_fuZHC5PX495uTqrk23wnbdQ/viewform',
    'EL GUSANO MÁS VENENOSO': 'https://docs.google.com/forms/d/1cqvRIvL_HOsfcozbwXK1VWUkXcM-vACzECqoRg87suM/viewform',
    'EL PASEO DEL CUCHIMILCO': 'https://docs.google.com/forms/d/1MCy8GIHu0ATINzE3gXGXq93BMPZ4BDc9Fr7pgaOheVk/viewform',
    'EL PASTORCITO MENTIROSO': 'https://docs.google.com/forms/d/1NUlRMiI7zZfGXEO3pYEU1P9AY8sXGASKewmgaor6SUE/viewform',
    'EL TRUEQUE': 'https://docs.google.com/forms/d/1dA6lbB1BhlkhgCHLxTn6m15zHRomkjHS9DxZ3eQxsFI/viewform',
    'EL VENADITO Y EL HADA': 'https://docs.google.com/forms/d/10r3BDnHFUqHdLp_WYCKNmOIB_qTU_2SvN8fdblWvV2o/viewform',
    'EL ZORRO Y EL GALLO': 'https://docs.google.com/forms/d/1Z-erPApK6Iku25Zi729C2_THJa78C6HuA9Sxw95hLb0/viewform',
    'LA ARAÑA BASNEMPORO': 'https://docs.google.com/forms/d/1EyHTUIRS5qhrmroh0wEhv8lWyB4oRsznJMreBdI1ul8/viewform',
    'LA CARRERA': 'https://docs.google.com/forms/d/1kzhDfKbwj6F6rA8siPlQQxja9U1-8tdNeb7hUYPuwiA/viewform',
    'LA CIGARRA Y LA HORMIGA': 'https://docs.google.com/forms/d/1RZV9rnCdr53U1-UqRePmP0Y3psiHDThlQDOjmlrCwU4/viewform',
    'LA LETRA H': 'https://docs.google.com/forms/d/1C1SY9wDE_pVcQTSYbJO8fuF55vRN3t8dO_NERcWJwrQ/viewform',
    'LA MASCARILLA': 'https://docs.google.com/forms/d/1bUBCJdSh5ROPEC2utfrNRdvtTOYAj69_DOItSgAvY9I/viewform',
    'LA UNICORNIO VALIENTE': 'https://docs.google.com/forms/d/1Btp622CsgVdwUIyylcNUdDiyCN5VRGF_Hkidj29ZEr8/viewform',
    'LAS PIZARRAS PARLANCHINAS': 'https://docs.google.com/forms/d/1zq2JBhRBi2QAZwd-s6OIzzZy-9yYwEH-pEiAuY3laJs/viewform',
    'LOS GLOBITS 1': 'https://docs.google.com/forms/d/1T1S8Kj3zg_iJTCU-uCxBXjF2Jtb-EWjocUgvhK04oME/viewform',
    'LOS GLOBITS 2': 'https://docs.google.com/forms/d/16xr2rNVHluIa53D722Qu-nfBqUuXUKdiQHbdcI0VO48/viewform',
    'LOS GLOBITS 3': 'https://docs.google.com/forms/d/1sMxtbIyxmagPbPDeoy3AFZEiZd_pj4HwfVYdLM1x6pU/viewform',
    'LOS GLOBITS 4': 'https://docs.google.com/forms/d/1fOAj-8U4gZO-_8mPR9KKxtVrguTWlN-OXtB61zUVAvI/viewform',
    'LOS GLOBITS 5': 'https://docs.google.com/forms/d/1nbaxejiVkUtZxVch-Nq0GVumi72fSz4ertjurpMEJqw/viewform',
    'LOS PIRATAS': 'https://docs.google.com/forms/d/1VR0pDrjssQIWp2gLy6_js_wywvNNUTFOzkdS1dE3Dbc/viewform',
    'LOS TRES AMIGOS': 'https://docs.google.com/forms/d/1Hwbl1SZ4nIgdfLpgtl0OK0agnkUkE9hWCiZCi5e1hAU/viewform',
    'MAX, EL MICROBIO 1': 'https://docs.google.com/forms/d/1RJa4Xns7JNtAGDkHG0DRyUMBOgeMAvF_Wo12TMEtsXE/viewform',
    'MAX, EL MICROBIO 2': 'https://docs.google.com/forms/d/1cvAAnCebVYNZ8j4AOdRJGSFEVXyhSWsPEy09pF59fVw/viewform',
    'PUFI QUIERE ORINAR': 'https://docs.google.com/forms/d/19WRbfV_uLtJ0MgX5JpwpkU7m2igwCUrtyx7z-BajzD8/viewform',
    'PUÑO CONTRA PUÑO': 'https://docs.google.com/forms/d/1_HMFEFAfxb6uu88dgCqofDhDQY0m9tKsCT5H_reRQeM/viewform',
    'SUEÑO PROFUNDO': 'https://docs.google.com/forms/d/1IC9MQjsUYQym7WbdWz2oJKP5x7LA7tpTX2kXWlcQiOU/viewform',
    'TERROR EN CASA': 'https://docs.google.com/forms/d/10OfLrYvk8oeP6y24CWCS76oZwDFQZzVJdeb3q9QPyUw/viewform',
    'TIEMPO SUPLEMENTARIO': 'https://docs.google.com/forms/d/1VyRYBS_S2f5LhHBbmeLkKm19AIYbMaSGVjWhjWb91N0/viewform',
    'UNA AVENTURA ESPACIAL': 'https://docs.google.com/forms/d/1yGfjQ6TLPWyhi-yxmEZC9zOavOw6jsINX3m8ABO3cfk/viewform'
  };

  const downloadUrls = {
    'LA CÁSCARA DE PLÁTANO': 'https://docs.google.com/uc?export=download&id=1FnZBXQ0kuDTG82NTj3lELNVI5uSkP07F',
    'EL ARCO IRIS': 'https://docs.google.com/uc?export=download&id=19TNso2WuYZ5ankt5E5IrdNj1yFQHhCoB',
    'LA INUNDACIÓN': 'https://docs.google.com/uc?export=download&id=1QKgQU7NRpnyoNa4KAk2sRuB4Dc0wGQCz',
    '¡APURADOS!': 'https://docs.google.com/uc?export=download&id=1zU8s4G_VIlf1RgK2nKdmwrHWJQVmArsR',
    '¿DÓNDE ESTÁ MI MONEDA?': 'https://docs.google.com/uc?export=download&id=1F8Bm76kRzPZ-C0_sl9Q2JYjAfwrpYmog',
    'EL ÁRBOL PRESUMIDO': 'https://docs.google.com/uc?export=download&id=1_KMPlMlVBLmZogFohyyxnw4LRxX9bXqL',
    'EL CÍRCULO': 'https://docs.google.com/uc?export=download&id=1ywNiQlvdvmGbo4IIih02qLwsYuzcKcKu',
    'EL GATO POMPÓN': 'https://docs.google.com/uc?export=download&id=1ORApAfyCiR1QG6cx0RVfip3J8catjHCZ',
    'EL GUSANO MÁS VENENOSO': 'https://docs.google.com/uc?export=download&id=1iqNlpWVyI1gWyYe8ufRCoHnAMs9yDV54',
    'EL PASEO DEL CUCHIMILCO': 'https://docs.google.com/uc?export=download&id=1wKH2ofdiH3iRlUfEAsTETXse0_Xvcl8S',
    'EL PASTORCITO MENTIROSO': 'https://docs.google.com/uc?export=download&id=1bIc3J8_nE1IXUX0yl1F5F1KXVKdJqW2C',
    'EL TRUEQUE': 'https://docs.google.com/uc?export=download&id=1Aoyd22m7MSZTTVNhmXtnU_4qfPW2XfYY',
    'EL VENADITO Y EL HADA': 'https://docs.google.com/uc?export=download&id=19w61h8tFmagYIEkQHgU13OsyRQSF8_AZ',
    'EL ZORRO Y EL GALLO': 'https://docs.google.com/uc?export=download&id=1f2vLkUKsPaU56ptvzDCVbLue63uMAHXb',
    'LA ARAÑA BASNEMPORO': 'https://docs.google.com/uc?export=download&id=14Cmn-ErRbaKbJmJ29uHqGMBGt53emZ-8',
    'LA CARRERA': 'https://docs.google.com/uc?export=download&id=1Uly41fPqMEPXqXctCvUktQWjaidMZru4',
    'LA CIGARRA Y LA HORMIGA': 'https://docs.google.com/uc?export=download&id=1c-1o7I2dDTztGShD0yx-wV62siuQM9TW',
    'LA LETRA H': 'https://docs.google.com/uc?export=download&id=1KL310W_fnNIrVpCpDocRhw56mFhdodb1',
    'LA MASCARILLA': 'https://docs.google.com/uc?export=download&id=1fBt3uHJQWZKKBZe_BN0-kSvYstQx_3Qj',
    'LA UNICORNIO VALIENTE': 'https://docs.google.com/uc?export=download&id=1P_5STPAK-6Y4JKyvXK2yS41iiyA4p5Ke',
    'LAS PIZARRAS PARLANCHINAS': 'https://docs.google.com/uc?export=download&id=1xmnsn0NLPm2pVXhB0MwJZO5GVitqeGG8',
    'LOS GLOBITS 1': 'https://docs.google.com/uc?export=download&id=1cMFQgcZrlGh32_7qpbOt9cm5VE9v8IcY',
    'LOS GLOBITS 2': 'https://docs.google.com/uc?export=download&id=1YdUO3P7u_KoWdLxqLM4qH5s2U4gkz93-',
    'LOS GLOBITS 3': 'https://docs.google.com/uc?export=download&id=1MpFqL6zqoZ0g0wtD0eaT8jsAKobIden7',
    'LOS GLOBITS 4': 'https://docs.google.com/uc?export=download&id=1RtdFrc-VhJyl0tVhIVqojLQcsOVKNXzz',
    'LOS GLOBITS 5': 'https://docs.google.com/uc?export=download&id=1pGlCASXzHTFfQJ6N1a9oTJ7tm-jGx4yi',
    'LOS PIRATAS': 'https://docs.google.com/uc?export=download&id=1eEhN1V6UZrrtfHf_3RZ2untMtkz0V_sP',
    'LOS TRES AMIGOS': 'https://docs.google.com/uc?export=download&id=1ZnxkUJkPjm5GUEvCMmCfgQkMa-dy9Ims',
    'MAX, EL MICROBIO 1': 'https://docs.google.com/uc?export=download&id=1MVfCRDptczaa1dF2WQrjrXBV1Hff2dmN',
    'MAX, EL MICROBIO 2': 'https://docs.google.com/uc?export=download&id=1Wkql7v5720nQyYozfOGNE-VxCs023vVM',
    'PUFI QUIERE ORINAR': 'https://docs.google.com/uc?export=download&id=170RhekCkMNCP5vA6PQ_QLfI04CE6dAB7',
    'PUÑO CONTRA PUÑO': 'https://docs.google.com/uc?export=download&id=10ggjwijG2Ev582VUSlc8pVfNfnYK8s--',
    'SUEÑO PROFUNDO': 'https://docs.google.com/uc?export=download&id=14ywJBko9uXUAb53ITA2iEIZCXVvHo9sK',
    'TERROR EN CASA': 'https://docs.google.com/uc?export=download&id=1QI8ioucM2jWm6reNo9TlWM_8MjZX1ABu',
    'TIEMPO SUPLEMENTARIO': 'https://docs.google.com/uc?export=download&id=1VzCSpmwr4ByamANxJeMBzzQNwctCuT_1',
    'UNA AVENTURA ESPACIAL': 'https://docs.google.com/uc?export=download&id=18sI6aR-88nbpIlvI_SGeYYrFBtcA3gST'
  };

  const downloadEvaluation = () => {
    if(selectedCuento) {
      const link = document.createElement('a')
      link.href = downloadUrls[selectedCuento]

      link.click()
    } else {
      setEvaluationMsgError('')
      setDownloadMsgError("*Debes seleccionar un cuento");
    }
  };

  useEffect(() => {
    if (evaluation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [evaluation]);

  return (
    <div className="fichas-page">
      <h1>Fichas de Comprensión Lectora</h1>
      
      <div className="fichas-container">
        <section className="fichas-container__instructions">
          <div className="fichas-container__instructions__teachers">
            <h2>Información para docentes</h2>
            <p>
              Cada ficha contiene 8 preguntas. Las 3 primeras corresponden a
              comprensión literal y las 5 restantes a comprensión inferencial.
              Permiten ganar hasta 80 puntos. Las fichas se pueden descargar para imprimirlas y trabajarlas en clase.
            </p>
          </div>

          <div className="fichas-container__instructions__students">
            <h2>Instrucciones para alumnos</h2>
            <ol>
              <li>Lee un cuento con la app Correpalabras.</li>
              <li>Ingresa a la sección Actividades de la web.</li>
              <li>Selecciona el cuento que has leído.</li>
              <li>Acciona: Quiero Evaluarme.</li>
              <li>Responde bien y gana hasta 80 puntos.</li>
              <li>Si deseas, puedes compartir tu resultado.</li>
            </ol>
          </div>
        </section>

        <section className="fichas-container__form">
          <div className="fichas-container__form__story-selection">
            <h2>Seleccionar cuento</h2>

            <div className="fichas-container__form__story-selection__story-selector">
              <select 
                value={selectedCuento} 
                onChange={(e) => {
                  setSelectedCuento(e.target.value)
                  setEvaluationMsgError('')
                  setDownloadMsgError('')
                }}
              >
                <option value="">Selecciona un cuento</option>

                {cuentos.map((cuento) => (
                  <option key={cuento} value={cuento}>
                    {cuento}
                  </option>
                ))}
              </select>
            </div>

            <p>Una vez seleccionado, aquí aparecerá el formulario de evaluación.</p>
          </div>

          <div className="fichas-container__form__action-buttons">
            {evaluationMsgError && (
              <p>{evaluationMsgError}</p>
            )}
            <button onClick={openEvaluation}>
              QUIERO EVALUARME
            </button>

            {downloadMsgError && (
              <p>{downloadMsgError}</p>
            )}
            <button onClick={downloadEvaluation}>
              DESCARGAR FICHA
            </button>
          </div>

          {evaluation && (
            <div className="fichas-container__form__evaluation">
              <div
                className="fichas-container__form__evaluation__content"
                onClick={(e) => e.stopPropagation()}
              >
                {loadingEvaluation &&
                  <p>Cargando...</p>
                }
                <iframe
                  src={formUrls[selectedCuento]}
                  title="Formulario de evaluación"
                  width="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  onLoad={evaluationLoaded}
                />
                <button onClick={() => {
                  closeEvaluation()
                  evaluationUnloaded()
                }}>
                  SALIR
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default FichasComprension;