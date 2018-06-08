/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/

import Vector from "./vector"
import Color from "./color"
import Gradient from "./gradient"
import Renderer from "./renderer"

// Render using HMTL5 canvas
//
export default class RendererCanvas implements Renderer{
  private context: CanvasRenderingContext2D;
  private width:   number;
  private height:  number;

  private angle:   number;
  private scale:   number;
  private origin:  Vector;

  private hasBackgroundImage: boolean;
  private backgroundImage: HTMLImageElement;

  constructor() {
    this.width  = window.innerWidth;
    this.height = window.innerHeight;
    this.scale  = Math.min( this.width, this.height );
    this.origin = new Vector( this.width / 2.0, this.height / 2.0 );

    var c = document.createElement( "canvas" );
    c.width  = this.width;
    c.height = this.height;
    document.body.appendChild(c);

    this.context = <CanvasRenderingContext2D> c.getContext("2d");
    if( !this.context ) {
      throw new Error("Canvas element is not supported.");
    }
    this.context.lineJoin = "round";
    this.context.lineCap = "round";

    window.addEventListener('resize', (e) => {
      c.width = this.width = window.innerWidth;
      c.height = this.height = window.innerHeight;
      this.scale = Math.min( this.width, this.height );
      this.origin = new Vector( this.width / 2.0, this.height / 2.0 );
    });

    this.angle = 0.0;

    this.hasBackgroundImage = false;
    this.backgroundImage    = <HTMLImageElement> (new Image());
    //this.backgroundImage.addEventListener("load", ()=>{ this.hasBackgroundImage = true; });
    //this.backgroundImage.src = ""
  }

  render(): void {
  }

  animate( dt: number ): void {
  }

  public style(color: Color | Gradient, thickness: number): void {
    if( color instanceof Color ) {
      this.context.strokeStyle = color.css();
    }
    else {
      var g: Gradient = <Gradient> color;
      var s = this.scale;
      var o = this.origin;

      var linearGradient = this.context.createLinearGradient(
        Math.round(g.start.x*s + o.x), Math.round(g.start.y*s + o.y),
        Math.round(g.end.x*s + o.x), Math.round(g.end.y*s + o.y)
      );
      linearGradient.addColorStop(0, g.startColor.css());
      linearGradient.addColorStop(1, g.endColor.css());
      this.context.strokeStyle = linearGradient;
    }
    this.context.lineWidth = thickness;
  }

  public rotation(angle: number): void {
    this.angle = angle;
  }

  public background( position: Vector, scale: number ): void {
    var o = this.origin;

    this.context.setTransform (1.0, 0.0, 0.0, 1.0, 0.0, 0.0 );
    this.context.translate( o.x, o.y );
    this.context.rotate( -1.0*this.angle );
    this.context.translate( -1.0*o.x, -1.0*o.y );

    if( !this.hasBackgroundImage ) {
      this.context.clearRect( 0, 0, this.width, this.height );
      return;
    }

    var nx = this.backgroundImage.width * scale;
    var ny = this.backgroundImage.height * scale;
    var xStart = position.x % nx;
    var yStart = position.y % ny;

    if( xStart>0 ) xStart = xStart-nx;
    if( yStart>0 ) yStart = yStart-ny;;

    for(var x=xStart; x<this.width; x+=nx) {
      for(var y=yStart; y<this.height; y+=ny) {
        this.context.drawImage(this.backgroundImage, x, y, nx, ny);
      }
    }
  }

  public polyline( points: Vector[] ): void {
    if( !points.length ) {
      return;
    }
    var s = this.scale;
    var o = this.origin;

    this.context.beginPath();
    this.context.moveTo( points[0].x*s + o.x, points[0].y*s + o.y );

    for( var i=1; i<points.length; i++) {
        this.context.lineTo( points[i].x*s + o.x, points[i].y*s + o.y );
    }
    this.context.stroke();
  }

  public marker( position: Vector, size: number, turn: number ): void {
    var s = this.scale;
    var o = this.origin;

    this.context.lineCap = "butt";
    this.context.beginPath();

    this.context.arc( position.x*s + o.x, position.y*s + o.y, size, 0, turn*2.0*Math.PI );
    this.context.stroke();
    this.context.lineCap = "round";
  }
}
