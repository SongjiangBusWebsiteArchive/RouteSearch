
//
function ShowFence(track, my_maplet) {


    var brush = new MBrush("red");
    brush.arrow = true;
    brush.style = 0;
    brush.stroke = 2;
    brush.fill = false;
    brush.bgcolor = "black";
    brush.bgtransparency = 35;


    var pointList = [];

    var lonAndlat = track.split(";");

    for (var i = 0; i < lonAndlat.length; i++) {
        if (lonAndlat[i] != null && lonAndlat[i] != undefined && lonAndlat[i] != "") {
            var oneLonAndlat = lonAndlat[i].split(",");
            var mPoint = new MPoint(oneLonAndlat[0], oneLonAndlat[1]);
            pointList.push(mPoint);
        }
    }

    var polyline = new MPolyline(
                          pointList,
                         brush,
                          null
                      );
    //my_maplet.centerAndZoom(new MPoint(121.21396, 31.01953), 11)
    my_maplet.addOverlay(polyline);


}