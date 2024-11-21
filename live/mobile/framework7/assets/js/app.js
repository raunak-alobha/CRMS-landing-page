/*
Template Name: CRMS - Frameowrk7 HTML Mobile Template
Author: Dreamguy's Technologies
Version: 1.1
*/


"use strict";
// Dom7

var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
	root: '#app', // App root element
	id: 'com.myapp.test',
	name: 'CRMS', // App name
	theme: 'ios', 
	swipePanel: false,
	// App root methods
	methods: {
		helloWorld: function () {
		app.dialog.alert('Hello World!');
		},
	},
	view: {
		iosDynamicNavbar: false,
		xhrCache: false,
	},
	photoBrowser: {
		type: 'popup',
	},
	popup: {
		closeByBackdropClick: false,
	},
	actions: {
		convertToPopover: false,
		grid: true,
	},
	// App routes
	routes: routes,
	popup: {
	   closeOnEscape: true,
	},
	sheet: {
	   closeOnEscape: true,
	},
	popover: {
	   closeOnEscape: true,
	},
	actions: {
	   closeOnEscape: true,
	},
	panel: {
		swipe: false,
		closeByBackdropClick: true,
	},
	on: {
        pageInit: function (e, page) {
        //Popular mentor slider
        if($('.popular-mentors .swiper-container').length > 0) {
          var swiper = new Swiper('.popular-mentors .swiper-container', {
              slidesPerView: 2.3,
              spaceBetween: 15,
              loop: true,
              speed: 1000,
              autoplay: {
                delay: 3000,
              },
          });
        }
        //Learning Path slider
        if($('.learing-paths .swiper-container').length > 0) {
          var swiper = new Swiper('.learing-paths .swiper-container', {
              slidesPerView: 2.3,
              spaceBetween: 15,
              loop: true,
              speed: 1000,
              autoplay: {
                delay: 3000,
              },
          });
        }
        // Schedule Timings Slider 
		if(jQuery('.schedule-timings .swiper-container').length > 0) {
			var swiper = new Swiper('.schedule-timings .swiper-container', {
				slidesPerView: 'auto',
				spaceBetween: 15,
			});
		}
        
		// Checkbox Changed
		$$('input[type=checkbox]').change(function(){
		  	if($$(this).is("input[type=checkbox]:checked")) {
		      	$$(this).parent().closest('.item-content').addClass("menuitemshow");
		  	} else {
		      	$$(this).parent().closest('.item-content').removeClass("menuitemshow");
		  	}
		});
		// Select 2
		if ($('.select').length > 0) {
		    $('.select').select2({
		        minimumResultsForSearch: -1,
		        width: '100%'
		    });
		}
		//Filter chat list
		$("#search-chat").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$(".chat-list ul li").filter(function() {
			  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});

        },
        pageAfterOut: function (e, page) {
          // page has left the view
        },
      }
});


// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});