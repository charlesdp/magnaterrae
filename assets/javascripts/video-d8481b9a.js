function scaleVideoContainer(){var i=$(window).height()+5,e=parseInt(i)+"px";$(".m-video").css("height",e)}function initBannerVideoSize(i){$(i).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),scaleBannerVideoSize(i)}function scaleBannerVideoSize(i){var e,n,t=$(window).width(),o=$(window).height()+5;console.log(o),$(i).each(function(){var i=$(this).data("height")/$(this).data("width");$(this).width(t),n=o,e=n/i,$(this).css({"margin-top":0,"margin-left":-(e-t)/2+"px"}),$(this).width(e).height(n)})}$(document).ready(function(){console.log("Hello"),scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")})});