/*
  Project: Brik
  Author:  Copyright (C) 2015, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
"use strict"

import Clock from "./clock"
import Vector from "./vector"
import Renderer from "./renderer"
import VectorAreal from "./vector_areal"
import SlotList from "./slot_list"
import GameObject from "./game_object"
import GameObjectPlayer from "./game_object_player"
import GameObjectBall from "./game_object_ball";
import GameObjectBrick from "./game_object_brick";

// Game manages the dynamic objects
//
export default class Game {
  private renderer: Renderer;
  private clock: Clock;
  private isPaused: boolean;

  private objects: SlotList;

  constructor( renderer: Renderer ) {
    this.renderer = renderer;
    this.clock    = new Clock();
    this.isPaused = false;

    this.objects = new SlotList([
      new GameObjectPlayer(renderer),
      new GameObjectBall(renderer),
      new GameObjectBrick(renderer)
    ]);
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

    this.objects.each( (obj: GameObject, id:number) => {
      obj.render();
    });
  }

  // Make things move
  //
  private animate( dt: number ) {
    this.renderer.animate(dt);

    this.objects.each( (obj: GameObject, id:number) => {

      if( !obj.isAlive() )
      {
        obj.remove();
        this.objects.remove(id);
        return;
      }

      obj.animate(dt);

      var pendingObjects: GameObject[] = obj.spawn();
      while( pendingObjects.length ) this.spawn( pendingObjects.pop() );

      if( obj.isPerceptive() ) this.perceive(obj, id);
    });
  }

  // Object perceives the world
  //
  perceive(obj: GameObject, id: number)
  {
    let pos: Vector = obj.getPosition();

    this.objects.each( (objPercept: GameObject, k:number) => {
      if( (id == k) || !objPercept ) return;

      let distance: number =
        Vector.minus( pos, objPercept.getNearestPosition(pos) ).distance();

      if( distance < obj.getPreceiveDistance() ) {
        obj.perceive( objPercept );
      }
    });
  }

  // Spawn a new object
  //
  spawn( obj: GameObject ) {
    this.objects.enlist(obj);
  }
}
