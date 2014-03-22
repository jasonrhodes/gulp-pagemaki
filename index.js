var Buffer = require("buffer").Buffer;
var through = require("through");

/**
 * Return a file handling function that can 
 * be piped to from within a gulp workflow
 * 
 * @return {[type]} [description]
 */
Pagemaki.prototype.stream = function () {

  var self = this;

  function write(file) {

    var stream = this;

    self.make(file._contents.toString(), function (err, made) {
      file._contents = new Buffer(made);
      stream.queue(file);
    });
    
  }

  return through(write);

};