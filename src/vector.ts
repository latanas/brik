/*
  Project: Brick
  Author:  Copyright (C) 2015, Atanas Laskov

  License: BSD license, see LICENSE for more details.

  http://www.atanaslaskov.com/brick/
*/
"use strict"

// Cartesian 2d coordinate (x;y)
//
export default class Vector {
  public x: number;
  public y: number;

  constructor(x:number =0.0, y:number =0.0) {
    this.x = x;
    this.y = y;
  }

  public set(v: Vector) {
    this.x = v.x;
    this.y = v.y;
  }

  public copy(): Vector {
    return new Vector(this.x, this.y);
  }

  public distance(): number {
    return Math.sqrt( this.x*this.x + this.y*this.y );
  }

  public angle(): number {
    return Math.atan2(this.y, this.x);
  }

  static plus(a: Vector, b: Vector): Vector {
    return new Vector( a.x+b.x, a.y+b.y );
  }

  static minus(a: Vector, b: Vector): Vector {
    return new Vector( a.x-b.x, a.y-b.y );
  }

  static scale(v: Vector, n: number) {
    return new Vector( v.x*n, v.y*n );
  }

  static norm(v: Vector) {
    var d: number = v.distance();
    return new Vector( v.x/d, v.y/d );
  }
}
