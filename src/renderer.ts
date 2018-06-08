/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
"use strict"

import Vector from "./vector"
import Color from "./color"
import Gradient from "./gradient"

// The renderer draws pictures on the canvas.
//
export default interface Renderer {
  render(): void;
  animate( dt: number ): void;

  style( color: Color | Gradient, thickness: number ): void;
  rotation( angle: number ): void;
  background( position: Vector, scale: number ): void;
  polyline( points: Vector[] ): void;
  marker( position: Vector, size: number, turn: number ): void;
}
