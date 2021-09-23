class ElementHandler {
  constructor() {}
 
  element(element) {
    element.prepend('<style>#ie-browser-update-banner{display:none;position:relative;background-color:black;color:white;line-height:28px;padding:25px;font-size:20px;font-family:arial;z-index:999999;}#ie-browser-update-banner p{margin:0;padding:0;}#ie-browser-update-banner a{font-weight:700;color:white;text-decoration:underline;}@media screen and (-ms-high-contrast: none){#ie-browser-update-banner{display:block;}}</style><div id="ie-browser-update-banner"><p>Internet Explorer is not supported by this website, please <a href="https://www.microsoft.com/en-us/edge" target="_blank">update your web browser &gt;</a></p></div>', {html: true});
  }
}

const rewriter = new HTMLRewriter().on('body', new ElementHandler());

async function handleRequest(req) {
  const res = await fetch(req);
  return rewriter.transform(res);
}
 
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});
