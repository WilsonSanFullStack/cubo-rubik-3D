"use client";

import { useEffect, useRef, useState } from "react";

export default function Cube() {
  const [rotation, setRotation] = useState({ x: -35, y: 135 });
  const isDragging = useRef(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  interface Colores {
    green: "green";
    blue: "blue";
    white: "white";
    yellow: "yellow";
    red: "red";
    orange: "orange";
  }
  const colors: Colores = {
    green: "green",
    blue: "blue",
    white: "white",
    yellow: "yellow",
    red: "red",
    orange: "orange",
  };

  type Colors = "green" | "blue" | "white" | "yellow" | "red" | "orange";

  interface Piece {
    left?: Colors;
    right?: Colors;
    top?: Colors;
    bottom?: Colors;
    front?: Colors;
    back?: Colors;
  }

  interface Cube {
    piece1: Piece;
    piece2: Piece;
    piece4: Piece;
    piece5: Piece;
    piece6: Piece;
    piece8: Piece;
    piece9: Piece;
    piece10: Piece;
    piece16: Piece;
    piece17: Piece;
    piece18: Piece;
    piece20: Piece;
    piece21: Piece;
    piece22: Piece;
    piece24: Piece;
    piece25: Piece;
    piece26: Piece;
    piece32: Piece;
    piece33: Piece;
    piece34: Piece;
    piece36: Piece;
    piece37: Piece;
    piece38: Piece;
    piece40: Piece;
    piece41: Piece;
    piece42: Piece;
  }
  const [cube, setCube] = useState<Cube>({
    piece1: {
      left: colors.green,
    },
    piece2: {
      right: colors.blue,
    },
    piece4: {
      top: colors.white,
    },
    piece5: {
      left: colors.green,
      top: colors.white,
    },
    piece6: {
      right: colors.blue,
      top: colors.white,
    },
    piece8: {
      bottom: colors.yellow,
    },
    piece9: {
      left: colors.green,
      bottom: colors.yellow,
    },
    piece10: {
      right: colors.blue,
      bottom: colors.yellow,
    },
    piece16: {
      back: colors.orange,
    },
    piece17: {
      left: colors.green,
      back: colors.orange,
    },
    piece18: {
      right: colors.blue,
      back: colors.orange,
    },
    piece20: {
      top: colors.white,
      back: colors.orange,
    },
    piece21: {
      left: colors.green,
      top: colors.white,
      back: colors.orange,
    },
    piece22: {
      right: colors.blue,
      top: colors.white,
      back: colors.orange,
    },
    piece24: {
      bottom: colors.yellow,
      back: colors.orange,
    },
    piece25: {
      left: colors.green,
      bottom: colors.yellow,
      back: colors.orange,
    },
    piece26: {
      right: colors.blue,
      bottom: colors.yellow,
      back: colors.orange,
    },
    piece32: {
      front: colors.red,
    },
    piece33: {
      left: colors.green,
      front: colors.red,
    },
    piece34: {
      right: colors.blue,
      front: colors.red,
    },
    piece36: {
      top: colors.white,
      front: colors.red,
    },

    piece37: {
      left: colors.green,
      top: colors.white,
      front: colors.red,
    },
    piece38: {
      right: colors.blue,
      top: colors.white,
      front: colors.red,
    },
    piece40: {
      bottom: colors.yellow,
      front: colors.red,
    },

    piece41: {
      left: colors.green,
      bottom: colors.yellow,
      front: colors.red,
    },
    piece42: {
      right: colors.blue,
      bottom: colors.yellow,
      front: colors.red,
    },
  });
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
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  const a: Cube = cube;
  const L = () => {
    setCube({
      ...cube,
      piece5: {
        left: a.piece17.left,
        top: a.piece17.back,
      },
      piece17: {
        left: a.piece9.left,
        back: a.piece9.bottom,
      },
      piece9: {
        left: a.piece33.left,
        bottom: a.piece33.front,
      },
      piece33: {
        left: a.piece5.left,
        front: a.piece5.top,
      },
      piece37: {
        left: a.piece21.left,
        top: a.piece21.back,
        front: a.piece21.top,
      },
      piece21: {
        left: a.piece25.left,
        top: a.piece25.back,
        back: a.piece25.bottom,
      },
      piece25: {
        left: a.piece41.left,
        bottom: a.piece41.front,
        back: a.piece41.bottom,
      },
      piece41: {
        left: a.piece37.left,
        bottom: a.piece37.front,
        front: a.piece37.top,
      },
    });
  };
  const LP = () => {
    setCube({
      ...cube,
      piece5: {
        left: a.piece33.left, //a.piece17.left,
        top: a.piece33.front, //a.piece17.back,
      },
      piece17: {
        left: a.piece5.left, //a.piece9.left,
        back: a.piece5.top, //a.piece9.bottom,
      },
      piece9: {
        left: a.piece17.left, //a.piece33.left,
        bottom: a.piece17.back, //a.piece33.front,
      },
      piece33: {
        left: a.piece9.left, //a.piece5.left,
        front: a.piece9.bottom, //a.piece5.top,
      },
      piece37: {
        left: a.piece41.left,
        top: a.piece41.front,
        front: a.piece41.bottom,
      },
      piece21: {
        left: a.piece37.left,
        top: a.piece37.front,
        back: a.piece37.top,
      },
      piece25: {
        left: a.piece21.left,
        bottom: a.piece21.back,
        back: a.piece21.top,
      },
      piece41: {
        left: a.piece25.left,
        bottom: a.piece25.back,
        front: a.piece25.bottom,
      },
    });
  };
  const RP = () => {
    setCube({
      ...cube,
      piece6: {
        right: a.piece18.right,
        top: a.piece18.back,
      },
      piece18: {
        right: a.piece10.right,
        back: a.piece10.bottom,
      },
      piece10: {
        right: a.piece34.right,
        bottom: a.piece34.front,
      },
      piece34: {
        right: a.piece6.right,
        front: a.piece6.top,
      },
      //     piece38: "piece22",
      //    front, right, top - back, right, top
      piece38: {
        right: a.piece22.right,
        front: a.piece22.top,
        top: a.piece22.back,
      },
      //     piece22: "piece26",
      //     back, right, top           back, bottom, right
      piece22: {
        right: a.piece26.right,
        back: a.piece26.bottom,
        top: a.piece26.back,
      },
      //     piece26: "piece42",
      //       back, bottom, right         bottom, front, right
      piece26: {
        right: a.piece42.right,
        back: a.piece42.bottom,
        bottom: a.piece42.front,
      },
      //     piece42: "piece38",
      //    bottom, front, right        front, right, top
      piece42: {
        right: a.piece38.right,
        bottom: a.piece38.front,
        front: a.piece38.top,
      },
    });
  };
  const R = () => {
    // piece6: "piece34",
    // right, top - right, front
    setCube({
      ...cube,
      piece6: {
        right: a.piece34.right,
        top: a.piece34.front,
      },
      //   piece18: "piece6",
      //right, back - right, top
      piece18: {
        right: a.piece6.right,
        back: a.piece6.top,
      },
      //   piece10: "piece18",
      // right, bottom - right, back
      piece10: {
        right: a.piece18.right,
        bottom: a.piece18.back,
      },
      //   piece34: "piece10",
      // right, front - right, bottom
      piece34: {
        right: a.piece10.right,
        front: a.piece10.bottom,
      },
      //   piece38: "piece42",
      // right, front, top - right, front, bottom
      piece38: {
        right: a.piece42.right,
        front: a.piece42.bottom,
        top: a.piece42.front,
      },
      //   piece22: "piece38",
      //  right, back, top - right, front, top
      piece22: {
        right: a.piece38.right,
        back: a.piece38.top,
        top: a.piece38.front,
      },
      //   piece26: "piece22",
      // right, back, bottom - right, back, top
      piece26: {
        right: a.piece22.right,
        back: a.piece22.top,
        bottom: a.piece22.back,
      },
      //   piece42: "piece26",
      // right, front, bottom - right, back, bottom
      piece42: {
        right: a.piece26.right,
        front: a.piece26.bottom,
        bottom: a.piece26.back,
      },
    });
  };
  const U = () => {
    setCube({
      ...cube,
      // piece36: "piece6",
      //top, front - right, top
      piece36: {
        top: a.piece6.top,
        front: a.piece6.right,
      },
      //   piece6: "piece20",
      //top, right - top, back
      piece6: {
        top: a.piece20.top,
        right: a.piece20.back,
      },
      //   piece20: "piece5",
      //top, back - top, left
      piece20: {
        top: a.piece5.top,
        back: a.piece5.left,
      },
      //   piece5: "piece36",
      //top, left - top, front
      piece5: {
        top: a.piece36.top,
        left: a.piece36.front,
      },
      //   piece38: "piece22",
      //top, front, right - top, right, back
      piece38: {
        top: a.piece22.top,
        front: a.piece22.right,
        right: a.piece22.back,
      },
      //   piece22: "piece21",
      //top, right, back - top, back, left
      piece22: {
        top: a.piece21.top,
        right: a.piece21.back,
        back: a.piece21.left,
      },
      //   piece21: "piece37",
      //top, back, left - top, front, left
      piece21: {
        top: a.piece37.top,
        back: a.piece37.left,
        left: a.piece37.front,
      },
      //   piece37: "piece38",
      //top, front, left - top, front, right
      piece37: {
        top: a.piece38.top,
        front: a.piece38.right,
        left: a.piece38.front,
      },
    });
  };
  const UP = () => {
    setCube({
      ...cube,
      // piece36: "piece5",
      //top, front - top, left
      piece36: {
        top: a.piece5.top,
        front: a.piece5.left,
      },
      // piece6: "piece36",
      //top, right - top, front
      piece6: {
        top: a.piece36.top,
        right: a.piece36.front,
      },
      // piece20: "piece6",
      //top, back - top, right
      piece20: {
        top: a.piece6.top,
        back: a.piece6.right,
      },
      // piece5: "piece20",
      //top, left - top, back
      piece5: {
        top: a.piece20.top,
        left: a.piece20.back,
      },
      // piece38: "piece37",
      //top, front, right - top, front, left
      piece38: {
        top: a.piece37.top,
        front: a.piece37.left,
        right: a.piece37.front,
      },
      // piece22: "piece38",
      //top, right, back - top, front, right
      piece22: {
        top: a.piece38.top,
        right: a.piece38.front,
        back: a.piece38.right,
      },
      // piece21: "piece22",
      //top, back, left - top, right, back
      piece21: {
        top: a.piece22.top,
        back: a.piece22.right,
        left: a.piece22.back,
      },
      // piece37: "piece21",
      //top, front, left - top, back, left
      piece37: {
        top: a.piece21.top,
        front: a.piece21.left,
        left: a.piece21.back,
      },
    });
  };
  const D = () => {
    setCube({
      ...cube,
      // piece40: "piece9",
      //bottom, front - bottom, left
      piece40: {
        bottom: a.piece9.bottom,
        front: a.piece9.left,
      },

      // piece9: "piece24",
      //bottom, left - bottom, back
      piece9: {
        bottom: a.piece24.bottom,
        left: a.piece24.back,
      },

      // piece24: "piece10",
      //bottom, back - bottom, right
      piece24: {
        bottom: a.piece10.bottom,
        back: a.piece10.right,
      },

      // piece10: "piece40",
      //bottom, right - bottom, front
      piece10: {
        bottom: a.piece40.bottom,
        right: a.piece40.front,
      },
      // piece42: "piece41",
      //bottom, front, right - bottom, front, left
      piece42: {
        bottom: a.piece41.bottom,
        front: a.piece41.left,
        right: a.piece41.front,
      },
      // piece41: "piece25",
      //bottom, front, left - bottom, left, back
      piece41: {
        bottom: a.piece25.bottom,
        front: a.piece25.left,
        left: a.piece25.back,
      },
      // piece25: "piece26",
      //bottom, left, back - bottom, right, back
      piece25: {
        bottom: a.piece26.bottom,
        left: a.piece26.back,
        back: a.piece26.right,
      },
      // piece26: "piece42",
      //bottom, right, back - bottom, front, right
      piece26: {
        bottom: a.piece42.bottom,
        right: a.piece42.front,
        back: a.piece42.right,
      },
    });
  };
  const DP = () => {
    setCube({
      ...cube,
      // piece40: "piece10",
      //bottom, front - bottom, right
      piece40: {
        bottom: a.piece10.bottom,
        front: a.piece10.right,
      },

      // piece9: "piece40",
      //bottom, left - bottom, front
      piece9: {
        bottom: a.piece40.bottom,
        left: a.piece40.front,
      },
      // piece24: "piece9",
      //bottom, back - bottom, left
      piece24: {
        bottom: a.piece9.bottom,
        back: a.piece9.left,
      },
      // piece10: "piece24",
      // bottom, right - bottom, back
      piece10: {
        bottom: a.piece24.bottom,
        right: a.piece24.back,
      },
      // piece42: "piece26",
      //bottom, front, right - bottom, right, back
      piece42: {
        bottom: a.piece26.bottom,
        front: a.piece26.right,
        right: a.piece26.back,
      },
      // piece41: "piece42",
      //bottom, front, left - bottom, front, right
      piece41: {
        bottom: a.piece41.bottom,
        front: a.piece42.right,
        left: a.piece42.front,
      },
      // piece25: "piece41",
      //bottom, left, back - bottom, front, left
      piece25: {
        bottom: a.piece41.bottom,
        left: a.piece41.front,
        back: a.piece41.left,
      },
      // piece26: "piece25",
      //bottom, right, back - bottom, left, back
      piece26: {
        bottom: a.piece25.bottom,
        right: a.piece25.back,
        back: a.piece25.left,
      },
    });
  };
  const B = () => {
    setCube({
      ...cube,
      // piece20: "piece18",
      //back, top - back, right
      piece20: {
        back: a.piece18.back,
        top: a.piece18.right,
      },
      // piece18: "piece24",
      //back, right - back, bottom
      piece18: {
        back: a.piece24.back,
        right: a.piece24.bottom,
      },
      // piece24: "piece17",
      //back, bottom - back, left
      piece24: {
        back: a.piece17.back,
        bottom: a.piece17.left,
      },
      // piece17: "piece20",
      //back, left - back, top
      piece17: {
        back: a.piece20.back,
        left: a.piece20.top,
      },
      // piece22: "piece26",
      //back, right, top - back, bottom, right
      piece22: {
        back: a.piece26.back,
        right: a.piece26.bottom,
        top: a.piece26.right,
      },
      // piece26: "piece25",
      //back, bottom, right - back, bottom, left
      piece26: {
        back: a.piece25.back,
        bottom: a.piece25.left,
        right: a.piece25.bottom,
      },
      // piece25: "piece21",
      //back, bottom, left - back, top, left
      piece25: {
        back: a.piece21.back,
        bottom: a.piece21.left,
        left: a.piece21.top,
      },
      // piece21: "piece22",
      //back, top, left - back, right, top
      piece21: {
        back: a.piece22.back,
        top: a.piece22.right,
        left: a.piece22.top,
      },
    });
  };
  const BP = () => {
    setCube({
      ...cube,
      // piece20: "piece17",
      //back, top - back, left
      piece20: {
        back: a.piece17.back,
        top: a.piece17.left,
      },
      // piece18: "piece20",
      //back, right - back, top
      piece18: {
        back: a.piece20.back,
        right: a.piece20.top,
      },
      // piece24: "piece18",
      //back, bottom - back, right
      piece24: {
        back: a.piece18.back,
        bottom: a.piece18.right,
      },
      // piece17: "piece24",
      //back, left - back, bottom
      piece17: {
        back: a.piece24.back,
        left: a.piece24.bottom,
      },
      // piece22: "piece21",
      //back, right, top - back, top, left
      piece22: {
        back: a.piece21.back,
        right: a.piece21.top,
        top: a.piece21.left,
      },
      // piece26: "piece22",
      //back, bottom, right - back, right, top
      piece26: {
        back: a.piece22.back,
        bottom: a.piece22.right,
        right: a.piece22.top,
      },
      // piece25: "piece26",
      //back, bottom, left - back, bottom, right
      piece25: {
        back: a.piece26.back,
        bottom: a.piece26.right,
        left: a.piece26.bottom,
      },
      // piece21: "piece25",
      //back, top, left - back, bottom, left
      piece21: {
        back: a.piece25.back,
        top: a.piece25.left,
        left: a.piece25.bottom,
      },
    });
  };
  const F = () => {
    setCube({
      ...cube,
      // piece36: "piece33",
      //front, top - front, left
      piece36: { front: a.piece33.front, top: a.piece33.left },
      // piece33: "piece40",
      //front, left - front, bottom
      piece33: { front: a.piece40.front, left: a.piece40.bottom },
      // piece40: "piece34",
      //front, bottom - front, right
      piece40: { front: a.piece34.front, bottom: a.piece34.right },
      // piece34: "piece36",
      //front, right - front, top
      piece34: { front: a.piece36.front, right: a.piece36.top },
      // piece38: "piece37",
      //front, right, top - front, left, top
      piece38: {
        front: a.piece37.front,
        right: a.piece37.top,
        top: a.piece37.left,
      },
      // piece37: "piece41",
      //front, left, top - front, bottom, left
      piece37: {
        front: a.piece41.front,
        left: a.piece41.bottom,
        top: a.piece41.left,
      },
      // piece41: "piece42",
      //front, bottom, left - front, bottom, right
      piece41: {
        front: a.piece42.front,
        bottom: a.piece42.right,
        left: a.piece42.bottom,
      },
      // piece42: "piece38",
      //front, bottom, right - front, right, top
      piece42: {
        front: a.piece38.front,
        bottom: a.piece38.right,
        right: a.piece38.top,
      },
    });
  };
  const FP = () => {
    setCube({
      ...cube,
      // piece36: "piece34",
      //front, top - front, right
      piece36: { front: a.piece34.front, top: a.piece34.right },
      // piece33: "piece36",
      //front, left - front, top
      piece33: { front: a.piece36.front, left: a.piece36.top },
      // piece40: "piece33",
      // front, left - front, left
      piece40: { front: a.piece33.front, bottom: a.piece33.left },
      // piece34: "piece40",
      //front, right - front, bottom
      piece34: { front: a.piece40.front, right: a.piece40.bottom },
      // piece38: "piece42",
      //front, right, top - front, bottom, right
      piece38: {
        front: a.piece42.front,
        right: a.piece42.bottom,
        top: a.piece42.right,
      },
      // piece37: "piece38",
      //front, left, top - front, right, top
      piece37: {
        front: a.piece38.front,
        left: a.piece38.top,
        top: a.piece38.right,
      },
      // piece41: "piece37",
      //front, bottom, left - front, left, top
      piece41: {
        front: a.piece37.front,
        bottom: a.piece37.left,
        left: a.piece37.top,
      },
      // piece42: "piece41",
      //front, bottom, right - front, bottom, left
      piece42: {
        front: a.piece41.front,
        bottom: a.piece41.left,
        right: a.piece41.bottom,
      },
    });
  };
  const M = () => {
    setCube({
      ...cube,
      // piece36: "piece20",
      // front, top - top, back
      piece36: {
        front: a.piece20.top,
        top: a.piece20.back,
      },
      // piece20: "piece24",
      //top, back - back, bottom
      piece20: {
        top: a.piece24.back,
        back: a.piece24.bottom,
      },
      // piece24: "piece40",
      //back, bottom - front, bottom
      piece24: { back: a.piece40.bottom, bottom: a.piece40.front },
      // piece40: "piece36",
      //front, bottom - front, top
      piece40: { front: a.piece36.top, bottom: a.piece36.front },
      // piece4: "piece16",
      // top - back
      piece4: { top: a.piece16.back },
      // piece16: "piece8",
      //back - bottom
      piece16: { back: a.piece8.bottom },
      // piece8: "piece32",
      //bottom - front
      piece8: { bottom: a.piece32.front },
      // piece32: "piece4",
      // front - top
      piece32: { front: a.piece4.top },
    });
  };
  const MP = () => {
    setCube({
      ...cube,
      // piece36: "piece40",
      // front, top - front, bottom
      piece36: { front: a.piece40.bottom, top: a.piece40.front },
      // piece20: "piece36",
      //top, back - front, top
      piece20: { top: a.piece36.front, back: a.piece36.top },
      // piece40: "piece24",
      //front, bottom - back, bottom
      piece40: { front: a.piece24.bottom, bottom: a.piece24.back },
      // piece24: "piece20",
      //back, bottom - top, back
      piece24: { back: a.piece20.top, bottom: a.piece20.back },
      // piece4: "piece32",
      // top - front
      piece4: { top: a.piece32.front },
      // piece16: "piece4",
      //back - top
      piece16: { back: a.piece4.top },
      // piece8: "piece16",
      //bottom -  back
      piece8: { bottom: a.piece16.back },
      // piece32: "piece8",
      // front - bottom
      piece32: { front: a.piece8.bottom },
    });
  };
  const EP = () => {
    setCube({
      ...cube,
      // piece34: "piece18",
      // front, right - back, right
      piece34: {
        front: a.piece18.right,
        right: a.piece18.back,
      },
      // piece18: "piece17",
      // back, right - back, left
      piece18: {
        back: a.piece17.left,
        right: a.piece17.back,
      },
      // piece17: "piece33",
      // back, left - front, left
      piece17: {
        back: a.piece33.left,
        left: a.piece33.front,
      },
      // piece33: "piece34",
      // front, left - front, right
      piece33: {
        front: a.piece34.right,
        left: a.piece34.front,
      },
      // piece32: "piece2",
      // front - right
      piece32: {
        front: a.piece2.right,
      },
      // piece2: "piece16",
      // right -  back
      piece2: {
        right: a.piece16.back,
      },
      // piece16: "piece1",
      // back - left
      piece16: {
        back: a.piece1.left,
      },
      // piece1: "piece32",
      // left - front
      piece1: {
        left: a.piece32.front,
      },
    });
  };
  const E = () => {
    setCube({
      ...cube,
      // piece34: "piece33",
      // front, right - front, left
      piece34: { front: a.piece33.left, right: a.piece33.front },
      // piece18: "piece34",
      // back, right - front, right
      piece18: { back: a.piece34.right, right: a.piece34.front },
      // piece17: "piece18",
      // back, left - back, right
      piece17: { back: a.piece18.right, left: a.piece18.back },
      // piece33: "piece17",
      // front, left - back, left
      piece33: { front: a.piece17.left, left: a.piece17.back },
      // piece32: "piece1",
      // front - left
      piece32: { front: a.piece1.left },
      // piece2: "piece32",
      // right - front
      piece2: { right: a.piece32.front },
      // piece16: "piece2",
      // back - right
      piece16: { back: a.piece2.right },
      // piece1: "piece16",
      // left - back
      piece1: { left: a.piece16.back },
    });
  };
  const S = () => {
    setCube({
      ...cube,
      // piece6: "piece5",
      // right, top - left, top
      piece6: {
        right: a.piece5.top,
        top: a.piece5.left,
      },
      // piece5: "piece9",
      // left, top - bottom, left
      piece5: {
        left: a.piece9.bottom,
        top: a.piece9.left,
      },
      // piece9: "piece10",
      // bottom, left - bottom, right
      piece9: {
        bottom: a.piece10.right,
        left: a.piece10.bottom,
      },
      // piece10: "piece6",
      // bottom, right - right, top
      piece10: {
        bottom: a.piece6.right,
        right: a.piece6.top,
      },
      // piece4: "piece1",
      // top - left
      piece4: {
        top: a.piece1.left,
      },
      // piece1: "piece8",
      // left - bottom
      piece1: {
        left: a.piece8.bottom,
      },
      // piece8: "piece2",
      // bottom - right
      piece8: {
        bottom: a.piece2.right,
      },
      // piece2: "piece4",
      // right - top
      piece2: {
        right: a.piece4.top,
      },
    });
  };
  const SP = () => {
    setCube({
      ...cube,
      // piece6: "piece10",
      // right, top - bottom, right
      piece6: { right: a.piece10.bottom, top: a.piece10.right },
      // piece5: "piece6",
      // left, top - right, top
      piece5: { left: a.piece6.top, top: a.piece6.right },
      // piece9: "piece5",
      // bottom, left - left, top
      piece9: { bottom: a.piece5.left, left: a.piece5.top },
      // piece10: "piece9",
      // bottom, right - bottom, left
      piece10: { bottom: a.piece9.left, right: a.piece9.bottom },
      // piece4: "piece2",
      // top - right
      piece4: { top: a.piece2.right },
      // piece1: "piece4",
      // left - top
      piece1: { left: a.piece4.top },
      // piece8: "piece1",
      // bottom - left
      piece8: { bottom: a.piece1.left },
      // piece2: "piece8",
      // right - bottom
      piece2: { right: a.piece8.bottom },
    });
  };

  return (
    <div>
      <section className="grid grid-cols-9 m-2">
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={L}>
          L
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={R}>
          R
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={U}>
          U
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={D}>
          D
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={B}>
          B
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={F}>
          F
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={M}>
          M
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={E}>
          E
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={S}>
          S
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={LP}>
          L{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={RP}>
          R{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={UP}>
          U{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={DP}>
          D{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={BP}>
          B{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={FP}>
          F{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={MP}>
          M{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={EP}>
          E{'\''}
        </button>
        <button className="w-6 h-6 bg-white m-0.5 font-bold" onClick={SP}>
          S{'\''}
        </button>
      </section>
      <div className="scene" id="scene">
        <div
          className="pivot centered"
          id="pivot"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="cube" id="cube">
            <div
              className="piece"
              id="piece1"
              style={{ transform: "rotateX(0deg) translateX(-2em);" }}
            >
              <div className="element left">
                <div className={`sticker ${cube.piece1.left}`} id="id110"></div>
              </div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece2"
              style={{ transform: "rotateX(0deg) translateX(2em);" }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece2.right}`}
                  id="id221"
                ></div>
              </div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece4"
              style={{ transform: "rotateX(0deg) translateY(-2em);" }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top">
                <div className={`sticker ${cube.piece4.top}`} id="id342"></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece8"
              style={{ transform: "rotateX(0deg) translateY(2em);" }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece8.bottom}`}
                  id="id483"
                ></div>
              </div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece16"
              style={{ transform: "rotateX(0deg) translateZ(-2em);" }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece16.back}`}
                  id="id5164"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece32"
              style={{ transform: "rotateX(0deg) translateZ(2em);" }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece32.front}`}
                  id="id6325"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece9"
              style={{
                transform: "rotateX(0deg) translateX(-2em) translateY(2em);",
              }}
            >
              <div className="element left">
                <div className={`sticker ${cube.piece9.left}`} id="id116"></div>
              </div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece9.bottom}`}
                  id="id196"
                ></div>
              </div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece6"
              style={{
                transform: "rotateX(0deg) translateX(2em) translateY(-2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece6.right}`}
                  id="id227"
                ></div>
              </div>
              <div className="element top">
                <div className={`sticker ${cube.piece6.top}`} id="id267"></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece20"
              style={{
                transform: "rotateX(0deg) translateY(-2em) translateZ(-2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top">
                <div className={`sticker ${cube.piece20.top}`} id="id348"></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece20.back}`}
                  id="id3208"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece40"
              style={{
                transform: "rotateX(0deg) translateY(2em) translateZ(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece40.bottom}`}
                  id="id489"
                ></div>
              </div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece40.front}`}
                  id="id4409"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece18"
              style={{
                transform: "rotateX(0deg) translateZ(-2em) translateX(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece18.right}`}
                  id="id51810"
                ></div>
              </div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece18.back}`}
                  id="id51610"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece33"
              style={{
                transform: "rotateX(0deg) translateZ(2em) translateX(-2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece33.left}`}
                  id="id63311"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece33.front}`}
                  id="id63211"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece5"
              style={{
                transform: "rotateX(0deg) translateX(-2em) translateY(-2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece5.left}`}
                  id="id1112"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top">
                <div className={`sticker ${cube.piece5.top}`} id="id1512"></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece10"
              style={{
                transform: "rotateX(0deg) translateX(2em) translateY(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece10.right}`}
                  id="id2213"
                ></div>
              </div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece10.bottom}`}
                  id="id21013"
                ></div>
              </div>
              <div className="element back"></div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece36"
              style={{
                transform: "rotateX(0deg) translateY(-2em) translateZ(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top">
                <div
                  className={`sticker ${cube.piece36.top}`}
                  id="id3414"
                ></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece36.front}`}
                  id="id33614"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece24"
              style={{
                transform: "rotateX(0deg) translateY(2em) translateZ(-2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece24.bottom}`}
                  id="id4815"
                ></div>
              </div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece24.back}`}
                  id="id42415"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece17"
              style={{
                transform: "rotateX(0deg) translateZ(-2em) translateX(-2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece17.left}`}
                  id="id51716"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece17.back}`}
                  id="id51616"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece34"
              style={{
                transform: "rotateX(0deg) translateZ(2em) translateX(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece34.right}`}
                  id="id63417"
                ></div>
              </div>
              <div className="element top"></div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece34.front}`}
                  id="id63217"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece21"
              style={{
                transform:
                  "rotateX(0deg) translateX(-2em) translateY(-2em) translateZ(-2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece21.left}`}
                  id="id1118"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top">
                <div
                  className={`sticker ${cube.piece21.top}`}
                  id="id1518"
                ></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece21.back}`}
                  id="id12118"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece42"
              style={{
                transform:
                  "rotateX(0deg) translateX(2em) translateY(2em) translateZ(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece42.right}`}
                  id="id2219"
                ></div>
              </div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece42.bottom}`}
                  id="id21019"
                ></div>
              </div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece42.front}`}
                  id="id24219"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece37"
              style={{
                transform:
                  "rotateX(0deg) translateY(-2em) translateZ(2em) translateX(-2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece37.left}`}
                  id="id33720"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top">
                <div
                  className={`sticker ${cube.piece37.top}`}
                  id="id3420"
                ></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece37.front}`}
                  id="id33620"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece26"
              style={{
                transform:
                  "rotateX(0deg) translateY(2em) translateZ(-2em) translateX(2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece26.right}`}
                  id="id42621"
                ></div>
              </div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece26.bottom}`}
                  id="id4821"
                ></div>
              </div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece26.back}`}
                  id="id42421"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece25"
              style={{
                transform:
                  "rotateX(0deg) translateZ(-2em) translateX(-2em) translateY(2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece25.left}`}
                  id="id51722"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece25.bottom}`}
                  id="id52522"
                ></div>
              </div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece25.back}`}
                  id="id51622"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
            <div
              className="piece"
              id="piece38"
              style={{
                transform:
                  "rotateX(0deg) translateZ(2em) translateX(2em) translateY(-2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece38.right}`}
                  id="id63423"
                ></div>
              </div>
              <div className="element top">
                <div
                  className={`sticker ${cube.piece38.top}`}
                  id="id63823"
                ></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece38.front}`}
                  id="id63223"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece41"
              style={{
                transform:
                  "rotateX(0deg) translateX(-2em) translateY(2em) translateZ(2em);",
              }}
            >
              <div className="element left">
                <div
                  className={`sticker ${cube.piece41.left}`}
                  id="id1124"
                ></div>
              </div>
              <div className="element right"></div>
              <div className="element top"></div>
              <div className="element bottom">
                <div
                  className={`sticker ${cube.piece41.bottom}`}
                  id="id1924"
                ></div>
              </div>
              <div className="element back"></div>
              <div className="element front">
                <div
                  className={`sticker ${cube.piece41.front}`}
                  id="id14124"
                ></div>
              </div>
            </div>
            <div
              className="piece"
              id="piece22"
              style={{
                transform:
                  "rotateX(0deg) translateX(2em) translateY(-2em) translateZ(-2em);",
              }}
            >
              <div className="element left"></div>
              <div className="element right">
                <div
                  className={`sticker ${cube.piece22.right}`}
                  id="id2225"
                ></div>
              </div>
              <div className="element top">
                <div
                  className={`sticker ${cube.piece22.top}`}
                  id="id2625"
                ></div>
              </div>
              <div className="element bottom"></div>
              <div className="element back">
                <div
                  className={`sticker ${cube.piece22.back}`}
                  id="id22225"
                ></div>
              </div>
              <div className="element front"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
