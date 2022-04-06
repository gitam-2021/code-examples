//
//  OnePatternPy.js
//

window.addEvent('domready', function () {

    var model = {
        initialize: function () {
            this.stars_start = 5;
            this.stars_end = 0;
            this.stars_step = -1;
            
            this.count_start = 1;
            this.count_end = 2; // starting stars_start + 1
            this.count_step = 1;
            

            this.prog_output = "*****\n****\n***\n**\n*\n";
        },
        update: function () {
            if (this.stars_step == 0) {
                this.prog_output = "range() arg 3 must not be zero";
            } else if (this.stars_start == this.stars_end) {
                this.prog_output = "";
            } else if (this.stars_start < this.stars_end) {
                if (this.stars_step < 0) {
                    this.prog_output = ""
                } else {
                    // Increasing count of stars
                    if (this.count_step == 0) {
                        this.prog_output = "range() arg 3 must not be zero";
                    } else {
                        var out = "";
                        for (var i = this.stars_start; i < this.stars_end; i = i + this.stars_step) {
                            this.count_end = i + 1;
                            if (this.count_start == this.count_end) {
                                // out = "";
                            } else if (this.count_start < this.count_end) {
                                if (this.count_step < 0) {
                                    // out = "";
                                } else {
                                    for(var j = this.count_start; j < this.count_end; j = j + this.count_step) {
                                        out += "*";
                                    }
                                    out += "<br>";
                                }
                            } else if (this.count_start > this.count_end) {
                                if (this.count_step > 0) {
                                    // out = "";
                                } else {
                                    for(var j = this.count_start; j > this.count_end; j = j + this.count_step) {
                                        out += "*";
                                    }
                                    out += "<br>";
                                }

                            }
                        }
                        this.prog_output = (out == "") ? "" : out; 
                    }
                } 
            } else if (this.stars_start > this.stars_end) {
                if (this.stars_step > 0) {
                    this.prog_output = ""
                } else {
                    // decreasing count of stars
                    if (this.count_step == 0) {
                        this.prog_output = "range() arg 3 must not be zero";
                    } else {
                        var out = "";
                        for (var i = this.stars_start; i > this.stars_end; i = i + this.stars_step) {
                            this.count_end = i + 1;
                            if (this.count_start == this.count_end) {
                                // out = "";
                            } else if (this.count_start < this.count_end) {
                                if (this.count_step < 0) {
                                    // out = "";
                                } else {
                                    for(var j = this.count_start; j < this.count_end; j = j + this.count_step) {
                                        out += "*";
                                    }
                                    out += "<br>";
                                }
                            } else if (this.count_start > this.count_end) {
                                if (this.count_step > 0) {
                                    // out = "";
                                } else {
                                    for(var j = this.count_start; j > this.count_end; j = j + this.count_step) {
                                        out += "*";
                                    }
                                    out += "<br>";
                                }

                            }
                        }
                        this.prog_output = (out == "") ? "" : out; 
                    }
                }
            }
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "onePatternExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
