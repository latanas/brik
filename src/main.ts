/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brick/
*/
"use strict"

import Game from "./game"
import RendererWgl from "./renderer_wgl"
import RendererCanvas from "./renderer_canvas"

window.addEventListener("load", () => {
  let renderer = null;

  try {
    renderer = new RendererWgl();
  }
  catch( error ) {
    console.log(error);
    renderer = new RendererCanvas();
  }

  let game = new Game( renderer );
  game.actionFrame();
});

