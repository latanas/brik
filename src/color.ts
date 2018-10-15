/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
"use strict"

// Colour in RGBA fromat
//
export default class Color{
  public r: number;
  public g: number;
  public b: number;
  public a: number;

  constructor(r: number = 1.0, g: number = 1.0, b: number = 1.0, a: number = 1.0) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  // Make a CSS color string
  public css(): string {
    var r = this.componentRGB(this.r);
    var g = this.componentRGB(this.g);
    var b = this.componentRGB(this.b);
    var a = this.componentAlpha(this.a);

    return `rgba(${r},${g},${b},${a})`;
  }

  // RGB components are integers mapped to the range [0, 255]
  private componentRGB(n: number): number {
    return Math.round( Math.max(0.0, Math.min(1.0, n)) * 255.0 );
  }

  // Alpha component is mapped to the range [0.0, 1.0]
  private componentAlpha(n: number): number {
    return Math.max(0.0, Math.min(1.0, n));
  }
}
