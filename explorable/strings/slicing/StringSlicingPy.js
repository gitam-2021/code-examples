//
//  StringSlicingPy.js
//  Tangle
//
//  Created by Bret Victor on 6/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//

window.addEvent('domready', function () {

    var model = {
        initialize: function () {
            this.book_name = "Thavaasmi";
            this.book_title = "I-belong-to-you"; // len = 15
            this.book_title_len = 15;
            
            this.string_begin = 0;
            this.string_end = 20;
            this.slicing_output = "I-belong-to-you";
            
            this.string_only_end = 20;
            this.only_end_ouput = "I-belong-to-you";
            
            this.string_only_begin = 0;
            this.only_begin_ouput = "I-belong-to-you";
            
            this.prog_output = "<br><br>" + "Thavaasmi" + "<br>" + this.slicing_output + "<br>" + this.only_end_ouput + "<br>" + this.only_begin_ouput;
            
        },
        update: function () {

            //
            // update slicing output
            //
            this.slicing_output = ""
            
            start = this.string_begin;
            if (start < 0) { 
                start += this.book_title_len;
                if (start < 0 ) {start = 0;}
            }

            end = this.string_end;
            if (end < 0) { 
                end +=  this.book_title_len;
                if (end < 0 ) {end = 0;}
            }

            for(var i = start; i < end; i++ ) {
                if (i >= this.book_title_len) {
                    break;
                }
                this.slicing_output += this.book_title[i];
            }

            //
            // update slicing with only :end
            //
            this.only_end_ouput = ""

            start = 0;

            end = this.string_only_end;
            if (end < 0) { 
                end +=  this.book_title_len;
                if (end < 0) {end = 0;}
            }

            for(var i = start; i < end; i++ ) {
                if (i >= this.book_title_len) {
                    break;
                }
                this.only_end_ouput += this.book_title[i];
            }

            //
            // update slicing with only begin:
            //
            this.only_begin_ouput = ""

            start = this.string_only_begin;
            if (start < 0) { 
                start += this.book_title_len; 
                if (start < 0 ) {start = 0;}
            }

            end = this.book_title_len

            for(var i = start; i < end; i++ ) {
                if (i >= this.book_title_len) {
                    break;
                }
                this.only_begin_ouput += this.book_title[i];
            }

            this.prog_output = "<br><br>" + "Thavaasmi" + "<br>" + this.slicing_output + "<br>" + this.only_end_ouput + "<br>" + this.only_begin_ouput
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "StringSlicingPyExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
