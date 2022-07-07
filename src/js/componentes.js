import '../css/componentes.css'
// import wepacklogo from '../assets/img/webpack-logo.png'


export const saludar = (nombre) => {
    console.log("creando etiqueta h1");
  
    const h1 = document.createElement("h1");
  
    h1.innerText = `Hola, ${nombre}`;
  
    document.body.append(h1);

    // IMG

    // const img = document.createElement('img')
    // img.src = wepacklogo
    // document.body.append(img)




  };
  