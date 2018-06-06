/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
"use strict"

import DataFile from "./data_file"

// The shader program class loads and compiles shaders.
//
export default class ShaderProgramWgl {
  private gl: any;
  private program: any;

  constructor( gl, urlVertexShader, urlFragmentShader ) {
    this.gl = gl;
    this.program = null;

    new DataFile( urlVertexShader, ( vertexShaderSource ) => {
      new DataFile( urlFragmentShader, ( fragmentShaderSource ) => {
        this.program = this.linkShaderProgram([
          this.compileVertexShader( vertexShaderSource ),
          this.compileFragmentShader( fragmentShaderSource )
        ]);
        this.onProgramLinked();
      });
    });
  }

  getProgram() {
    return this.program;
  }

  onProgramLinked() {
    let positionAttribute = this.gl.getAttribLocation( this.program, "a_position" );
    this.gl.enableVertexAttribArray( positionAttribute );

    let size = 2;
    let type = this.gl.FLOAT;
    let normalize = false;
    let stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    let offset = 0;        // start at the beginning of the buffer

    this.gl.vertexAttribPointer( positionAttribute, size, type, normalize, stride, offset );
    this.gl.useProgram( this.program );
  }

  compileShader( source, type ) {
    let shader = this.gl.createShader( type );
    this.gl.shaderSource( shader, source );
    this.gl.compileShader( shader );

    if( !this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS) ) {
      console.log( "Failed to compile shader: " + this.gl.getShaderInfoLog( shader ) );
    }
    return shader;
  }

  compileVertexShader( source ) {
    return this.compileShader( source, this.gl.VERTEX_SHADER );
  }

  compileFragmentShader( source ) {
    return this.compileShader( source, this.gl.FRAGMENT_SHADER );
  }

  linkShaderProgram( shader_list ) {
    let program = this.gl.createProgram();

    for( let shader of shader_list ) {
      this.gl.attachShader( program, shader );
    }
    this.gl.linkProgram( program );

    if( !this.gl.getProgramParameter( program, this.gl.LINK_STATUS )) {
      console.log( "Failed to link shaders: " + this.gl.getProgramInfoLog( program ) );
    }
    return program;
  }
}
