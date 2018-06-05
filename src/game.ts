/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brick/
*/

/// <reference path="clock.ts" />
/// <reference path="renderer.ts" />

// Game manages the dynamic objects
//
class Game {
  private renderer: Renderer;
  private clock: Clock;
  private isPaused: boolean;

  constructor( renderer: Renderer ) {
    this.renderer  = renderer;
    this.clock     = new Clock();
    this.isPaused  = false;
  }

  // Single action frame of the game
  //
  actionFrame = () => {
    var dt = this.clock.tick();

    if( !this.isPaused ) {
      this.render();
      this.animate(dt);
    }
    window.requestAnimationFrame( this.actionFrame );
  }

  // Make a picture
  //
  private render() {
    this.renderer.render();
  }

  // Make things move
  //
  private animate( dt: number ) {
    this.renderer.animate(dt);
  }
}
