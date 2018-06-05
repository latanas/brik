/*
  Project: Brik
  Author:  Copyright (C) 2015, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brick/
*/

/// <reference path="game.ts" />
/// <reference path="renderer_wgl2.ts" />

window.addEventListener("load", () => {
  var g = new Game( new RendererWGL2() );
  g.actionFrame();
});
