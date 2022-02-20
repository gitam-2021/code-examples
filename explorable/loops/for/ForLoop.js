//
//  ForExample.js
//  Tangle
//
//  Created by Bret Victor on 6/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//

window.addEvent('domready', function () {

    var model = {
        initialize: function () {
            this.initialize_step = 1;
            this.condition_max_value = 5;
            this.increment_step = 1;
            this.prog_output = "1 2 3 4";
        },
        update: function () {
            if (this.increment_step != 0) {
                var out = "";
                for (var i = this.initialize_step; i < this.condition_max_value; i = i + this.increment_step) {
                    out += i.toString() + " ";
                }
                this.prog_output = (out == "") ? "Soonyam" : out; 
            } else {
                if (this.initialize_step < this.condition_max_value) {
                    // infinite loop
                    var out = "";
                    var count = 0;
                    for (var i = this.initialize_step; count < 3; count = count + 1) {
                        out += i.toString() + " ";
                    }
                    out += "... keeps on printing"
                    this.prog_output = out;
                } else {
                    this.prog_output = "Soonyam"
                }

            }
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "forLoopExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
