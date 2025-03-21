import { useState } from "react";

function Booleano() {
  const [boolean, setBoolean] = useState(true);

  let colortexto;
  let mensaje;

  if (boolean == true) {
    colortexto = "blue";
    mensaje = "El booleano es verdadero";
  } else {
    colortexto = "red";
    mensaje = "El booleano es falso";
  }

  return (
    <div>
      <h3 style={{ color: colortexto }}>{mensaje}</h3>
      <button onClick={() => setBoolean(!boolean)}>Cambiar Booleano</button>
    </div>
  );
}

export default Booleano;
