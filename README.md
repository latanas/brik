
#### Install dependencies:

Remove any old versions of nodejs and npm.
Update to the latest version of node and npm:

```
sudo apt-get-install nodejs
npm install
```

You may need to do "ln -s /usr/bin/nodejs /usr/bin/node",
because there appears to be Debian/Ubuntu difference in the simlink name.

#### Build:

```
source ./brik.sh
webpack
```


#### Run:
http://www.atanaslaskov.com/brik/

Run locally:

```
python3 -m http.server
```

Then you can play at localhost:8000.
