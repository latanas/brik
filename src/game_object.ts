/*
  Project: Brik
  Author:  Copyright (C) 2015, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/golden/
*/
"use strict"

import Vector from "./vector"
import VectorAreal from "./vector_areal"
import Renderer from "./renderer"

// Abstract game object
//
export default interface GameObject {
  animate( dt: number ): void;
  perceive( another: any ): void;
  spawn(): GameObject[];
  remove(): void;

  getPosition(): VectorAreal;
  getNearestPosition( position: Vector );
  getPreceiveDistance(): number;

  isAlive(): boolean;
  isPerceptive(): boolean;
}
