import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container-fluid general'>
      <Header title="Galería de Imágenes con React"/>
      <div className='contenedor-tarjetas'>
        <Card imageSrc="https://maxus.cl/documents/931019/4534917/AZUL.png" title="Euniq 6 Azul" description="La nueva SUV Euniq 6 viene con un inigualable equipamiento tecnológico que incluye Apple CarPlay, luces atmosféricas en 64 colores diferentes"/>
        <Card imageSrc="https://maxus.cl/documents/931019/4534917/NEGRO.png" title="Euniq 6 Negra" description="La nueva SUV Euniq 6 tiene una batería con capacidad de 70 kwh, la que puede entregar una potencia de 174 HP y autonomía de 452 km"/>
        <Card imageSrc="https://maxus.cl/documents/931019/4534917/BLANCO.png" title="Euniq 6 Blanca" description="La SUV también ofrece una amplia gama de características únicas en seguridad, gracias a sus sistemas de asistencia al conductor"/>
        <Card imageSrc="https://maxus.cl/documents/931019/4534917/ROJO.png" title="Euniq 6 Roja" description="La Euniq 6 es única en comodidad y espacio para toda la familia. Cuenta con la seguridad de anclajes ISOFIX"/>
      </div>
      <Footer textoFooter="En esta galería se encuentran las distintas versiones de la nueva Euniq 6."/>
    </div>
  );
}

export default App;