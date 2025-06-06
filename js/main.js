const commands = {
  help: () => `
<div class="command-output">
    <div class="success">Comandos disponibles:</div>
    <div><span class="warning">about</span>     - Información personal</div>
    <div><span class="warning">projects</span>  - Mis proyectos</div>
    <div><span class="warning">skills</span>    - Habilidades técnicas</div>
    <div><span class="warning">resume</span>    - Descargar currículum</div>
    <div><span class="warning">social</span>    - Redes sociales</div>
    <div><span class="warning">clear</span>     - Limpiar terminal</div>
</div>`,

  about: () => `
<div class="command-output">
    <img src="assets/fotoluis.jpg" alt="Foto de Luis Pedro Lira" class="about-photo" style="width:120px;height:120px;border-radius:50%;margin-bottom:10px;object-fit:cover;" />
    <div class="success">═══ SOBRE MÍ ═══</div>
    <div>Nombre: <span class="warning">Luis Pedro Lira</span></div>
    <div>Título: <span class="warning">Desarrollador Full Stack</span></div>
    <div>Ubicación: <span class="warning">Guatemala</span></div>
    <div>Estado: <span class="warning">Estudiante trabajador 😎</span></div>
    <br>
    <div>🗣️ Me gusta mucho platicar con la gente</div>
    <div>💻 Me llama mucho la atención las automatizaciones</div>

    <br>
</div>`,

  projects: () => `
<div class="command-output">
    <div class="success">═══ MIS PROYECTOS ═══</div>
    <br>
    <div class="project-card">
        <div class="success">🌐 E-Commerce Platform</div>
        <div><strong>Descripción:</strong> Plataforma completa de comercio electrónico</div>
        <div><strong>Tecnologías:</strong> React, Node.js, Express</div>
        <div><strong>Repositorio E-commerce:</strong> <a href="https://github.com/luispedrolira/clutchzone.git"  target="_blank" rel="noopener noreferrer" class="link">https://github.com/luispedrolira/clutchzone.git</a></div>
        <div><strong>Repositorio API E-commerce:</strong> <a href="https://github.com/luispedrolira/api-clutchzone.git" target="_blank" rel="noopener noreferrer" class="link">https://github.com/luispedrolira/api-clutchzone.git</a></div>
        <div><strong>Demo:</strong> <a  href="https://luispedrolira.github.io/ecommerceWeb/" target="_blank" rel="noopener noreferrer" class="link">https://luispedrolira.github.io/ecommerceWeb/</a></div>
    </div>
    
    <div class="project-card">
        <div class="success">Lista de personajes Breaking Bad</div>
        <div><strong>Tecnologías:</strong> React CDN, CSS</div>
        <div><strong>Repositorio:</strong> <a href="https://github.com/luispedrolira/react-cdn/tree/master/use-memo" target="_blank" rel="noopener noreferrer" class="link">https://github.com/luispedrolira/react-cdn/use-memo</a></div>
        <div><strong>Demo:</strong> <a href="https://www.awita.site/usuarios/lir23669/react-cdn/use-memo/" target="_blank" rel="noopener noreferrer" class="link">https://luispedrolira.github.io/use-memo</a></div>
    </div>
    
    <div class="project-card">
        <div class="success">Cronometro "Apple"</div>
        <div><strong>Descripción:</strong> Clone del cronometro de Apple</div>
        <div><strong>Tecnologías:</strong> React CDN, CSS3</div>
        <div><strong>Repositorio:</strong> <a href="https://github.com/luispedrolira/react-cdn/tree/master/use-ref" class="link">https://github.com/luispedrolira/react-cdn/use-ref</span></div>
        <div><strong>Demo:</strong> <a href="https://www.awita.site/usuarios/lir23669/react-cdn/use-ref/" class="link">https://luispedrolira.github.io/use-ref</span></div>
    </div>
</div>`,

  skills: () => {
    setTimeout(() => {
      const skillBars = document.querySelectorAll(".bar-fill");
      const skills = [90, 50, 80, 75, 60, 90, 60, 40];
      skillBars.forEach((bar, index) => {
        bar.style.width = skills[index] + "%";
      });
    }, 100);

    return `
<div class="command-output">
    <div class="success">═══ HABILIDADES TÉCNICAS ═══</div>
    <br>
    <div class="skill-bar">
        <span class="skill-name">HTML5</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>90%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">CSS3</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>50%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">JavaScript</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>80%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">React</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>75%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">Node.js</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>60%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">Git/GitHub</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>90%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">APIs REST</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>60%</span>
    </div>
    <div class="skill-bar">
        <span class="skill-name">MongoDB</span>
        <div class="bar"><div class="bar-fill"></div></div>
        <span>40%</span>
    </div>
    <br>
    <div class="success">🛠️ Herramientas adicionales:</div>
    <div>• VS Code, Figma, Postman</div>
    <div>• Webpack, Vite, NPM</div>
</div>`;
  },

  resume: () => `
<div class="command-output">
    <div class="success">═══ CURRÍCULUM ═══</div>
    <br>
    <div>📄 Mi currículum está disponible para descarga:</div>
    <div><a href="assets/CV_de_LuisPedroLira.pdf" download class="link">📥 Descargar CV (PDF)</a></div>
    <br>
</div>`,

  social: () => `
<div class="command-output">
    <div class="success">═══ REDES SOCIALES ═══</div>
    <br>
    <div>📧 Email: <span class="warning">luispelirak130@gmail.com</span></div>
    <div>🐙 GitHub: <a href="https://github.com/luispedrolira" target="_blank" rel="noopener noreferrer" class="link">https://github.com/luispedrolira</a></div>
    <div>💼 LinkedIn: <a href="https://www.linkedin.com/in/luispedrolira/" target="_blank" rel="noopener noreferrer" class="link">https://www.linkedin.com/in/luispedrolira/</a></div>
    <div>📷 Instagram: <a href="https://www.instagram.com/luispedrolira/" target="_blank" rel="noopener noreferrer" class="link">https://www.instagram.com/luispedrolira/</a></div>
    <br>
    <div class="success">¡Contactame :)!</div>
</div>`,

  clear: () => {
    document.getElementById("output").innerHTML = `
    <div class="welcome-message">
        <div class="success">¡Bienvenido a mi portafolio!</div>
        <div>Sistema inicializado...</div>
        <div>Escribe <span class="warning">'help'</span> para ver los comandos disponibles.</div>
    </div>`;

    return null;
  },
};

