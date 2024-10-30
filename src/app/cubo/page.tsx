"use client";
import React, { useEffect, useRef } from "react";

export default function Cube() {
  const colors = ["blue", "green", "white", "yellow", "orange", "red"];
  const piecesRef = useRef<HTMLDivElement[]>([]);
  const pivotRef = useRef<HTMLDivElement>(null);

  function mx(i: number, j: number) {
    return (
      ([2, 4, 3, 5][j % 4 | 0] +
        (i % 2) * (((j | 0) % 4) * 2 + 3) +
        2 * ((i / 2) | 0)) %
      6
    );
  }

  function obtenerEje(cara: number) {
    return String.fromCharCode("X".charCodeAt(0) + cara / 2);
  }

  function ensamblarCubo() {
    for (let i = 0; i < 26; i++) {
      let id = 0;
      const x = mx(i, i % 18);

      function moverACara(cara: number, face: number) {
        id = id + (1 << cara);
        const piece = piecesRef.current[i];
        piece?.children[cara]
          ?.appendChild(document.createElement("div"))
          .setAttribute("class", "sticker " + colors[cara]);
        return (
          "translate" + obtenerEje(cara) + "(" + ((cara % 2) * 4 - 2) + "em)"
        );
      }

      const pieza = piecesRef.current[i];
      pieza.style.transform =
        "rotateX(0deg)" +
        moverACara(i % 6, i % colors.length) +
        (i > 5
          ? moverACara(x, i % colors.length) +
            (i > 17 ? moverACara(mx(x, x + 2), i % colors.length) : "")
          : "");
      pieza.setAttribute("id", "piece" + id);
    }
  }

  useEffect(() => {
    ensamblarCubo();
  }, []);
  interface Caras {
    blue: [];
    green: [];
    white: [];
    yellow: [];
    orange: [];
    red: [];
  }
  const caras: Caras = {
    blue: [],
    green: [],
    white: [],
    yellow: [],
    orange: [],
    red: [],
  }; // Objeto para almacenar las caras del cubo
  useEffect(() => {
    const cube = document.getElementsByClassName("piece");
    for (let i = 0; i < cube.length; i++) {
      const pieza = cube[i].children; // Cada "element" dentro de la pieza

      for (let j = 0; j < pieza.length; j++) {
        const sticker = pieza[j].children;

        // Verificamos si hay un `sticker` con color para cada cara
        for (let k = 0; k < sticker.length; k++) {
          colors.forEach((color) => {
            if (sticker[k].classList.contains(color)) {
              // Agregamos la pieza actual a la lista de la cara correspondiente
              caras[color].push(cube[i]);
            }
          });
        }
      }
    }

    console.log("Caras del cubo identificadas:", caras); // Verifica cada cara con sus piezas correspondientes
    const rubik = {
      esquinas: [],
      centros: [],
      aristas: [],
    };
    for (let t in caras) {
      for (let id of caras[t]) {
        id as HTMLElement;
        let count = 0;
        if (id.children.length > 0) {
          let children = id.children;
          console.log("children", children.length);
          for (let x of children) {
            if (x.children.length) {
              count++;
            }
            console.log(x.children.length, count);
          }
        }

        console.log("id", id.id);
        console.log(id.id, rubik.centros.includes(id.id));
        if (count === 3) {
          Array.from(rubik.esquinas);
          console.log(rubik.esquinas.map((x) => x.id).includes(id.id));
          if (!rubik.esquinas.map((x) => x.id).includes(id.id)) {
            rubik.esquinas.push(id);
          }
        } else if (count === 2) {
          if (!rubik.aristas.map((x) => x.id).includes(id.id)) {
            rubik.aristas.push(id);
          }
        } else if (count === 1) {
          if (!rubik.centros.map((x) => x.id).includes(id.id)) {
            rubik.centros.push(id);
          }
        }
      }
    }
    console.log(rubik.aristas.length, "aristas, equinas, centros");
  }, []);

  return (
    <main>
      <div className="scene" id="scene">
        <div
          ref={pivotRef}
          className="pivot centered"
          id="pivot"
          style={{ transform: "rotateX(-35deg) rotateY(135deg)" }}
        >
          <div className="cube" id="cube">
            {[...Array(26)].map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) piecesRef.current[i] = el;
                }}
                className="piece"
              >
                <div className="element left"></div>
                <div className="element right"></div>
                <div className="element top"></div>
                <div className="element bottom"></div>
                <div className="element back"></div>
                <div className="element front"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
