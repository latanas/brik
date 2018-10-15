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

export default class GameObjectBrick implements GameObject {
  private renderer: Renderer;
  private gradient: Gradient = new Gradient();
  private polygon: Vector[] = [
    new Vector(+0.01, +0.01),
    new Vector(+0.01, -0.01),
    new Vector(-0.01, -0.01),
    new Vector(-0.01, +0.01),
    new Vector(+0.01, +0.01),
  ];

  constructor(renderer: Renderer) {
    this.renderer = renderer;
    this.gradient.start = new Vector(0.0, 0.0);
    this.gradient.startColor = new Color(0.5, 0.5, 0.0, 1.0);
    this.gradient.end = new Vector(0.0, 0.01);
    this.gradient.endColor = new Color(0.1, 0.5, 0.0, 1.0);
  }

  render(): void {
    this.renderer.style(this.gradient, 3);
    this.renderer.polyline(this.polygon);
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
      return new VectorAreal();
  }
  getNearestPosition( position: Vector ) {
      return new Vector();
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