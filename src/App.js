import React, {useState, useEffect, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

// componentes
import Formulario from './components/Formulario';
import LetraArtista from './components/LetraArtista';

function App() {

  // utilizar state multiple
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

// metodo para consultar la API de letras de canciones
  const fetchAPILetra = async busqueda =>  {
  const {artista, cancion} = busqueda;
  const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
  console.log(busqueda);

  // consultar la api
  const resultado = await fetch(url)
                .then(res => res.json()).catch(err=>console.log(err))
                .then(data => {
                  return data;
              });
  // almacenar el artista que se busco
  agregarArtista(artista);
 // almacenar la letra en el state
 agregarLetra(resultado.lyrics);
}

// metodo para consultar la API de información
const fetchApiInfo = async () => {
   if (artista) {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    const resultado = await fetch(url)
                .then(res => res.json()).catch(err=>console.log(err))
                    .then(data => {
                      return data;
                  });
      
      agregarInfo(resultado.artists[0]); 
      console.log(info);
      console.log(resultado);
   }
}

useEffect(() => {
  fetchApiInfo();
}, [artista])


  return (
    <Fragment>
      <Formulario
        consultarAPILetra={fetchAPILetra}
      />
      <LetraArtista
        letra={letra}
        infoArtista={info}
      />
    </Fragment>
  );
}

export default App;
