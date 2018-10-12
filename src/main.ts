/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brick/
*/
"use strict"

import Game from "./game"
import RendererCanvas from "./renderer_canvas"

window.addEventListener("load", () => {
  let renderer = new RendererCanvas();
  let game = new Game( renderer );
  game.actionFrame();
});
