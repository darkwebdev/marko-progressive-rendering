module.exports = require('marko-widgets').defineWidget({
    init: function(widgetConfig) {
        this.getEl('message').innerHTML = 'Behavior should be Attached (click me)';
    },

    onClick: function() {
        this.el.style.backgroundColor = '#2c3e50';
        this.getEl('message').innerHTML = 'Clicked!';
    }
});
