---
cover: https://res.cloudinary.com/patternbuildings/image/upload/v1607360139/projects/dormitory/Dormitory_juuhe0.jpg
title: "Student dormitory "
order: 0
featured: false
cta:
  url: https://configurator.creatomus.com/project/369-dorm
  label: Configure your own dormitory
---
```html
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="referrer" content="no-referrer-when-downgrade">
  <title>Document</title>
  <style type="text/css">
    html,
    body {
      height: 100%;
      width: 100%;
      margin: 0;
    }
  </style>
</head>
 
<body>
  <iframe id="configurator" src="" allowfullscreen frameborder="0" height="100%" width="100%" data-pathname="" onLoad="onLoadIframe()"></iframe>
  <script type="text/javascript">
    var INITIAL = "/project/harrison" /* This is the default link to point the user to, when no hash is specified */
    var DOMAIN = "https://configurator.creatomus.com";
    var USER_TOKEN = '';
     
    var iframe = window.configurator;
    var initialLocation = window.location.hash.slice(1);
 
    if (!initialLocation) {
      initialLocation = INITIAL;
    }
 
    function listener(event) {
      if (event.origin != DOMAIN) {
        return;
      }
 
      var data = typeof event.data === 'string' ? parse(event.data) : event.data;
 
      if (data === null && data.messageType !== 'CHANGE_LOCATION') {
        return;
      }
 
      if (window.location.hash === "#" + data.pathname + data.search) {
        return;
      }
 
      setNewLocation(data);
    }
 
    function parse(raw) {
      try {
        var data = JSON.parse(raw);
  
        return data;
      } catch (error) {
        console.error("Bad format of the message");
  
        return null;
      }
    }
 
    function setNewLocation(data) {
      var newLocation = "#" + data.pathname + data.search;
 
      window.history.replaceState(data, "", newLocation);
 
      setIframeDataset(data.pathname, data.search);
    }
 
    function hashChangeListener(event) {
      var newLocation = window.location.hash.slice(1);
 
      setIframeSrc(newLocation);
    }
 
    function setIframeSrc(location, userToken) {
      var arr = location.split('?');
 
      var pathname = arr[0];
      var search = arr[1] ? '?' + arr[1] : '';
 
      if (userToken) {
        search = search + (search ? '&' : '?') + 'user_token=' + userToken
      }
 
      iframe.setAttribute("src", DOMAIN + pathname + search);
 
      setIframeDataset(pathname, search);
    }
 
    function setIframeDataset(pathname, search) {
      iframe.dataset.pathname = pathname;
      iframe.dataset.search = search;
    }
 
    window.addEventListener("message", listener);
    window.addEventListener("hashchange", hashChangeListener);
 
    setIframeSrc(initialLocation, USER_TOKEN);
 
    function onLoadIframe() {
      var data = {
        messageType: 'SET_PARENT_LOCATION',
        origin: window.location.origin,
        pathname: window.location.pathname,
        hash: window.location.hash
      };
 
      setTimeout(function() {
        iframe.contentWindow.postMessage(data, DOMAIN);
      }, 2000);
    }
  </script>
</body>
 
</html>
```