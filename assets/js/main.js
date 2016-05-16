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

    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/

    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
            limit: 28,
            get: 'tagged',
            tagName: 'filmweddingphotographer', /* Remember to use a unique hastag for the wedding */
            clientId: "467ede5a6b9b48ae8e03f4e2582aeeb3", /* IMPORTANT: REPLACE THE DEMO CLIENTID WITH YOUR CLIENTID! Find out your clientID: http://darkwhispering.com/how-to/get-a-instagram-client_id-key */
            resolution: 'thumbnail',
            template: '<a class="instagram-item item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
            sortBy: 'most-liked',
          // every time we load more, run this function
          after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
              loadButton.setAttribute('disabled', 'disabled');
            }
          },
    });

    // bind the load more button
    loadButton.addEventListener('click', function() {
      feed.next();
    });

    // run our feed!
    feed.run();

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

    /* ======= RSVP Form (Dependent form field) ============ */
    // $('#cguests').on("change", function(){
    //
    //     if ($(this).val() == "") {
    //         $('.guestinfo-group').slideUp(); //hide
    //         console.log('not selected');
    //     } else if ($(this).val() == 'No Guests' ) {
    //         $('.guestinfo-group').slideUp(); //hide
    //         console.log('No guests');
    //         $('#cguestinfo').val('No Guests'); //Pass data to the field so mailer.php can send the form.
    //
    //     } else {
    //         $('.guestinfo-group').slideDown(); //show
    //         $('#cguestinfo').val(''); //Clear data
    //         console.log('Has guests');
    //     }
    //
    //
    // });

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

function initMap() {
    // https://developers.google.com/maps/documentation/javascript/reference#Marker
    // https://developers.google.com/maps/documentation/javascript/infowindows#open
    var coordNiderviller = {lat: 48.7121523, lng: 7.1071901};
    var coordStrasbourg = {lat: 48.584922, lng: 7.7750307};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordStrasbourg,
        scrollwheel: false
    });

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