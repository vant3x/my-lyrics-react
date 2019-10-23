import React, {Fragment} from 'react';

function Artista (props) {
    if (Object.keys(props.info).length === 0) return null;
    return(
        <Fragment>
            <div className="card border-light animated fadeInDown">
                <div className="card-header bg-primary text-light font-weight-bold">
                    Información Artista
                </div>
                <div className="card-body">
                    <img  className="text-center" src={props.info.strArtistThumb} alt="Logo artista"/>
                    <h4 className="card-text"><span className="text-info">Género:</span> {props.info.strGenre}</h4>
                    <h4><span className="text-info">Pais:</span> {props.info.strCountry}</h4>
                    <h2 className="card-text text-center">Biografía</h2>
                    <p className="card-text gray-text-d">{props.info.strBiographyES || props.info.strBiographyEN}</p>
                    <p className="card-text text-center">
                        <a href={`https://${props.info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>

                        <a href={`https://${props.info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a href={`https://${props.info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Artista;