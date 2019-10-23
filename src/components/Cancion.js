import React, {Fragment} from 'react';

function Cancion(props) {
    if (props.letra.length === 0) return null;
    return(
        <Fragment>
            <div  className="animated fadeInDown"  >
                <h2>Letra Canción</h2>
                <p className="letra">
                    {props.letra}
                </p>
                <hr/>
            </div>
        </Fragment>
    );
}

export default Cancion;