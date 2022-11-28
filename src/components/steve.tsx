import React from 'react'
import { useNavigate } from "react-router-dom"


export default function steve() {
  let navigate = useNavigate()
  return (
    <div>
    <h1>Steve Jobs</h1>
    <div>
      <h2>biografia</h2>
      <p>
      Steven Paul Jobs (San Francisco, 24 de febrero de 1955-Palo Alto, 5 de octubre de 2011)8​9​10​11​ fue un empresario, diseñador industrial, magnate empresarial, propietario de medios e inversor estadounidense. Fue cofundador y presidente ejecutivo de Apple12​ y máximo accionista individual de The Walt Disney Company.13​

Fundó Apple en 1976 junto con un amigo de la adolescencia, Steve Wozniak, con ayuda del excompañero de Jobs en Atari, Ronald Wayne, en el garaje de su casa. Aupado por el éxito del Apple II, Jobs obtuvo una gran relevancia pública, siendo portada de Time en 1982.14​ Contaba 27 años y ya era millonario gracias a la exitosa salida a bolsa de la compañía a finales del año anterior. La década de los 80 supuso la entrada de potentes competidores en el mercado de los ordenadores personales, lo que originó las primeras dificultades empresariales.
<br />
Su reacción fue innovar, o mejor dicho, implementar: a principios de 1984 su compañía lanzaba el Macintosh 128K, que fue el primer ordenador personal que se comercializó exitosamente que usaba una interfaz gráfica de usuario (GUI) y un ratón en vez de la línea de comandos. Después de tener problemas con la cúpula directiva de la empresa que él mismo fundó, renunció.15​ Jobs vendió entonces todas sus acciones, salvo una. Ese mismo año recibía la Medalla Nacional de Tecnología del presidente Ronald Reagan, cerrando con este reconocimiento esta primera etapa como emprendedor. Regresó en 1997 a la compañía, que se encontraba en graves dificultades financieras, y fue su director ejecutivo hasta el 24 de agosto de 2011.16​17​18​19​ En ese verano Apple sobrepasó a Exxon como la empresa con mayor capitalización del mundo.20​
<br />
Durante los años 1990 transformó una empresa subsidiaria adquirida a Lucasfilm en Pixar, que revolucionó la industria de animación con el lanzamiento de Toy Story. La integración de esta compañía en Disney, de la que era proveedor, convertiría a Jobs en el mayor accionista individual del gigante del entretenimiento. En el año de su muerte, su fortuna se valoraba en 8300 millones de dólares21​ y ocupaba el puesto 110 en la lista de grandes fortunas de la revista Forbes.
<br />
En su segunda etapa en Apple, también cambió el modelo de negocio de la industria musical: aprobó el lanzamiento del iPod en 2001, y en 2003 la tienda On-line de música de iTunes, que en siete años vendió más de 10 000 millones de canciones y dominó completamente el negocio de música en línea, a un precio de 0,99  USD por canción descargada.22​ Ya en 2009 lograba acaparar el 25 por ciento de la venta de música en los Estados Unidos, y es la mayor tienda musical por volumen de ventas de la historia.23​ Según el registro de patentes de los Estados Unidos, 323 patentes de Jobs figuran a nombre de Apple
      </p>
      <img src="https://www.kaizengroup.es/wp-content/uploads/bfi_thumb/stevejobsbig-35j7nynk8topdvfvsv3im8.jpg" alt="" />
    </div>
    <button onClick={()=>{navigate("/Home")}}> change to Home page </button>
  </div>
  )
}
