
import React, { useState } from "react"

export default function Login (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Inicia sesión</h3>
            <div className="text-center">
              ¿Aun no te registras?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Registrate
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Correo electronico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Escribe tu correo"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Escribe tu contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrate</h3>
          <div className="text-center">
            ¿Ya tienes una cuenta?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Inicar sesión
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nombre completo</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="ej Joseph Lopez"
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electronico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="correo electronico"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}