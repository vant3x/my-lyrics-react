import React, {useState, Fragment} from 'react';
import Cancion from './Cancion';
import Artista from './Artista';

function LetraArtista (props) {
    return(
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Artista 
                            info={props.infoArtista}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Cancion
                            letra={props.letra}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LetraArtista;