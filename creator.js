function createGateSessionsLogSource (execlib, GateBaseLogSource) {
  var lib = execlib.lib;

  function GateSessionsLogSource (gate, conf) {
    GateBaseLogSource.call(this, gate, conf);
    this.sessionEventListener = this.gate.sessionEvent.attach(this.onSessionEvent.bind(this));
  }
  lib.inherit(GateSessionsLogSource, GateBaseLogSource);
  GateSessionsLogSource.prototype.destroy = function () {
    if (this.sessionEventListener) {
      this.sessionEventListener.destroy();
    }
    this.sessionEventListener = null;
    GateBaseLogSource.prototype.destroy.call(this);
  };

  GateSessionsLogSource.prototype.onSessionEvent = function (evntobj) {
    //console.log('eventObj', evntobj);
    this.fireLogEvent(evntobj);
  };

  return GateSessionsLogSource;
}
module.exports = createGateSessionsLogSource;