const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const command = this.value.trim().toLowerCase();
    const commandLine = `<div class="prompt"><span class="prompt-symbol">guest@portfolio:~$</span> ${this.value}</div>`;
    if (commands[command]) {
      const result = commands[command]();
      if (result !== null) {
        output.innerHTML += commandLine + result;
        // Forzar el scroll al fondo después de que el contenido se renderice
        requestAnimationFrame(() => {
          output.scrollTo({
            top: output.scrollHeight,
            behavior: "smooth",
          });
        });
      }
    } else if (command === "") {
      output.innerHTML += commandLine;
    } else {
      output.innerHTML +=
        commandLine +
        `
                        <div class="command-output">
                            <div class="error">Comando no encontrado: ${command}</div>
                            <div>Escribe <span class="warning">'help'</span> para ver los comandos disponibles.</div>
                        </div>
                    `;
    }

    this.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

// Auto focus en el input
input.focus();
document.addEventListener("click", () => input.focus());

// Efecto de escritura inicial
window.addEventListener("load", function () {
  setTimeout(() => {
    const elements = document.querySelectorAll(".command-output div");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "0";
        el.style.animation = "typing 0.05s steps(1) infinite";
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.animation = "none";
        }, 50);
      }, index * 200);
    });
  }, 500);
});
