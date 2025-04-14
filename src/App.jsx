// import React from 'react';
// import ImageGallery from './assets/components/Gallery';
// import ErrorBoundary from './assets/components/ErrorBoundary';

// // Importar las imágenes manualmente desde tu carpeta de assets
// import img1 from './assets/images/imagen1.jpg';
// import img2 from './assets/images/imagen2.jpg';
// import img3 from './assets/images/imagen3.jpg';
// import img4 from './assets/images/imagen4.jpg';
// import img5 from './assets/images/imagen5.jpg';
// import img6 from './assets/images/imagen6.jpg';
// import img7 from './assets/images/imagen7.jpg';
// import img8 from './assets/images/imagen8.jpg';
// import img9 from './assets/images/imagen9.jpg';
// import img10 from './assets/images/imagen10.jpg';
// import img11 from './assets/images/imagen11.jpg';

// const App = () => {
//   const sampleImages = [
//     { src: img1, alt: "Descripción 1", date: "Ene 2025" },
//     { src: img2, alt: "Descripción 2", date: "Jun 2025" },
//     { src: img3, alt: "Descripción 3", date: "Jul 2025" },
//     { src: img4, alt: "Descripción 4", date: "ene 2025" },
//     { src: img5, alt: "Descripción 5", date: "ene 2025" },
//     { src: img6, alt: "Descripción 6", date: "ene 2025" },
//     { src: img7, alt: "Descripción 7", date: "ene 2025" },
//     { src: img8, alt: "Descripción 8", date: "ene 2025" },
//     { src: img9, alt: "Descripción 9", date: "ene 2025" },
//     { src: img10, alt: "Descripción 10", date: "ene 2025" },
//     { src: img11, alt: "Descripción 11", date: "ene 2025" },
//   ];

//   const items = sampleImages.map((img, index) => ({
//     src: img.src,
//     alt: img.alt,
//     date: img.date,
//     title: `Imagen ${index + 1}`,
//     description: `Descripción de la imagen ${index + 1}`,
//   }));

//   return (
//     <div className="app">
//       <ErrorBoundary>
//         <ImageGallery items={items} />
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import ImageGallery from './assets/components/Gallery';
import Header from './assets/components/Header';
import ErrorBoundary from './assets/components/ErrorBoundary';

const App = () => {
  const sampleImages = Array.from({ length: 67 }, (_, index) => ({
    src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/800/600`,
    alt: `Imagen de prueba ${index + 1}`,
    date: new Date(2025, index % 12, index + 1).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }),
    title: `Imagen ${index + 1}`,
    description: `Descripción de prueba para la imagen ${index + 1}`
  }));

  return (
    <div className="app">
      <ErrorBoundary>
        <Header />
        <ImageGallery items={sampleImages} />
      </ErrorBoundary>
    </div>
  );
};

export default App;


