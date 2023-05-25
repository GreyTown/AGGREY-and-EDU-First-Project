So, in this, our first project together, I will start with a very basic static webpage using HTML + CSS.
The idea is to begin with a very simple LAYOUT and litlle by little start adding more elements,
better CSS and Javascript.
I did a basic layout with: a HEADER, a NAV-BAR, 4 MAIN SECTIONS (ONE OF THEM IS A FORM) + AN ASIDE SECTION (THIS IS NOT VISIBLE YET, ONLY THE MARKUP),AND FINALLY A FOOTER.
So, until now it's just the markup and a very basic CSS.
We can start here and begin adding things, maybe re-style a button here, changing colors, adding images,
We also can use the 3 secions in different layouts (to practise float-flexbox-grid).
Improve the FORM.
Add more links (internal and externals).
Add Icons, sections with audio and video.
As we evolve, we can start adding SCRIPTS and practise the DOM and how is working with APIs.


/* DON'T MIND THIS CODE I'M JUST KEEPING HERE SHORTLY*/
/* STYLE THE HEADER*/
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}


/*  /* STYLE THE TOP NAV BAR*/

/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}    
 