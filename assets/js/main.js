$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();         
    
    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("September 17, 2016").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Jours</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Heures</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Minutes</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secondes</span>';
        
      
        //countdown.innerHTML = days + "d, " + hours + "h, "
       // + minutes + "m, " + seconds + "s";  
     
    }, 1000);

    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });

    /* ======= jQuery form validator ======= */
    /* Ref: http://jqueryvalidation.org/documentation/ */
    $(".rsvp-form").validate({
        messages: {
            name: {
                required: 'Merci de saisir votre nom et prénom' //You can customise this message
            },
            email: {
                required: 'Merci de saisir votre email' //You can customise this message
            },
            events: {
                required: 'Venez vous ?' //You can customise this message
            },
            guests: {
                required: 'Combien serez vous ?' //You can customise this message
            },
            // guestinfo: {
            // 	required: 'Please provide name(s)' //You can customise this message
            // },
            submitHandler: function(form) {
                $(form).submit();
            }
        }
    });
});

function is_touch_device() {
    return !!('ontouchstart' in window) // works on most browsers
        || !!('onmsgesturechange' in window); // works on ie10
}

function ToggleDrag(controlDiv, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.margin = '10px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Cliquez pour activer ou désactiver le contrôle de la map';
    controlDiv.appendChild(controlUI);

    var a = document.createElement("div");
    a.className += "gm-style-mtc";
    controlUI.appendChild(a);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontSize = '11px';
    controlText.style.padding = '8px';
    controlText.style.boxShadow = "0px 1px 4px -1px rgba(0, 0, 0, 0.298039)";
    controlText.innerHTML = map.draggable ? 'Désactiver le contrôle de map' : "Activer le contrôle de map";
    a.appendChild(controlText);

    controlUI.addEventListener('click', function() {
        map.setOptions( {
            draggable: !map.draggable
        });
        controlText.innerHTML = map.draggable ? 'Désactiver le contrôle de map' : "Activer le contrôle de map";
    });
}

function initMap() {
    // https://developers.google.com/maps/documentation/javascript/reference#Marker
    // https://developers.google.com/maps/documentation/javascript/infowindows#open
    var coordNiderviller = {lat: 48.7121523, lng: 7.1071901};
    var coordStrasbourg = {lat: 48.584922, lng: 7.7750307};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordStrasbourg,
        scrollwheel: false,
        draggable: !is_touch_device()
    });

    // Create the DIV to hold the control and call the CenterControl()
    // constructor passing in this DIV.
    var toggleDagControlDiv = document.createElement('div');
    var toggleDagControl = new ToggleDrag(toggleDagControlDiv, map);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(toggleDagControlDiv);

    // Niderviller address (ceremonie + brunch)
    var infowindow = new google.maps.InfoWindow({
        content: '' +
        '<div class="note">Vin d\'honneur et réception</div>' +
        '<div class="">(Brunch le dimanche)</div>' +
        '<h4 class="map-title script">Restaurant M</h4>' +
        '<div class="address">' +
        '<span class="region">7 place du Général de Gaulle</span><br>' +
        '<span class="postal-code">57565</span><br>' +
        '<span class="city-name">Niderviller</span><br>' +
        '</div>'
    });
    var marker = new google.maps.Marker({
        position: coordNiderviller,
        map: map,
        title: 'Vin d\'honneur et réception'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        infowindow2.close();
    });

    // Mariage
    var infowindow2 = new google.maps.InfoWindow({
        content: '' +
        '<div class="note">Cérémonie</div>' +
        '<h4 class="map-title script">Salle des mariages, hôtel de ville</h4>' +
        '<div class="address">' +
        '<span class="region">Place Broglie</span><br>' +
        '<span class="postal-code">67000</span><br>' +
        '<span class="city-name">Strasbourg</span><br>' +
        '</div>'
    });
    var marker2 = new google.maps.Marker({
        position: coordStrasbourg,
        map: map,
        title: 'Cérémonie'
    });
    infowindow2.open(map, marker2);
    marker2.addListener('click', function() {
        infowindow.close();
        infowindow2.open(map, marker2);
    });

    var markers = {
        niderviller: {
            marker: marker,
            infoWindow: infowindow
        },
        strasbourg: {
            marker: marker2,
            infoWindow: infowindow2
        }
    };

    // This listener allow opening correct marker info on click
    // by specifying [data] value
    $('[data-target-map-marker]').on('click', function(){
        // close all previous info
        for(var tmp in markers){
            markers[tmp].infoWindow.close();
        }
        // open info for current marker
        var marker = markers[$(this).data('targetMapMarker')];
        marker.infoWindow.open(map, marker.marker);
    });
}