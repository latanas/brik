/*
  Project: Brik
  Author:  Copyright (C) 2018, Atanas Laskov

  License: BSD license, see LICENSE.md for more details.

  http://www.atanaslaskov.com/brik/
*/

// Load a data file from the specified server location.
//
class DataFile {
  constructor( location, onLoaded ) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if( (xhr.readyState == 4) && (xhr.status == 200) ) {
        onLoaded( xhr.responseText );
      }
    }
    xhr.open( "GET", location, true );
    xhr.send();
  }
}
