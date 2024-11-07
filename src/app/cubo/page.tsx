"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Cube() {
  const colors = ["blue", "green", "white", "yellow", "orange", "red"];
  const piecesRef = useRef<HTMLDivElement[]>([]);
  const pivotRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -35, y: 135 });
  const isDragging = useRef(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });

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
  const cube = document.getElementsByClassName("piece");
  // Colores disponibles para cada orientación
  type Color = "blue" | "green" | "white" | "yellow" | "orange" | "red" | "";
  // type Ubicacion = "top" | "bottom" | "back" | "front" | "right" | "left";
  // Orientaciones de cada pieza
  interface Orientation {
    front?: Color;
    back?: Color;
    left?: Color;
    right?: Color;
    top?: Color;
    bottom?: Color;
  }

  // Tipo para una pieza del cubo
  interface CubePiece {
    id: string; // el id que identifica a la pieza
    cp: {
      front?: Color;
      back?: Color;
      left?: Color;
      right?: Color;
      top?: Color;
      bottom?: Color;
    }; // Colores en cada orientación
  }
  let rubik: CubePiece[];
  const piezas: CubePiece[] = []; // Array para almacenar las piezas en el formato deseado
  useEffect(() => {
    for (let x of cube) {
      const pieza = {
        id: x.id,
        cp: {},
      };

      let n = 0; // Contador de colores por pieza

      // Iteramos sobre cada cara y asignamos el color correspondiente en `cp`
      Array.from(x.children).forEach((face) => {
        const orientacion = face.classList[1]; // Orientación de la cara (e.g., 'front', 'left', etc.)
        const color = face.children[0]?.classList[1]; // Color de la pegatina en esa orientación

        if (color) {
          pieza.cp[orientacion as Orientation] = color; // Añade la orientación y el color a `cp`
          n++;
        }
      });

      piezas.push(pieza); // Añade la pieza al array `piezas`
    }

    // Resultado de `piezas`
  }, []);
  useEffect(() => {
    if (piezas !== undefined) {
      rubik = piezas;
    }
    rubik.sort();
  }, [cube]);

  function handleMouseDown(event: React.MouseEvent) {
    isDragging.current = true;
    lastMousePosition.current = { x: event.clientX, y: event.clientY };
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging.current) return;

    const deltaX = event.clientX - lastMousePosition.current.x;
    const deltaY = event.clientY - lastMousePosition.current.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));

    lastMousePosition.current = { x: event.clientX, y: event.clientY };
  }

  function handleMouseUp() {
    isDragging.current = false;
  }

  useEffect(() => {
    ensamblarCubo();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  function rotateRight() {
    const elementA33 =document.getElementById("piece33")?.children[5]?.children[1].classList[1];
    const elementA9 =document.getElementById("piece9")?.children[3]?.children[1].classList[1];
    const elementA17 =document.getElementById("piece17")?.children[4]?.children[1].classList[1];
    const elementA5 =document.getElementById("piece5")?.children[2]?.children[0].classList[1];
    const element5 = document.getElementById("piece5")?.children[2]?.children[1];
    const element33 = document.getElementById("piece33")?.children[5]?.children[1];
    const element9 = document.getElementById("piece9")?.children[3]?.children[1]
    const element17 = document.getElementById("piece17")?.children[4]?.children[1]
    element5!.classList.replace(`${element5?.classList[1]}`, `${elementA33}`);
    element33!.classList.replace(`${element33?.classList[1]}`, `${elementA9}`);
    element9!.classList.replace(`${element9?.classList[1]}`, `${elementA17}`);
    element17!.classList.replace(`${element17?.classList[1]}`, `${elementA5}`);
  }
  useEffect(() => {
    rotateRight();
  }, []);

  return (
    <main>
      <div className="scene" id="scene">
        <div
          ref={pivotRef}
          className="pivot centered"
          id="pivot"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onMouseDown={handleMouseDown}
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
