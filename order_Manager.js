var plugin = function(options) {
    var seneca = this;
    /**
     * Sends an email using a template email.
     */
    seneca.add({area: "email", action: "send", template: "*"}, function(args, done) {
  // TODO: More code to come.
    });
    
    /**
     * Sends an email including the content.
     */
    seneca.add({area: "email", action: "send"}, function(args, done) {
  // TODO: More code to come.
    });
  };