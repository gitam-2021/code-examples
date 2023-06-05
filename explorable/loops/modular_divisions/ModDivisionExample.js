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
            this.Numerator_step = 12;
            this.Denomintor_step = 6;
            this.prog_output = "0";
        },
        update: function () {
                var out = "";
                var i = this.Numerator_step;
                var j = i%this.Denomintor_step;
                out = j.toString();
                this.prog_output = (out == "") ? "Soonyam" : out; 
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "ModDivisionExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
