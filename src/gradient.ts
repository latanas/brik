/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/
"use strict"

import Vector from "./vector"
import Color from "./color"

// Gradient between two colors
//
export default class Gradient {
  public start: Vector;
  public startColor: Color;

  public end: Vector;
  public endColor: Color;
}