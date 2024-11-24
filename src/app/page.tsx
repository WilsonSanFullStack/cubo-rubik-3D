export default function Home() {
  return (
    <main className="text-slate-400 overflow-auto">
      <div className="text-center m-2">
        <h1 className="text-4xl text-gray-300">Bienvenidos</h1>
        <h2 className="text-3xl text-gray-300">Como armar el cubo de rubik 3x3x3</h2>
        <p className="text-justify">
          aqui tendremos una breve explicacion de como se arma el cubo de rubik
          pues este procedimiento consta de varios pasos y diferentes algoritmos
          que vamos a ir viendo.
        </p>
        <h2 className="text-xl text-gray-300">Reconociendo un cubo</h2>
        <section>
          <p>
            Cada movimiento afecta una de las 6 caras del cubo, y el movimiento
            puede ser en el sentido horario o antihorario. Estos movimientos
            están representados por letras (en inglés) que corresponden a cada
            cara del cubo:
          </p>
          <section>
            <h3 className="text-xl text-gray-300 m-2">Caras del cubo</h3>
            <ul className="m-1 font-bold ">
              <li>U (Up): Cara superior - Blanco.</li>
              <li>D (Down): Cara inferior - Amarillo.</li>
              <li>R (Right): Cara derecha - Azul.</li>
              <li>L (Left): Cara izquierda - Verde.</li>
              <li>F (Front): Cara frontal - Rojo.</li>
              <li>B (Back): Cara trasera - Naranja.</li>
            </ul>
          </section>
        </section>
        <section className="text-center">
          <h3 className="text-xl text-gray-300 m-2 text-center">Notación de los movimientos</h3>
          <ul>
            <li>
              Letra sola (U, D, R, L, F, B, M, E, S): Gira la cara
              correspondiente 90° en el sentido horario.
            </li>
            <li>
              Letra con un apóstrofe (U{"'"}, D{"'"}, R{"'"}, L{"'"}, F{"'"}, B
              {"'"}, M{"'"}, E{"'"}, S{"'"}): Gira la cara correspondiente 90°
              en el sentido antihorario.
            </li>
            <li>
              Letra seguida de un número "2" (U2, D2, R2, L2, F2, B2, M2, E2,
              S2): Gira la cara correspondiente 180°.
            </li>
          </ul>
          <h3 className="text-xl text-gray-300 m-2 text-center">Explicación de los movimientos por cara</h3>
          <ul>
            <h4 className="text-gray-300 m-2 text-center"> Cara Superior (U - Up)</h4>
            <li>
              U: Gira la cara superior (blanca) 90° en sentido horario, moviendo
              las piezas hacia la izquierda.
            </li>
            <li>
              U{"'"}: Gira la cara superior 90° en sentido antihorario, moviendo
              las piezas hacia la derecha.
            </li>
            <h4 className="text-gray-300 m-2 text-center">Cara Inferior (D - Down)</h4>
            <li>
              D: Gira la cara inferior (amarilla) 90° en sentido horario,
              moviendo las piezas hacia la derecha.
            </li>
            <li>
              D{"'"}: Gira la cara inferior 90° en sentido antihorario, moviendo las
              piezas hacia la izquierda.
            </li>
            <h4 className="text-gray-300 m-2 text-center">Cara Derecha (R - Right)</h4>
            <li>R: Gira la cara derecha (azul) 90° hacia arriba.</li>
            <li>R{"'"}: Gira la cara derecha 90° hacia abajo.</li>
            <h4 className="text-gray-300 m-2 text-center">Cara Izquierda (L - Left)</h4>
            <li>L: Gira la cara izquierda (verde) 90° hacia abajo.</li>
            <li>L{"'"}: Gira la cara izquierda 90° hacia arriba.</li>

            <h4 className="text-gray-300 m-2 text-center">Cara Frontal (F - Front)</h4>
            <li>
              F: Gira la cara frontal (roja) 90° en sentido horario (de
              izquierda a derecha).
            </li>
            <li>
              F{"'"}: Gira la cara frontal 90° en sentido antihorario (de derecha a
              izquierda).
            </li>

            <h4 className="text-gray-300 m-2 text-center">Cara Trasera (B - Back)</h4>
            <li>B: Gira la cara trasera (naranja) 90° hacia adelante.</li>
            <li>B{"'"}: Gira la cara trasera 90° hacia atrás.</li>

            <h4 className="text-xl text-gray-300 m-2">Movimiento M (Middle)</h4>
            <p>
              Qué afecta: La capa central vertical (entre las caras izquierda e
              derecha).
            </p>
            <li>
              M: Gira la capa central vertical de arriba hacia abajo (en el
              mismo sentido que L).
            </li>
            <li>
              M{"'"}: Gira la capa central vertical de abajo hacia arriba (en el
              mismo sentido que L').
            </li>

            <h4 className="text-gray-300 m-2 text-center">Movimiento E (Equatorial)</h4>
            <p>
              Qué afecta: La capa central horizontal (entre las caras superior e
              inferior)
            </p>
            <li>
              E: Gira la capa central horizontal hacia la izquierda (en el mismo
              sentido que D).
            </li>
            <li>
              E{"'"}: Gira la capa central horizontal hacia la derecha (en el mismo
              sentido que D').
            </li>

            <h4 className="text-gray-300 m-2 text-center">Movimiento S (Standing)</h4>
            <p>
              Qué afecta: La capa central frontal (entre las caras frontal y
              trasera).
            </p>
            <li>
              S: Gira la capa central frontal en sentido horario (en el mismo
              sentido que F).
            </li>
            <li>
              S{"'"}: Gira la capa central frontal en sentido antihorario (en el
              mismo sentido que F').
            </li>
          </ul>
          
        </section>
      </div>
    </main>
  );
}
