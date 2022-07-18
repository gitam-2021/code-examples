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
            this.r = 50;
            this.x = 0;
            this.y = 0;
            this.prog_output = `<svg width="150" height="150" viewBox="-75 -75 150 150" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
            <g stroke-width="2" transform="scale(0.5 0.5)">
              <g>
                <rect x="-150.0" y="-150.0" width="300" height="300" fill="white" stroke="#ddd" />
                <line x1="-150" y1="0" x2="150" y2="0" stroke="#ddd" />
                <line x1="0" y1="-150" x2="0" y2="150" stroke="#ddd" />
              </g>
              <circle cx="0" cy="0" r="50" transform="translate(100 0)" />
            </g>
          </svg>`;
        },
        update: function () {
            
        prefix = `<svg width="150" height="150" viewBox="-75 -75 150 150" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
  <g stroke-width="2" transform="scale(0.5 0.5)">
    <g>
      <rect x="-150.0" y="-150.0" width="300" height="300" fill="white" stroke="#ddd" />
      <line x1="-150" y1="0" x2="150" y2="0" stroke="#ddd" />
      <line x1="0" y1="-150" x2="0" y2="150" stroke="#ddd" />
    </g>
    <circle cx="0" cy="0" r="`;
    // radius
    sub1 = `" transform="translate(`;
    // x
    sub2 = ` `;
    // y
    sub3 = `)" />
            </g>
            </svg>`
        this.prog_output = prefix + this.r + sub1 + this.x + sub2 + this.y + sub3;
        }
    };
    
    for (var i = 1; ; i++) {
        var id = "circlePyExample" + ((i > 1) ? i : "");
        var element = document.getElementById(id);
        if (!element) { break; }
        new Tangle(element,model);
    }
    
});
