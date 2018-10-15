/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/brick/
*/
"use strict"

import Renderer from "./renderer"
import Color from "./color";
import Gradient from './gradient'
import GameObject from "./game_object";
import Vector from "./vector";
import VectorAreal from "./vector_areal";

export default class GameObjectPlayer implements GameObject {
  private renderer: Renderer;
  private color: Color = new Color(0.8, 0.5, 0.5, 0.5);
  private position: VectorAreal = new VectorAreal(0.0, 0.3, 0);

  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }

  render(): void {
      this.renderer.style(this.color, 3);
      this.renderer.marker(this.position, 30, 1.0);
  }

  animate( dt: number ): void {
  }

  perceive( another: any ): void {
  }

  spawn(): GameObject[] {
      return [];
  }

  remove(): void {
  }

  getPosition(): VectorAreal {
      return this.position;
  }
  getNearestPosition( position: Vector ) {
      return this.position;
  }

  getPreceiveDistance(): number {
      return 0;
  }

  isAlive(): boolean {
      return true;
  }

  isPerceptive(): boolean {
      return false;
  }
}
