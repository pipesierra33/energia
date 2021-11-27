import './App.css';
import torresluz from './assets/img/torresluz.jpg';
import energiasolar from './assets/img/energiasolar.jpg';

function App() {
  return (
    <><><><div class="card mb-3 p-3 mb-2 bg-primary text-white">
      <div class="row g-0">
        <div class="col-md-3">
          <h5>Imagen</h5>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">Energía de Bogotá E.S.P.</h1>
            <p class="card-text">¡ Conectamos mundos !</p>
          </div>
        </div></div>
    </div><><div>
    </div>
        <div>
          <ul class="nav nav-pills nav-fill p-3 mb-2 bg-primary text-dark ">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white " href="#">Ingreso</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Registro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Paga tu factura</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Quienes somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Política de privacidad</a>
            </li>
          </ul>
        </div></></><div>
        <div class="card bg-dark text-white">
          <img src={torresluz} alt="imagen de inicio 1" class="card-img" width="400" height="500" />
          <div class="card-img-overlay">
            <h1 class="card-title fw-bold " align="right">¿Conoces los tipos de riesgos eléctricos?.</h1>
            <h1 class="card-title fw-bold" align="right">Recuerda que la seguridad de tu familia depende de tu conocimiento sobre las redes eléctricas de tu casa</h1>
          </div>
        </div>
        <div class="card bg-dark text-white">
          <img src={energiasolar} alt="imagen de inicio 2" class="card-img" width="400" height="500" />
          <div class="card-img-overlay">
            <h1 class="card-title fw-bold" align="left">Nuestros proyectos de energias renovables, garantizan la sostenibilidad energética del país.</h1>
            <h1 class="card-title fw-bold" align="left">Somos una empresa responsable.</h1>
          </div>
        </div>
      </div></><div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Datos de la empresa</h5>
              <p class="card-text">submenu de referencia</p>
              <a href="#" class="btn btn-primary">Acceso directo a la pagina de login</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Redes Sociales</h5>
              <p class="card-text">Aquí se ingresa a las respectivas redes sociales</p>
              <a href="#" class="btn btn-primary">Acceso directo a registrarse</a>
            </div>
          </div>
        </div>
      </div></>



  );
}

export default App;
