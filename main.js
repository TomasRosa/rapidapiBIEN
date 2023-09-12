document.addEventListener("DOMContentLoaded", function() {
    const idLista = document.getElementById('nombres');
    const idListaApellidos = document.getElementById('username');
    const idListaEmail = document.getElementById('email');
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        json.forEach(user => {
          const liNombre = document.createElement("li");
          liNombre.textContent = user.name;
          idLista.appendChild(liNombre);

          const liUserName = document.createElement("li");
          liUserName.textContent = user.username;
          idListaApellidos.appendChild(liUserName);

          const liEmail = document.createElement("li");
          liEmail.textContent = user.email;
          idListaEmail.appendChild(liEmail);
        })
      })
      .catch((err) => {
        console.log(err); /*Preguntar Nahue*/ 
      });
  });
  