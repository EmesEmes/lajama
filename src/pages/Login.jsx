import { useEffect } from 'react';
import {users} from '../constants'

const Login = () => {
  useEffect(() => {
    const login = document.getElementById('login');

    login.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const user = document.getElementById("user").value;
      const password = document.getElementById("password").value;
      
      if(user === "" || password === "") {
          const message = document.querySelector(".message");
          message.textContent = "Todos los campos son obligatorios";
          login.reset()
          return;
      } else {
          const userFound = users.find(u => u.user === user && u.password === password);
          if (userFound) {
            if(userFound.role === "main") {
              window.location.href = "/main";
              localStorage.setItem("currentUser", JSON.stringify(userFound));
            }
            if(userFound.role === "employee") {
              window.location.href = "/employee";
              localStorage.setItem("currentUser", JSON.stringify(userFound));
            }
          } else {
              const message = document.querySelector(".message");
              message.textContent = "Usuario o contraseña incorrectos";
              login.reset()
          }
      }
  
      
  })
    

  }, []);
  
  
  return (
    <main className="w-[100%] h-[100vh] flex items-center justify-center align-middle">
      <div className="border-2 border-primary p-10 rounded-3xl shadow-lg shadow-primary/50">
        <form id="login" className="mt-10 flex flex-col gap-4">
          <div>
            <img src="/images/lajama-name.png" alt="" className="w-[400px]" />
          </div>
          <div>
            <input type="text" placeholder="Usuario" id="user" className="p-2 rounded-lg border-2 border-primary w-full" />
          </div>
          <div>
            <input type="password" placeholder="Contraseña" id="password" className="p-2 rounded-lg border-2 border-primary w-full" autoComplete="on"/>
          </div>
          <p className="message text-alert"></p>
          <div>
            <input type="submit" value="Ingresar" className="w-full border-2 border-primary p-2 rounded-lg bg-primary text-white cursor-pointer hover:border-2 hover:border-primary  hover:bg-white hover:text-primary transition duration-300" />
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login