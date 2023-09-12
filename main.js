document.addEventListener("DOMContentLoaded", function() {
    const idLista = document.getElementById('nombres');
    const idListaApellidos = document.getElementById('username');
    const idListaEmail = document.getElementById('email');
    const idListaCompany = document.getElementById('company');
  
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

          const liCompany = document.createElement('li');
          liCompany.innerHTML = user.company.name;
          idListaCompany.appendChild(liCompany);

        })
      })
      .catch((err) => {
        console.log(err); /*Preguntar Nahue sobre la Company, ver si esta bien*/ 
      });
  });
  