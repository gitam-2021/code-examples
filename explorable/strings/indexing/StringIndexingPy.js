//
//  StringIndexingPy.js
//  Tangle
//
//  Created by Bret Victor on 6/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//

window.addEvent('domready', function () {

    var model = {
        initialize: function () {
            this.example_string = "Thavaasmi"  // 9 char length
            this.string_length = 9;
            this.string_index = -1;
            this.prog_output = "i";
        },
        update: function () {
            if (this.string_index >= 0) {
                if (this.string_index >= 9) {
                    this.prog_output = "IndexError: string index out of range";
                } else {
                this.prog_output = this.example_string[this.string_index];
                }
            } else {
                if(this.string_index <= -10) {
                    this.prog_output = "IndexError: string index out of range";
                } else {
                    this.prog_output = this.example_string[this.string_length + this.string_index];
                }
            }
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "StringIndexingPyExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
