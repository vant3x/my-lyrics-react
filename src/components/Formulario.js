import React, {useState, useEffect, Fragment} from 'react';

function Formulario(props) {

    const [busqueda, agregarBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    // funcion actualizar el state de los inputs
    const actualizarState  = e => {
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
         })

    }

    // enviar form
    const enviarInfo = e => {
        e.preventDefault();
        props.consultarAPILetra(busqueda);
    }


    return(
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit={enviarInfo}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">My Lyrics - Busca la letra de tus canciones </legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        
                                        onChange={actualizarState}
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-danger float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
}

export default Formulario;