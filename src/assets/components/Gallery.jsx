import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = ({ items }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [rotations, setRotations] = useState([]);
    const [tackColors, setTackColors] = useState([]);
    const [loaded, setLoaded] = useState(Array(items.length).fill(false));
    const [loadedModal, setLoadedModal] = useState(false); // Nuevo estado para el modal

    const thumbtackColors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B',
        '#FF9F1C', '#A37AFC', '#70C1B3', '#F25F5C',
        '#B2DBBF', '#FFD166'
    ];

    useEffect(() => {
        setRotations(items.map(() => Math.floor(Math.random() * 10) - 5));
        setTackColors(items.map(() => thumbtackColors[Math.floor(Math.random() * thumbtackColors.length)]));
    }, [items]);

    // Resetear loadedModal cuando cambia la imagen seleccionada
    useEffect(() => {
        setLoadedModal(false);
    }, [selectedCard]);

    const handleImageLoad = (index) => {
        setLoaded(prev => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    const handleCardClick = (index) => {
        if (loaded[index]) {
            setSelectedCard(index);
        }
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="gallery-container">
            {items.map((item, index) => {
                const rotation = rotations[index] || 0;
                const hoverRotation = rotation >= 0 ? rotation - 1 : rotation + 1;
                const tackColor = tackColors[index] || thumbtackColors[0];

                return (
                    <React.Fragment key={index}>
                        <div
                            className="polaroid-card"
                            style={{
                                '--initial-rotation': `${rotation}deg`,
                                '--hover-rotation': `${hoverRotation}deg`,
                                cursor: loaded[index] ? 'pointer' : 'default'
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <div
                                className="thumbtack top"
                                style={{
                                    '--thumbtack-color': tackColor,
                                    '--thumbtack-shadow': `${tackColor}66`
                                }}
                            ></div>

                            <div className="polaroid-image-container">
                                {!loaded[index] && (
                                    <div className="image-placeholder"></div>
                                )}
                                <img
                                    src={item.src}
                                    alt={item.alt || 'Foto Polaroid'}
                                    className={`polaroid-image ${loaded[index] ? 'loaded' : 'loading'}`}
                                    onLoad={() => handleImageLoad(index)}
                                    style={{ display: loaded[index] ? 'block' : 'none' }}
                                />
                            </div>
                            <div className="polaroid-caption">
                                <span className="polaroid-date">
                                    {item.date || <span className="text-placeholder" style={{ width: '80px' }}></span>}
                                </span>
                                <h3 className="polaroid-title">
                                    {item.description || <span className="text-placeholder" style={{ width: '100%' }}></span>}
                                </h3>
                            </div>
                        </div>

                        {selectedCard === index && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                    <button className="close-button" onClick={closeModal}>×</button>
                                    <div className="modal-image-container">
                                        {!loadedModal && (
                                            <div className="modal-image-placeholder"></div>
                                        )}
                                        <img
                                            src={item.src}
                                            alt={item.alt || 'Foto ampliada'}
                                            className={`modal-image ${loadedModal ? 'loaded' : 'loading'}`}
                                            onLoad={() => setLoadedModal(true)}
                                            style={{ display: loadedModal ? 'block' : 'none' }}
                                        />
                                    </div>
                                    <div className="modal-caption">
                                        <span className="modal-date">{item.date || 'Jun 2023'}</span>
                                        <h3 className="modal-title">{item.description}</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Gallery;