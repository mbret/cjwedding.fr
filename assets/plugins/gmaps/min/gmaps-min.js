"use strict";!function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["jquery","googlemaps!"],t):e.GMaps=t()}(this,function(){var t=function(e,t){var o;if(e===t)return e;for(o in t)e[o]=t[o];return e},o=function(e,t){var o;if(e===t)return e;for(o in t)void 0!=e[o]&&(e[o]=t[o]);return e},n=function(e,t){var o=Array.prototype.slice.call(arguments,2),n=[],r=e.length,i;if(Array.prototype.map&&e.map===Array.prototype.map)n=Array.prototype.map.call(e,function(e){var n=o.slice(0);return n.splice(0,0,e),t.apply(this,n)});else for(i=0;r>i;i++)callback_params=o,callback_params.splice(0,0,e[i]),n.push(t.apply(this,callback_params));return n},r=function(e){var t=[],o;for(o=0;o<e.length;o++)t=t.concat(e[o]);return t},i=function(e,t){var o=e[0],n=e[1];return t&&(o=e[1],n=e[0]),new google.maps.LatLng(o,n)},s=function(e,t){var o;for(o=0;o<e.length;o++)e[o]instanceof google.maps.LatLng||(e[o].length>0&&"object"==typeof e[o][0]?e[o]=s(e[o],t):e[o]=i(e[o],t));return e},a=function(e,t){var o,n=e.replace(".","");return o="jQuery"in this&&t?$("."+n,t)[0]:document.getElementsByClassName(n)[0]},l=function(e,t){var o,e=e.replace("#","");return o="jQuery"in window&&t?$("#"+e,t)[0]:document.getElementById(e)},p=function(e){var t=0,o=0;if(e.offsetParent)do t+=e.offsetLeft,o+=e.offsetTop;while(e=e.offsetParent);return[t,o]},c=function(e){if("object"!=typeof window.google||!window.google.maps)return"object"==typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};var o=document,n=function(e){if(!this)return new n(e);e.zoom=e.zoom||15,e.mapType=e.mapType||"roadmap";var r=function(e,t){return void 0===e?t:e},i=this,s,c=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],g=["mousemove","mouseout","mouseover"],h=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=e.el||e.div,d=e.markerClusterer,f=google.maps.MapTypeId[e.mapType.toUpperCase()],m=new google.maps.LatLng(e.lat,e.lng),y=r(e.zoomControl,!0),v=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},k=v.style||"DEFAULT",w=v.position||"TOP_LEFT",L=r(e.panControl,!0),b=r(e.mapTypeControl,!0),_=r(e.scaleControl,!0),x=r(e.streetViewControl,!0),M=r(M,!0),C={},P={zoom:this.zoom,center:m,mapTypeId:f},O={panControl:L,zoomControl:y,zoomControlOptions:{style:google.maps.ZoomControlStyle[k],position:google.maps.ControlPosition[w]},mapTypeControl:b,scaleControl:_,streetViewControl:x,overviewMapControl:M};if("string"==typeof e.el||"string"==typeof e.div?u.indexOf("#")>-1?this.el=l(u,e.context):this.el=a.apply(this,[u,e.context]):this.el=u,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[i.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=e.zoom,this.registered_events={},this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=e.enableNewStyle,s=0;s<h.length;s++)delete e[h[s]];for(1!=e.disableDefaultUI&&(P=t(P,O)),C=t(P,e),s=0;s<c.length;s++)delete C[c[s]];for(s=0;s<g.length;s++)delete C[g[s]];this.map=new google.maps.Map(this.el,C),d&&(this.markerClusterer=d.apply(this,[this.map]));var T=function(e,t){var o="",n=window.context_menu[i.el.id][e];for(var r in n)if(n.hasOwnProperty(r)){var s=n[r];o+='<li><a id="'+e+"_"+r+'" href="#">'+s.title+"</a></li>"}if(l("gmaps_context_menu")){var a=l("gmaps_context_menu");a.innerHTML=o;var c=a.getElementsByTagName("a"),g=c.length,r;for(r=0;g>r;r++){var h=c[r],u=function(o){o.preventDefault(),n[this.id.replace(e+"_","")].action.apply(i,[t]),i.hideContextMenu()};google.maps.event.clearListeners(h,"click"),google.maps.event.addDomListenerOnce(h,"click",u,!1)}var d=p.apply(this,[i.el]),f=d[0]+t.pixel.x-15,m=d[1]+t.pixel.y-15;a.style.left=f+"px",a.style.top=m+"px"}};this.buildContextMenu=function(e,t){if("marker"===e){t.pixel={};var o=new google.maps.OverlayView;o.setMap(i.map),o.draw=function(){var n=o.getProjection(),r=t.marker.getPosition();t.pixel=n.fromLatLngToContainerPixel(r),T(e,t)}}else T(e,t);var n=l("gmaps_context_menu");setTimeout(function(){n.style.display="block"},0)},this.setContextMenu=function(e){window.context_menu[i.el.id][e.control]={};var t,n=o.createElement("ul");for(t in e.options)if(e.options.hasOwnProperty(t)){var r=e.options[t];window.context_menu[i.el.id][e.control][r.name]={title:r.title,action:r.action}}n.id="gmaps_context_menu",n.style.display="none",n.style.position="absolute",n.style.minWidth="100px",n.style.background="white",n.style.listStyle="none",n.style.padding="8px",n.style.boxShadow="2px 2px 6px #ccc",l("gmaps_context_menu")||o.body.appendChild(n);var s=l("gmaps_context_menu");google.maps.event.addDomListener(s,"mouseout",function(e){e.relatedTarget&&this.contains(e.relatedTarget)||window.setTimeout(function(){s.style.display="none"},400)},!1)},this.hideContextMenu=function(){var e=l("gmaps_context_menu");e&&(e.style.display="none")};var z=function(t,o){google.maps.event.addListener(t,o,function(t){void 0==t&&(t=this),e[o].apply(this,[t]),i.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var S=0;S<c.length;S++){var W=c[S];W in e&&z(this.map,W)}for(var S=0;S<g.length;S++){var W=g[S];W in e&&z(this.map,W)}google.maps.event.addListener(this.map,"rightclick",function(t){e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[i.el.id].map&&i.buildContextMenu("map",t)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var e=[],t=this.markers.length,o;for(o=0;t>o;o++)"boolean"==typeof this.markers[o].visible&&this.markers[o].visible&&e.push(this.markers[o].getPosition());this.fitLatLngBounds(e)},this.fitLatLngBounds=function(e){var t=e.length,o=new google.maps.LatLngBounds,n;for(n=0;t>n;n++)o.extend(e[n]);this.map.fitBounds(o)},this.setCenter=function(e,t,o){this.map.panTo(new google.maps.LatLng(e,t)),o&&o()},this.getElement=function(){return this.el},this.zoomIn=function(e){e=e||1,this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom)},this.zoomOut=function(e){e=e||1,this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom)};var I=[],R;for(R in this.map)"function"!=typeof this.map[R]||this[R]||I.push(R);for(s=0;s<I.length;s++)!function(e,t,o){e[o]=function(){return t[o].apply(t,arguments)}}(this,this.map,I[s])};return n}(this);c.prototype.createControl=function(e){var t=document.createElement("div");t.style.cursor="pointer",e.disableDefaultStyles!==!0&&(t.style.fontFamily="Roboto, Arial, sans-serif",t.style.fontSize="11px",t.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var o in e.style)t.style[o]=e.style[o];e.id&&(t.id=e.id),e.title&&(t.title=e.title),e.classes&&(t.className=e.classes),e.content&&("string"==typeof e.content?t.innerHTML=e.content:e.content instanceof HTMLElement&&t.appendChild(e.content)),e.position&&(t.position=google.maps.ControlPosition[e.position.toUpperCase()]);for(var n in e.events)!function(t,o){google.maps.event.addDomListener(t,o,function(){e.events[o].apply(this,[this])})}(t,n);return t.index=1,t},c.prototype.addControl=function(e){var t=this.createControl(e);return this.controls.push(t),this.map.controls[t.position].push(t),t},c.prototype.removeControl=function(e){var t=null,o;for(o=0;o<this.controls.length;o++)this.controls[o]==e&&(t=this.controls[o].position,this.controls.splice(o,1));if(t)for(o=0;o<this.map.controls.length;o++){var n=this.map.controls[e.position];if(n.getAt(o)==e){n.removeAt(o);break}}return e},c.prototype.createMarker=function(e){if(void 0==e.lat&&void 0==e.lng&&void 0==e.position)throw"No latitude or longitude defined.";var o=this,n=e.details,r=e.fences,i=e.outside,s={position:new google.maps.LatLng(e.lat,e.lng),map:null},a=t(s,e);delete a.lat,delete a.lng,delete a.fences,delete a.outside;var l=new google.maps.Marker(a);if(l.fences=r,e.infoWindow){l.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var p=["closeclick","content_changed","domready","position_changed","zindex_changed"],c=0;c<p.length;c++)!function(t,o){e.infoWindow[o]&&google.maps.event.addListener(t,o,function(t){e.infoWindow[o].apply(this,[t])})}(l.infoWindow,p[c])}for(var g=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],h=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],c=0;c<g.length;c++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(){e[o].apply(this,[this])})}(l,g[c]);for(var c=0;c<h.length;c++)!function(t,o,n){e[n]&&google.maps.event.addListener(o,n,function(o){o.pixel||(o.pixel=t.getProjection().fromLatLngToPoint(o.latLng)),e[n].apply(this,[o])})}(this.map,l,h[c]);return google.maps.event.addListener(l,"click",function(){this.details=n,e.click&&e.click.apply(this,[this]),l.infoWindow&&(o.hideInfoWindows(),l.infoWindow.open(o.map,l))}),google.maps.event.addListener(l,"rightclick",function(t){t.marker=this,e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[o.el.id].marker&&o.buildContextMenu("marker",t)}),l.fences&&google.maps.event.addListener(l,"dragend",function(){o.checkMarkerGeofence(l,function(e,t){i(e,t)})}),l},c.prototype.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_"))t=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";t=this.createMarker(e)}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),c.fire("marker_added",t,this),t},c.prototype.addMarkers=function(e){for(var t=0,o;o=e[t];t++)this.addMarker(o);return this.markers},c.prototype.hideInfoWindows=function(){for(var e=0,t;t=this.markers[e];e++)t.infoWindow&&t.infoWindow.close()},c.prototype.removeMarker=function(e){for(var t=0;t<this.markers.length;t++)if(this.markers[t]===e){this.markers[t].setMap(null),this.markers.splice(t,1),this.markerClusterer&&this.markerClusterer.removeMarker(e),c.fire("marker_removed",e,this);break}return e},c.prototype.removeMarkers=function(e){var t=[];if("undefined"==typeof e){for(var o=0;o<this.markers.length;o++){var n=this.markers[o];n.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(n),c.fire("marker_removed",n,this)}this.markers=t}else{for(var o=0;o<e.length;o++){var r=this.markers.indexOf(e[o]);if(r>-1){var n=this.markers[r];n.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(n),c.fire("marker_removed",n,this)}}for(var o=0;o<this.markers.length;o++){var n=this.markers[o];null!=n.getMap()&&t.push(n)}this.markers=t}},c.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView,o=!0;return t.setMap(this.map),null!=e.auto_show&&(o=e.auto_show),t.onAdd=function(){var o=document.createElement("div");o.style.borderStyle="none",o.style.borderWidth="0px",o.style.position="absolute",o.style.zIndex=100,o.innerHTML=e.content,t.el=o,e.layer||(e.layer="overlayLayer");var n=this.getPanes(),r=n[e.layer],i=["contextmenu","DOMMouseScroll","dblclick","mousedown"];r.appendChild(o);for(var s=0;s<i.length;s++)!function(e,t){google.maps.event.addDomListener(e,t,function(e){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()})}(o,i[s]);e.click&&(n.overlayMouseTarget.appendChild(t.el),google.maps.event.addDomListener(t.el,"click",function(){e.click.apply(t,[t])})),google.maps.event.trigger(this,"ready")},t.draw=function(){var n=this.getProjection(),r=n.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0;var i=t.el,s=i.children[0],a=s.clientHeight,l=s.clientWidth;switch(e.verticalAlign){case"top":i.style.top=r.y-a+e.verticalOffset+"px";break;default:case"middle":i.style.top=r.y-a/2+e.verticalOffset+"px";break;case"bottom":i.style.top=r.y+e.verticalOffset+"px"}switch(e.horizontalAlign){case"left":i.style.left=r.x-l+e.horizontalOffset+"px";break;default:case"center":i.style.left=r.x-l/2+e.horizontalOffset+"px";break;case"right":i.style.left=r.x+e.horizontalOffset+"px"}i.style.display=o?"block":"none",o||e.show.apply(this,[i])},t.onRemove=function(){var o=t.el;e.remove?e.remove.apply(this,[o]):(t.el.parentNode.removeChild(t.el),t.el=null)},this.overlays.push(t),t},c.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break}},c.prototype.removeOverlays=function(){for(var e=0,t;t=this.overlays[e];e++)t.setMap(null);this.overlays=[]},c.prototype.drawPolyline=function(e){var t=[],o=e.path;if(o.length)if(void 0===o[0][0])t=o;else for(var n=0,r;r=o[n];n++)t.push(new google.maps.LatLng(r[0],r[1]));var i={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:!0,editable:!1,visible:!0};e.hasOwnProperty("clickable")&&(i.clickable=e.clickable),e.hasOwnProperty("editable")&&(i.editable=e.editable),e.hasOwnProperty("icons")&&(i.icons=e.icons),e.hasOwnProperty("zIndex")&&(i.zIndex=e.zIndex);for(var s=new google.maps.Polyline(i),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],l=0;l<a.length;l++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(s,a[l]);return this.polylines.push(s),c.fire("polyline_added",s,this),s},c.prototype.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++)if(this.polylines[t]===e){this.polylines[t].setMap(null),this.polylines.splice(t,1),c.fire("polyline_removed",e,this);break}},c.prototype.removePolylines=function(){for(var e=0,t;t=this.polylines[e];e++)t.setMap(null);this.polylines=[]},c.prototype.drawCircle=function(e){e=t({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e),delete e.lat,delete e.lng;for(var o=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],r=0;r<n.length;r++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(o,n[r]);return this.polygons.push(o),o},c.prototype.drawRectangle=function(e){e=t({map:this.map},e);var o=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=o;for(var n=new google.maps.Rectangle(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<r.length;i++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(n,r[i]);return this.polygons.push(n),n},c.prototype.drawPolygon=function(e){var o=!1;e.hasOwnProperty("useGeoJSON")&&(o=e.useGeoJSON),delete e.useGeoJSON,e=t({map:this.map},e),0==o&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=r(n(e.paths,s,o)));for(var i=new google.maps.Polygon(e),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],l=0;l<a.length;l++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(i,a[l]);return this.polygons.push(i),c.fire("polygon_added",i,this),i},c.prototype.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++)if(this.polygons[t]===e){this.polygons[t].setMap(null),this.polygons.splice(t,1),c.fire("polygon_removed",e,this);break}},c.prototype.removePolygons=function(){for(var e=0,t;t=this.polygons[e];e++)t.setMap(null);this.polygons=[]},c.prototype.getFromFusionTables=function(e){var t=e.events;delete e.events;var o=e,n=new google.maps.FusionTablesLayer(o);for(var r in t)!function(e,o){google.maps.event.addListener(e,o,function(e){t[o].apply(this,[e])})}(n,r);return this.layers.push(n),n},c.prototype.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);return t.setMap(this.map),t},c.prototype.getFromKML=function(e){var t=e.url,o=e.events;delete e.url,delete e.events;var n=e,r=new google.maps.KmlLayer(t,n);for(var i in o)!function(e,t){google.maps.event.addListener(e,t,function(e){o[t].apply(this,[e])})}(r,i);return this.layers.push(r),r},c.prototype.loadFromKML=function(e){var t=this.getFromKML(e);return t.setMap(this.map),t},c.prototype.addLayer=function(e,t){t=t||{};var o;switch(e){case"weather":this.singleLayers.weather=o=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=o=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=o=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=o=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=o=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=o=new google.maps.panoramio.PanoramioLayer,o.setTag(t.filter),delete t.filter,t.click&&google.maps.event.addListener(o,"click",function(e){t.click(e),delete t.click});break;case"places":if(this.singleLayers.places=o=new google.maps.places.PlacesService(this.map),t.search||t.nearbySearch||t.radarSearch){var n={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};t.radarSearch&&o.radarSearch(n,t.radarSearch),t.search&&o.search(n,t.search),t.nearbySearch&&o.nearbySearch(n,t.nearbySearch)}if(t.textSearch){var r={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};o.textSearch(r,t.textSearch)}}return void 0!==o?("function"==typeof o.setOptions&&o.setOptions(t),"function"==typeof o.setMap&&o.setMap(this.map),o):void 0},c.prototype.removeLayer=function(e){if("string"==typeof e&&void 0!==this.singleLayers[e])this.singleLayers[e].setMap(null),delete this.singleLayers[e];else for(var t=0;t<this.layers.length;t++)if(this.layers[t]===e){this.layers[t].setMap(null),this.layers.splice(t,1);break}};var g,h;return c.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":g=google.maps.TravelMode.BICYCLING;break;case"transit":g=google.maps.TravelMode.TRANSIT;break;case"driving":g=google.maps.TravelMode.DRIVING;break;default:g=google.maps.TravelMode.WALKING}h="imperial"===e.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var o={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},n=t(o,e);n.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),n.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),n.travelMode=g,n.unitSystem=h,delete n.callback,delete n.error;var r=this,i=new google.maps.DirectionsService;i.route(n,function(t,o){if(o===google.maps.DirectionsStatus.OK){for(var n in t.routes)t.routes.hasOwnProperty(n)&&r.routes.push(t.routes[n]);e.callback&&e.callback(r.routes)}else e.error&&e.error(t,o)})},c.prototype.removeRoutes=function(){this.routes=[]},c.prototype.getElevations=function(e){e=t({locations:[],path:!1,samples:256},e),e.locations.length>0&&e.locations[0].length>0&&(e.locations=r(n([e.locations],s,!1)));var o=e.callback;delete e.callback;var i=new google.maps.ElevationService;if(e.path){var a={path:e.locations,samples:e.samples};i.getElevationAlongPath(a,function(e,t){o&&"function"==typeof o&&o(e,t)})}else delete e.path,delete e.samples,i.getElevationForLocations(e,function(e,t){o&&"function"==typeof o&&o(e,t)})},c.prototype.cleanRoute=c.prototype.removePolylines,c.prototype.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,callback:function(o){if(o.length>0){var n={path:o[o.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(n.icons=e.icons),t.drawPolyline(n),e.callback&&e.callback(o[o.length-1])}}})},c.prototype.travelRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,callback:function(t){if(t.length>0&&e.start&&e.start(t[t.length-1]),t.length>0&&e.step){var o=t[t.length-1];if(o.legs.length>0)for(var n=o.legs[0].steps,r=0,i;i=n[r];r++)i.step_number=r,e.step(i,o.legs[0].steps.length-1)}t.length>0&&e.end&&e.end(t[t.length-1])}});else if(e.route&&e.route.legs.length>0)for(var t=e.route.legs[0].steps,o=0,n;n=t[o];o++)n.step_number=o,e.step(n)},c.prototype.drawSteppedRoute=function(e){var t=this;if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,error:e.error,callback:function(o){if(o.length>0&&e.start&&e.start(o[o.length-1]),o.length>0&&e.step){var n=o[o.length-1];if(n.legs.length>0)for(var r=n.legs[0].steps,i=0,s;s=r[i];i++){s.step_number=i;var a={path:s.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(a.icons=e.icons),t.drawPolyline(a),e.step(s,n.legs[0].steps.length-1)}}o.length>0&&e.end&&e.end(o[o.length-1])}});else if(e.route&&e.route.legs.length>0)for(var o=e.route.legs[0].steps,n=0,r;r=o[n];n++){r.step_number=n;var i={path:r.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(i.icons=e.icons),t.drawPolyline(i),e.step(r)}},c.Route=function(e){this.origin=e.origin,this.destination=e.destination,this.waypoints=e.waypoints,this.map=e.map,this.route=e.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var t={path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(t.icons=e.icons),this.polyline=this.map.drawPolyline(t).getPath()},c.Route.prototype.getRoute=function(t){var o=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],error:t.error,callback:function(){o.route=e[0],t.callback&&t.callback.call(o)}})},c.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.pop()}},c.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.push(e[t]);this.step_count++}},c.prototype.checkGeofence=function(e,t,o){return o.containsLatLng(new google.maps.LatLng(e,t))},c.prototype.checkMarkerGeofence=function(e,t){if(e.fences)for(var o=0,n;n=e.fences[o];o++){var r=e.getPosition();this.checkGeofence(r.lat(),r.lng(),n)||t(e,n)}},c.prototype.toImage=function(e){var e=e||{},t={};if(t.size=e.size||[this.el.clientWidth,this.el.clientHeight],t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng(),this.markers.length>0){t.markers=[];for(var o=0;o<this.markers.length;o++)t.markers.push({lat:this.markers[o].getPosition().lat(),lng:this.markers[o].getPosition().lng()})}if(this.polylines.length>0){var n=this.polylines[0];t.polyline={},t.polyline.path=google.maps.geometry.encoding.encodePath(n.getPath()),t.polyline.strokeColor=n.strokeColor,t.polyline.strokeOpacity=n.strokeOpacity,t.polyline.strokeWeight=n.strokeWeight}return c.staticMapURL(t)},c.staticMapURL=function(e){function t(e,t){if("#"===e[0]&&(e=e.replace("#","0x"),t)){if(t=parseFloat(t),t=Math.min(1,Math.max(t,0)),0===t)return"0x00000000";t=(255*t).toString(16),1===t.length&&(t+=t),e=e.slice(0,8)+t}return e}var o=[],n,r=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";e.url&&(r=e.url,delete e.url),r+="?";var i=e.markers;delete e.markers,!i&&e.marker&&(i=[e.marker],delete e.marker);var s=e.styles;delete e.styles;var a=e.polyline;if(delete e.polyline,e.center)o.push("center="+e.center),delete e.center;else if(e.address)o.push("center="+e.address),delete e.address;else if(e.lat)o.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng;else if(e.visible){var l=encodeURI(e.visible.join("|"));o.push("visible="+l)}var p=e.size;p?(p.join&&(p=p.join("x")),delete e.size):p="630x300",o.push("size="+p),e.zoom||e.zoom===!1||(e.zoom=15);var c=e.hasOwnProperty("sensor")?!!e.sensor:!0;delete e.sensor,o.push("sensor="+c);for(var g in e)e.hasOwnProperty(g)&&o.push(g+"="+e[g]);if(i)for(var h,u,d=0;n=i[d];d++){h=[],n.size&&"normal"!==n.size?(h.push("size:"+n.size),delete n.size):n.icon&&(h.push("icon:"+encodeURI(n.icon)),delete n.icon),n.color&&(h.push("color:"+n.color.replace("#","0x")),delete n.color),n.label&&(h.push("label:"+n.label[0].toUpperCase()),delete n.label),u=n.address?n.address:n.lat+","+n.lng,delete n.address,delete n.lat,delete n.lng;for(var g in n)n.hasOwnProperty(g)&&h.push(g+":"+n[g]);h.length||0===d?(h.push(u),h=h.join("|"),o.push("markers="+encodeURI(h))):(h=o.pop()+encodeURI("|"+u),o.push(h))}if(s)for(var d=0;d<s.length;d++){var f=[];s[d].featureType&&f.push("feature:"+s[d].featureType.toLowerCase()),s[d].elementType&&f.push("element:"+s[d].elementType.toLowerCase());for(var m=0;m<s[d].stylers.length;m++)for(var y in s[d].stylers[m]){var v=s[d].stylers[m][y];("hue"==y||"color"==y)&&(v="0x"+v.substring(1)),f.push(y+":"+v)}var k=f.join("|");""!=k&&o.push("style="+k)}if(a){if(n=a,a=[],n.strokeWeight&&a.push("weight:"+parseInt(n.strokeWeight,10)),n.strokeColor){var w=t(n.strokeColor,n.strokeOpacity);a.push("color:"+w)}if(n.fillColor){var L=t(n.fillColor,n.fillOpacity);a.push("fillcolor:"+L)}var b=n.path;if(b.join)for(var m=0,_;_=b[m];m++)a.push(_.join(","));else a.push("enc:"+b);a=a.join("|"),o.push("path="+encodeURI(a))}var x=window.devicePixelRatio||1;return o.push("scale="+x),o=o.join("&"),r+o},c.prototype.addMapType=function(e,t){if(!t.hasOwnProperty("getTileUrl")||"function"!=typeof t.getTileUrl)throw"'getTileUrl' function required.";t.tileSize=t.tileSize||new google.maps.Size(256,256);var o=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,o)},c.prototype.addOverlayMapType=function(e){if(!e.hasOwnProperty("getTile")||"function"!=typeof e.getTile)throw"'getTile' function required.";var t=e.index;delete e.index,this.map.overlayMapTypes.insertAt(t,e)},c.prototype.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)},c.prototype.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,{name:e.styledMapName});this.map.mapTypes.set(e.mapTypeId,t)},c.prototype.setStyle=function(e){this.map.setMapTypeId(e)},c.prototype.createPanorama=function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||(e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng()),this.panorama=c.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama},c.createPanorama=function(e){var o=l(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;for(var n=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],r=t({visible:!0},e),i=0;i<n.length;i++)delete r[n[i]];for(var s=new google.maps.StreetViewPanorama(o,r),i=0;i<n.length;i++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(){e[o].apply(this)})}(s,n[i]);return s},c.prototype.on=function(e,t){return c.on(e,this,t)},c.prototype.off=function(e){c.off(e,this)},c.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],c.on=function(e,t,o){if(-1==c.custom_events.indexOf(e))return t instanceof c&&(t=t.map),google.maps.event.addListener(t,e,o);var n={handler:o,eventName:e};return t.registered_events[e]=t.registered_events[e]||[],t.registered_events[e].push(n),n},c.off=function(e,t){-1==c.custom_events.indexOf(e)?(t instanceof c&&(t=t.map),google.maps.event.clearListeners(t,e)):t.registered_events[e]=[]},c.fire=function(e,t,o){if(-1==c.custom_events.indexOf(e))google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2));else if(e in o.registered_events)for(var n=o.registered_events[e],r=0;r<n.length;r++)!function(e,t,o){e.apply(t,[o])}(n[r].handler,o,t)},c.geolocate=function(e){var t=e.always||e.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){e.success(o),t&&t()},function(o){e.error(o),t&&t()},e.options):(e.not_supported(),t&&t())},c.geocode=function(e){this.geocoder=new google.maps.Geocoder;var t=e.callback;e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&(e.latLng=new google.maps.LatLng(e.lat,e.lng)),delete e.lat,delete e.lng,delete e.callback,this.geocoder.geocode(e,function(e,o){t(e,o)})},"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(e){for(var t=new google.maps.LatLngBounds,o=this.getPaths(),n,r=0;r<o.getLength();r++){n=o.getAt(r);for(var i=0;i<n.getLength();i++)t.extend(n.getAt(i))}return t}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(null!==t&&!t.contains(e))return!1;for(var o=!1,n=this.getPaths().getLength(),r=0;n>r;r++)for(var i=this.getPaths().getAt(r),s=i.getLength(),a=s-1,l=0;s>l;l++){var p=i.getAt(l),c=i.getAt(a);(p.lng()<e.lng()&&c.lng()>=e.lng()||c.lng()<e.lng()&&p.lng()>=e.lng())&&p.lat()+(e.lng()-p.lng())/(c.lng()-p.lng())*(c.lat()-p.lat())<e.lat()&&(o=!o),a=l}return o}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(e){return google.maps.geometry?google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),e)<=this.getRadius():!0}),google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)},google.maps.Marker.prototype.setFences=function(e){this.fences=e},google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError;var t=Object(this),o=t.length>>>0;if(0===o)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&n!=1/0&&n!=-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=o)return-1;for(var r=n>=0?n:Math.max(o-Math.abs(n),0);o>r;r++)if(r in t&&t[r]===e)return r;return-1}),c});