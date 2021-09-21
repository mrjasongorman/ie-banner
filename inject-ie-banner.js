// inject IE banner via JavaScript
(function(){
  var ieBannerHtml = '<p>Internet Explorer is no longer supported by this website, please <a href="https://www.microsoft.com/en-us/edge" target="_blank">update your web browser &gt;</a></p>';
  var ieBannerTag = document.createElement("div");
  ieBannerTag.setAttribute("id", "ie-browser-update-banner");
  ieBannerTag.innerHTML = ieBannerHtml;
  
  var styleTag = document.createElement("style");
  styleTag.innerHTML = "#ie-browser-update-banner{display:none;position:relative;background-color:black;color:white;line-height:28px;padding:15px;font-size:20px;font-family:arial;z-index:999999;}#ie-browser-update-banner a{font-weight:700;color:white;}@media screen and (-ms-high-contrast: none){#ie-browser-update-banner{display:block;}}";
  
  document.body.insertBefore(styleTag , document.body.firstChild);
  if(document.getElementById('ie-browser-update-banner') === null) {
    document.body.insertBefore(ieBannerTag , document.body.firstChild);
  }
})();
