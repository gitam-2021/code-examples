//
//  ForListRangePy.js
//  Tangle
//
//  Created by Bret Victor on 6/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//

window.addEvent('domready', function () {

    var model = {
        initialize: function () {
            this.range_start = 1;
            this.range_end = 5;
            this.range_step = 1;
            this.prog_output = "1 2 3 4";
        },
        update: function () {
            if (this.range_step == 0) {
                this.prog_output = "range() arg 3 must not be zero";
            } else if (this.range_start == this.range_end) {
                this.prog_output = "";
            }else if (this.range_start < this.range_end) {
                if (this.range_step < 0) {
                    this.prog_output = ""
                } else {
                    var out = "";
                    for (var i = this.range_start; i < this.range_end; i = i + this.range_step) {
                        out += i.toString() + " ";
                    }
                    this.prog_output = (out == "") ? "" : out; 
                } 
            } else if (this.range_start > this.range_end) {
                if (this.range_step > 0) {
                    this.prog_output = ""
                } else {
                    var out = "";
                    for (var i = this.range_start; i > this.range_end; i = i + this.range_step) {
                        out += i.toString() + " ";
                    }
                    this.prog_output = (out == "") ? "" : out; 
                }
            }
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "forListRange3PyExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
