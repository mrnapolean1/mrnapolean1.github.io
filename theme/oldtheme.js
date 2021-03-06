// ==UserScript==
// @name       Old School HF - mrnapolean1 - Github - BETA
// @namespace  Github
// @version    2.7
// @description  This script will remove the modern theme and instead add the old theme
// @match       *://*.hackforums.net/*
// @grant none
// ==/UserScript==
     
window.addEventListener('load', function() { 
var images = document.getElementsByTagName('img'); 
for (var i = 0; i < images.length; i++) { 
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/starreg.png', 'http://mrnapolean1.github.io/theme/images2/star.gif');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/starl33t.png', 'http://mrnapolean1.github.io/theme/images2/star.gif'); 
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/staradmin.png', 'http://mrnapolean1.github.io/theme/images2/star.gif');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/starstaff.png', 'http://mrnapolean1.github.io/theme/images2/staff_star1.png');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/logo_bl.gif', 'http://mrnapolean1.github.io/theme/images2/logo.jpg');
images[i].src = images[i].src.replace('http://hackforums.net:8080/images/modern_bl/logo_bl.gif', 'http://mrnapolean1.github.io/theme/images2/logo.jpg');
images[i].src = images[i].src.replace('http://hackforums.net:8080/images/modern_pl/logo_pl.gif', 'http://mrnapolean1.github.io/theme/images2/logo.jpg');
images[i].src = images[i].src.replace('http://www.hackforums.net/images/groupimages/english/ub3r.png', 'http://mrnapolean1.github.io/theme/images2/ub3r.png');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/groupimages/english/ub3r.png', 'http://mrnapolean1.github.io/theme/images2/ub3r.png');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/groupimages/english/3p1c.png', 'http://mrnapolean1.github.io/theme/images2/3p1c.png');
images[i].src = images[i].src.replace('hackforums.net/images/modern_bl/groupimages/english/admin-bar.png', 'mrnapolean1.github.io/theme/images2/admin.jpg');
images[i].src = images[i].src.replace('http://www.hackforums.net/images/groupimages/english/staff.png', 'http://mrnapolean1.github.io/theme/images2/staff.png');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/groupimages/english/staff.png', 'http://mrnapolean1.github.io/theme/images2/staff.png');
images[i].src = images[i].src.replace('hackforums.net/images/modern_bl/groupimages/english/writers2.png', 'mrnapolean1.github.io/theme/images2/Writers.png');
images[i].src = images[i].src.replace('http://www.hackforums.net/images/groupimages/english/mentor.jpg', 'http://mrnapolean1.github.io/theme/images2/mentor.jpg');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/groupimages/english/mentor.png', 'http://mrnapolean1.github.io/theme/images2/mentor.jpg');
images[i].src = images[i].src.replace('http://www.hackforums.net/images/groupimages/english/l33t.png', 'http://mrnapolean1.github.io/theme/images2/hf_l33t.png');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/groupimages/english/l33t.png', 'http://mrnapolean1.github.io/theme/images2/hf_l33t.png');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/starub3r2.png', 'http://mrnapolean1.github.io/theme/images2/ub3rstar.gif');
images[i].src = images[i].src.replace('http://hackforums.net/images/modern_bl/minion.gif', 'http://mrnapolean1.github.io/theme/images2/minion.gif');
images[i].src = images[i].src.replace('http://hackforums.net/images/blackreign/buddy_offline.gif', 'http://mrnapolean1.github.io/theme/images2/buddy_offline.gif');
images[i].src = images[i].src.replace('http://hackforums.net/images/blackreign/buddy_online.gif', 'http://mrnapolean1.github.io/theme/images2/buddy_online.gif');

} 
}, false);

function addStyleSheet(style){
      var elementStyle= document.getElementsByTagName("HEAD")[0].appendChild(window.document.createElement('style'));
      elementStyle.innerHTML = style;
      return elementStyle;
    }
     
    function removejscssfile(filename, filetype){
     var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; //determine element type to create nodelist from
     var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; //determine corresponding attribute to test for
     var allsuspects=document.getElementsByTagName(targetelement);
     for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
       allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
     }
    }
     
    removejscssfile('global.css', 'css');
    addStyleSheet('@import "http://mrnapolean1.github.io/theme/global.css";\n@import "http://mrnapolean1.github.io/theme/star_rating.css";');
