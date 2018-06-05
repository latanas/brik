/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
'use strict'

/// <reference path="renderer.ts" />
/// <reference path="renderer_wgl2_shader_program.ts" />

// The renderer draws pictures on the canvas using WebGL 2.
//
class RendererWGL2 implements Renderer {
  private width: number;
  private height: number;
  private shader: ShaderProgramWGL2;
  private gl: any;

  constructor() {
    let c = document.createElement( "canvas" );
    document.body.appendChild( c );

    this.gl = c.getContext( "webgl2" );
    if( !this.gl ) {
      console.log( "RendererWGL2: WebGL 2 context is not available." );
      return;
    }
    this.gl.clearColor( 0.5, 0.5, 0.5, 1.0 );
    this.gl.disable( this.gl.DEPTH_TEST );

    let onResize = ( e ) => {
      c.width = this.width = window.innerWidth;
      c.height = this.height = window.innerHeight;
      this.gl.viewport( 0, 0, this.gl.canvas.width, this.gl.canvas.height );
    };
    window.addEventListener( 'resize', onResize );
    onResize(null);

    let positionArrayBuffer = this.gl.createBuffer();
    this.gl.bindBuffer( this.gl.ARRAY_BUFFER, positionArrayBuffer );

    let p = [
      -0.5, 0,
      0, +0.5,
      +0.5, 0,
    ];
    this.gl.bufferData( this.gl.ARRAY_BUFFER, new Float32Array(p), this.gl.STATIC_DRAW );

    let vertexArray = this.gl.createVertexArray();
    this.gl.bindVertexArray( vertexArray );

    this.shader = new ShaderProgramWGL2( this.gl, "shader/vertex.glsl", "shader/fragment.glsl" );
  }

  render(): void {
    if( !this.shader.getProgram() ) {
      return;
    }
    this.gl.clear( this.gl.COLOR_BUFFER_BIT );
    this.gl.drawArrays( this.gl.TRIANGLES, 0, 3 );
  }

  animate( dt: number ): void {

  }
}
