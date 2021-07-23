
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         //$('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = 'Daniel send you new message';
         clearTimeout(titleTime);
     }
     else {
         //$('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ':) message is gone ' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });