function colorLuminance(t,e){t=String(t).replace(/[^0-9a-f]/gi,""),t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;var r,n,o="#";for(n=0;n<3;n++)r=parseInt(t.substr(2*n,2),16),r=Math.round(Math.min(Math.max(0,r+r*e),255)).toString(16),o+=("00"+r).substr(r.length);return o}function makeDepthDiv(t,e,r,n){n=n||{},n.hackOffset=-parseInt(t.css("padding-left"))-6,-72==n.hackOffset&&(n.hackOffset+=22),$(window).on("resize",function(){t.prev().length&&t.prev().css({width:t.outerWidth(!0)+n.hackOffset}),t.next().length&&t.next().css({width:t.outerWidth(!0)+n.hackOffset})}).resize(),$(window).on("scroll",function(){var o=$(window).height()/2-t.outerHeight()/2,i=t.offset().top-$(window).scrollTop(),s=Math.abs(.16*(o-i));s>t.outerHeight()&&(s=t.outerHeight());colorLuminance(t.css("background-color"),-.02);if(!(i<2*-t.parent().outerHeight()||i>$(window).height()+2*t.parent().outerHeight())){var a=!1;i<o&&(a=!0),a?(t.next().length||(t.after('<div class="depth-after"></div>'),t.prev().remove()),t.parent().is(":first-of-type")||t.parent().css({marginTop:-s,marginBottom:""}),t.next().css({marginBottom:-s-t.parent(".box-container").css("margin-bottom"),borderTop:.7*s+"px solid",borderLeft:n.noLeft?"":"50px solid transparent",borderRight:n.noRight?"":"50px solid transparent",width:t.outerWidth(!0)+n.hackOffset,marginLeft:t.css("margin-left"),marginRight:t.css("margin-right")}),t.parent(".box-container").css("z-index",e)):(t.prev().length||(t.before('<div class="depth-before"></div>'),t.next().remove()),t.parent().css({marginBottom:.7*-s,marginTop:""}),t.prev().css({marginTop:-s-t.parent(".box-container").css("margin-top"),borderBottom:s+"px solid",borderLeft:n.noLeft?"":"50px solid transparent",borderRight:n.noRight?"":"50px solid transparent",width:t.outerWidth(!0)+n.hackOffset,marginLeft:t.css("margin-left"),marginRight:t.css("margin-right")}),t.parent(".box-container").css("z-index",r-e))}}).scroll()}