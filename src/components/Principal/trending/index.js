import React, {useContext, useState} from 'react';
import { TrendingsContext } from '../../../context/TrendingsContext';


const ApartadoTrending = () => {
    // Extraer valores del context
    const { trendings } = useContext(TrendingsContext);

    console.log(trendings);
    return (   
        <>
        <div className="top-semanal">
            <h1>Top semanal</h1>
        </div>
        <div className="box1">
        <div className="slide-img">
            <img src={trendings[0].strTrackThumb} alt=""/>
            <div className="overlay">
                <a href="#" className="escuchar-btn">Escuchar</a>
            </div>
        </div>
        <div className="detail-box">
        <div className="type">
            <a href="#">{trendings[0].strTrack}</a>
            <span>{trendings[0].strArtist}</span>
        </div>
        </div>
    </div>
    <div className="box2">
        <div className="slide-img">
            <img src={trendings[1].strTrackThumb} alt=""/>
            <div className="overlay">
                <a href="#" className="escuchar-btn">Escuchar</a>
            </div>
        </div>
        <div className="detail-box">
        <div className="type">
            <a href="#">{trendings[1].strTrack}</a>
            <span>{trendings[1].strArtist}</span>
        </div>
        </div>
    </div>
    <div className="box3">
        <div className="slide-img">
            <img src={trendings[5].strTrackThumb} alt=""/>
            <div className="overlay">
                <a href="#" className="escuchar-btn">Escuchar</a>
            </div>
        </div>
        <div className="detail-box">
        <div className="type">
            <a href="#">{trendings[5].strTrack}</a>
            <span>{trendings[5].strArtist}</span>
        </div>
        </div>
    </div>
    <div className="box4">
        <div className="slide-img">
            <img src={trendings[4].strTrackThumb} alt=""/>
            <div className="overlay">
                <a href="#" className="escuchar-btn">Escuchar</a>
            </div>
        </div>
        <div className="detail-box">
        <div className="type">
            <a href="#">{trendings[4].strTrack}</a>
            <span>{trendings[4].strArtist}</span>
        </div>
        </div>
    </div>
    </>



    )
}
 
export default ApartadoTrending;