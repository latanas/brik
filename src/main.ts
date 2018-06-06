/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brick/
*/
"use strict"

import Game from "./game"
import RendererWgl from "./renderer_wgl"

window.addEventListener("load", () => {
  var g = new Game( new RendererWgl() );
  g.actionFrame();
});
