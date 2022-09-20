function createLib (execlib) {
  'use strict';
  return execlib.loadDependencies('client', ['allex:gatebase:logsource'], require('./creator').bind(null, execlib));
}
module.exports = createLib;