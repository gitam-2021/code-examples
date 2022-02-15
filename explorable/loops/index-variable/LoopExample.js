//
//  CookieExample.js
//  Tangle
//
//  Created by Bret Victor on 6/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//

window.addEvent('domready', function () {

    var model = {
        initialize: function () {
            this.condition_max_value = 5;
            this.increment_step = 1;
            this.index_var_change = 1
            this.prog_output = "1 3 5";
        },
        update: function () {
            var out = "";
            for (var i = 0; i < this.condition_max_value; i = i + this.increment_step) {
                i = i + this.index_var_change;
                out += i.toString() + " ";
            }
            this.prog_output = out;
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "forLoopExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
