import React from 'react'
import { useNavigate } from "react-router-dom"


export default function brenda() {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Brendan Eich</h1>
      <div>
        <h2>biografia</h2>
        <p>
        Brendan Eich recibió su Bachiller en matemáticas y ciencias de la computación en la Universidad de Santa Clara. Recibió su maestría en 1986 de la Universidad de Illinois en Urbana-Champaign.

Eich comenzó su carrera en Silicon Graphics, trabajando por siete años en el sistema operativo y código de la red. Luego trabajó por tres años en MicroUnity Systems Engineering escribiendo el micronúcleo y el código de DSP, y en hacer el primer port de GCC para la MIPS R4000.

Tras trabajar en Silicon Graphics, pasó por varias empresas hasta llegar a Netscape Communications Corporation en abril de 1995, trabajando en el desarrollo del lenguaje JavaScript (originalmente llamado Mocha, luego denominado LiveScript) para el navegador web Netscape Navigator. A principios de 1998 ayudó a fundar la Fundación Mozilla, sirviendo como principal arquitecto. Cuando AOL cerró la unidad del navegador Netscape en julio de 2003, Eich ayudó a hacer girar a la Fundación Mozilla.

El 24 de marzo de 2014 Eich fue ascendido a CEO de la Corporación Mozilla.1​ Gary Kovacs, John Lilly y Ellen Siminoff dimitieron de la junta directiva de Mozilla por la elección,2​ expresando desacuerdos con la estrategia de Eich y su deseo de tener un CEO con experiencia en la industria del móvil.3​4​ Algunos empleados de la Fundación Mozilla (una organización separada de la Corporación) tuitearon que debía dimitir, haciendo referencia a las donaciones de Eich por valor de 1000 dólares estadounidenses a la Proposición 8 de California, que prohibía el matrimonio entre personas del mismo sexo,5​6​ antes de ser derogada en 2013, cuando fue declarada inconstitucional y pudieron reanudarse los casamientos.7​ Eich se reafirmó en su decisión de financiar la campaña, pero escribió en su blog que lamentaba haber "causado daño" y se comprometía a promover la igualdad en Mozilla.2​8​ El sitio de citas en línea OkCupid automáticamente reprodujo un mensaje a las personas usuarias de Firefox con información sobre la donación de Eich y sugería que utilizaran otro navegador (aunque les permitía continuar con Firefox si así lo deseaban).9​10​11​ El 3 de abril de 2014 Eich dimitió como CEO de Mozilla y abandonó la organización, citando su incapacidad para "ser un líder efectivo en las presentes circunstancias".12​13​ Desde finales de 2015 es el CEO de Brave (navegador web).14​
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1024px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="" />
      </div>
      <button onClick={()=>{navigate("/Home")}}> change to Home page </button>
    </div>

  )
}
