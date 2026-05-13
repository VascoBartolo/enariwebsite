'use strict';
// Patches fs.readlink to convert EISDIR → EINVAL on Windows systems
// where readlink incorrectly returns EISDIR for regular files.
const fs = require('fs');

const _readlink = fs.readlink.bind(fs);
fs.readlink = function (filePath, options, callback) {
  if (typeof options === 'function') { callback = options; options = null; }
  _readlink(filePath, options || {}, function (err, link) {
    if (err && err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${filePath}'`);
      e.errno = -4071;
      e.code = 'EINVAL';
      e.syscall = 'readlink';
      e.path = filePath;
      return callback(e);
    }
    callback(err, link);
  });
};

const _readlinkSync = fs.readlinkSync.bind(fs);
fs.readlinkSync = function (filePath, options) {
  try {
    return _readlinkSync(filePath, options);
  } catch (err) {
    if (err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${filePath}'`);
      e.errno = -4071;
      e.code = 'EINVAL';
      e.syscall = 'readlink';
      e.path = filePath;
      throw e;
    }
    throw err;
  }
};

if (fs.promises) {
  const _readlinkAsync = fs.promises.readlink.bind(fs.promises);
  fs.promises.readlink = async function (filePath, options) {
    try {
      return await _readlinkAsync(filePath, options);
    } catch (err) {
      if (err.code === 'EISDIR') {
        const e = new Error(`EINVAL: invalid argument, readlink '${filePath}'`);
        e.errno = -4071;
        e.code = 'EINVAL';
        e.syscall = 'readlink';
        e.path = filePath;
        throw e;
      }
      throw err;
    }
  };
}
