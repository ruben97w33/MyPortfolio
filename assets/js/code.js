const portfolio = document.getElementById("portfolio");
let width = screen.width;
console.log(width);

if (width < 590) portfolio.classList.add("g-2");
if (width < 572) document.querySelector(".frameworks").classList.add("pt-4");

const sendMail = () => {
  const email = document.getElementById("mail");
  const subject = document.getElementById("subject");
  const name = document.getElementById("name");
  const msg = document.getElementById("msg");

  var link =
    "mailto:w33cuba@gmail.com" +
    "?cc=" +
    email.value +
    "&subject=" +
    subject.value +
    "&name" +
    name.value +
    "&body=" +
    msg.value;
  window.open(link);

  email.value = "";
  subject.value = "";
  msg.value = "";
  name.value = "";
};

const enviarMensaje = () => {
  const correo = document.getElementById("correo");
  const nombre = document.getElementById("nombre");
  const mensaje = document.getElementById("mensaje");
  var link =
    "mailto:contact@jesamconsulting.com" +
    "?cc=" +
    correo.value +
    "&subject=" +
    nombre.value +
    "&body=" +
    mensaje.value;

  window.open(link);

  correo.value = "";
  nombre.value = "";
  mensaje.value = "";
};

const Senden = () => {
  const germail = document.getElementById("germail");
  const vorname = document.getElementById("vorname");
  const botschaft = document.getElementById("botschaft");
  var link =
    "mailto:contact@jesamconsulting.com" +
    "?cc=" +
    germail.value +
    "&subject=" +
    vorname.value +
    "&body=" +
    botschaft.value;

  window.open(link);

  germail.value = "";
  vorname.value = "";
  botschaft.value = "";
};
