let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #845ec2;'>|</span>",
});
 
typewriter
  .pauseFor(500)
  .typeString('<span style="color: #845ec2;">Estudiante en Utel: Ing. en Sistemas Computacionales y en Tecnolochicas Pro: Curso de Front-end Development, Analista de IT Ecommerce en Costco México.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
