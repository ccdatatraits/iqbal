(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-82681704-1', 'auto');

//ga('require', 'eventTracker', {events: ['onmouseenter']});
ga(function(tracker) {

  // Grab a reference to the default sendHitTask function.
  var originalSendHitTask = tracker.get('sendHitTask');

  // Modifies sendHitTask to connect with MediaMath servers
  // sending the normal request to www.google-analytics.com/collect.
  tracker.set('sendHitTask', function(model) {
    originalSendHitTask(model);
    
    var params = model.get('hitPayload');
    var paramsJSON = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    delete paramsJSON["_v"]; delete paramsJSON["_s"]; delete paramsJSON["_u"]; delete paramsJSON["a"]; delete paramsJSON["cid"];
    delete paramsJSON["did"]; delete paramsJSON["fl"]; delete paramsJSON["je"]; delete paramsJSON["jid"]; delete paramsJSON["sd"];
    delete paramsJSON["sr"]; delete paramsJSON["t"]; delete paramsJSON["tid"]; delete paramsJSON["ul"]; delete paramsJSON["v"];
    delete paramsJSON["vp"]; delete paramsJSON["z"]; delete paramsJSON["_r"]; delete paramsJSON["de"];
    console.log(paramsJSON);
    if (paramsJSON.ea === "title") {
        var track = new Image();
        track.src="//pixel.mathtag.com/event/js?mt_id=1059155&mt_adid=127439&v1=&v2=&v3=" + paramsJSON.ea + "&s1=&s2=&s3=" + paramsJSON.ec;
        console.log(track.src);
    }
  });
});

ga('send', 'pageview');
