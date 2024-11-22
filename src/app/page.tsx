import { styleText } from "util";

export default function Home() {
  return (
    <main className="text-slate-400">
      <div className="text-center m-2">
      <h1 className="text-4xl">Bienvenidos</h1>
      <h2 className="text-3xl">Como armar el cubo de rubik 3x3x3</h2>
      <p className="text-justify">
        aqui tendremos una breve explicacion de como se arma el cubo de rubik
        pues este procedimiento consta de varios pasos y diferentes algoritmos
        que vamos a ir viendo.
      </p>
      <h2 className="text-xl">Reconiciendo un cubo</h2>
      <p>
        como ya todos sabemos un cubo consta de 6 caras cada una de ellas tiene
        un nombre
      </p>
      <section>
        <strong className="text-white text-2xl">Arriba - Up:</strong>{" "}
        <p>
          {" "}
          esta cara la vamos a identificar con el color blanco - white, para
          reducir el algoritmos y no estar escribiendo toda la palabra del
          ingles vamos a escribir solo la primera letra de cada palabra en este
          caso U esta letra o comando movera toda la cara blanca arriba - up y
          el moviento se hara de derecha a izquierda pero si usamos U' (' = prima lo usaremos mucho en los algoritmos para armar el cubo) entonces
          se movera de izquierda a derecha. puede ir a la prestaña de cubo y precionar el boton U o U' {" "}
        </p>
        <strong className="text-yellow-500">Abajo - Down:</strong>{" "}
        <p> esta cara la vamos identificar con el color amarillo - yellow </p>
        <strong className="text-blue-500">Derecha - Right: </strong>{" "}
        <p>esta cara la vamos a identificar con el color Azul - Blue</p>
        <strong className="text-green-500">Izquierda - Left: </strong>{" "}
        <p>esta cara la vamos a indentificar con el color Verde - Green</p>
        <strong className="text-red-500">Frontal - Front:</strong>{" "}
        <p>esta cara la vamos a indentificar con el color Rojo - Red</p>
        <strong className="text-orange-500">Atras - Back</strong>{" "}
        <p>esta cara la vamos a identificar con el color Naranjado - Orange</p>
      </section>
      </div>
    </main>
  );
}
