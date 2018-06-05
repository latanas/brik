
#### Install dependencies:

Remove any old versions on nodejs and npm.
Update to the latest node and npm:

```
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
npm install
```

You may need to do "ln -s /usr/bin/nodejs /usr/bin/node",
because there appears to be Debian/Ubuntu difference in the simlink name.

#### Build:

```
source ./brik.sh
gulp
```

#### Unit test:

```
gulp test
```

#### Run:
http://www.atanaslaskov.com/brik/

Run locally:

```
python3 -m http.server
```

Then you can play at localhost:8000.
