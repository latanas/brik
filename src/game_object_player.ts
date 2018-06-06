/*
  Project: Brik
  Author:  Copyright (C) 2016, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/golden/
*/
"use strict"

import Vector from "./vector"
import VectorAreal from "./vector_areal"
import GameObject from "./game_object"
import Renderer from "./renderer"

// Creature controlled by the player
//
export default class GameObjectPlayer implements GameObject {
  constructor( renderer: Renderer ) {}

  animate( dt: number ): void {}
  perceive( another: any ): void {};
  spawn(): GameObject[] { return []; };
  remove(): void {};

  getPosition(): VectorAreal { return new VectorAreal(); };
  getNearestPosition( position: Vector ) { return new Vector(); };
  getPreceiveDistance(): number { return 1; };

  isAlive(): boolean { return true; };
  isPerceptive(): boolean { return true; };
}
