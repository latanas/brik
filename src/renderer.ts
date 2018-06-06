/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
"use strict"

// The renderer draws pictures on the canvas.
//
export default interface Renderer {
  render(): void;
  animate( dt: number ): void;
}
