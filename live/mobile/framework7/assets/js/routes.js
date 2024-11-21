var routes = [
  // Index page
	{
		path: '/',
		url: './index.html',
		name: 'home',
		on: {
			pageInit: function (e, page) {
				
				// Total Deals New
				if($('#deals-chart').length > 0) {					
					var options = {
							series: [1258],
							chart: {
							type: 'radialBar',
							offsetY: -20,
							sparkline: {
							enabled: true
						}
					},
					colors: ["#6F2BCE"],
					plotOptions: {
						radialBar: {
						startAngle: -90,
						endAngle: 90,
						track: {
								background: "#E4E4E4",
								strokeWidth: '100%',
								margin: 5,
								dropShadow: {
								enabled: true,
								top: 10,
								left: 0,
								color: '#E4E4E4',
								opacity: 1,
								blur: 2
							}
						},
						dataLabels: {
							name: {
								show: true
							},
							value: {
								offsetY: -36,
								fontSize: '25px'
							}
						}
						}
					},
					grid: {
						padding: {
							top: -10
						}
					},
					fill: {
						type: "gradient",
						gradient: {
						shade: 'dark',
						shadeIntensity: 1,
						inverseColors: true,
						opacityFrom: 1,
						opacityTo: 1,
						stops: [0, 10],
						gradientToColors: "#6F2BCE",
						},
					},
					labels: ['DEALS'],
					};

					var chart = new ApexCharts(document.querySelector("#deals-chart"), options);
					chart.render();
				}

				// Total Deals Chart One
				if($('#chartTdOne').length > 0) {
					var options = {
						chart: {
						  height: 100,
						  type: "radialBar",
						},
					  
						series: [46],
						colors: ["#FE4C64"],
						plotOptions: {
						  radialBar: {
							hollow: {
							  margin: 0,
							  size: "50%",
							  background: "#fff"
							},
							track: {
								background: "#FFD7DC",
							  dropShadow: {
								enabled: false,
								top: 2,
								left: 0,
								blur: 4,
								opacity: 0.15
							  }
							},
							dataLabels: {							
							  name: {
								offsetY: -10,
								color: "#fff",
								fontSize: "13px",
								show: false
							  },
							  value: {
								color: "#151522",
								fontSize: "12px",
								show: true,
								offsetY: 5,
							  }
							}
						  }
						},
						fill: {
						  type: "gradient",
						  gradient: {
							shade: "dark",
							type: "vertical",
							gradientToColors: ["#FE4C64"],
							stops: [0, 10]
						  }
						},
						stroke: {
						  lineCap: "round"
						},
						labels: ["Progress"]
					  };
					  
					  var chart = new ApexCharts(document.querySelector("#chartTdOne"), options);
					  
					  chart.render();
				}

				// Total Deals Chart Two
				if($('#chartTdTwo').length > 0) {
					var options = {
						chart: {
						  height: 100,
						  type: "radialBar",
						},
					  
						series: [74],
						colors: ["#F8BF69"],
						plotOptions: {
						  radialBar: {
							hollow: {
							  margin: 0,
							  size: "50%",
							  background: "#fff"
							},
							track: {
								background: "#FEEACC",
							  dropShadow: {
								enabled: false,
								top: 2,
								left: 0,
								blur: 4,
								opacity: 0.15
							  }
							},
							dataLabels: {							
							  name: {
								offsetY: -10,
								color: "#fff",
								fontSize: "13px",
								show: false
							  },
							  value: {
								color: "#151522",
								fontSize: "12px",
								show: true,
								offsetY: 5,
							  }
							}
						  }
						},
						fill: {
						  type: "gradient",
						  gradient: {
							shade: "dark",
							type: "vertical",
							gradientToColors: ["#F8BF69"],
							stops: [0, 10]
						  }
						},
						stroke: {
						  lineCap: "round"
						},
						labels: ["Progress"]
					  };
					  
					  var chart = new ApexCharts(document.querySelector("#chartTdTwo"), options);
					  
					  chart.render();
				}

				// Total Deals Chart Three
				if($('#chartTdThree').length > 0) {
					var options = {
						chart: {
						  height: 100,
						  type: "radialBar",
						},
					  
						series: [14],
						colors: ["#6979F8"],
						plotOptions: {
						  radialBar: {
							hollow: {
							  margin: 0,
							  size: "50%",
							  background: "#fff"
							},
							track: {
								background: "#CDD2FD",
							  dropShadow: {
								enabled: false,
								top: 2,
								left: 0,
								blur: 4,
								opacity: 0.15
							  }
							},
							dataLabels: {							
							  name: {
								offsetY: -10,
								color: "#fff",
								fontSize: "13px",
								show: false
							  },
							  value: {
								color: "#151522",
								fontSize: "12px",
								show: true,
								offsetY: 5,
							  }
							}
						  }
						},
						fill: {
						  type: "gradient",
						  gradient: {
							shade: "dark",
							type: "vertical",
							gradientToColors: ["#6979F8"],
							stops: [0, 10]
						  }
						},
						stroke: {
						  lineCap: "round"
						},
						labels: ["Progress"]
					  };
					  
					  var chart = new ApexCharts(document.querySelector("#chartTdThree"), options);
					  
					  chart.render();
				}

				// Product Sale Chart
				if($('#product-chart').length > 0) {
					var options = {
						colors: ['#6F2BCE', '#CDD2FD'],
						series: [{
						name: 'series1',
						data: [31, 40, 28, 51, 42, 109, 100]
					  }, {
						name: 'series2',
						data: [11, 32, 45, 32, 34, 52, 41]
					  }],
						chart: {
						height: 300,
						type: 'area',
						toolbar: {
							show: false
						},
						colors: ['#6F2BCE']
					  },
					  fill: {
						type: 'gradient',
						colors: ['#6F2BCE']
					  },
					  dataLabels: {
						enabled: false,						
					  },
					  markers: {
						show: false
					  },
					  stroke: {
						curve: 'smooth',
						width: 0
					  },
					  xaxis: {
						categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
					  },
					  yaxis: {
						  labels: {
							  show: false
						  }
					  },
					  grid: {
						  show: false
					  },
					  tooltip: {
						x: {
						  format: 'dd/MM/yy HH:mm'
						},
					  },
					};
			  
					var chart = new ApexCharts(document.querySelector("#product-chart"), options);
					chart.render();
				}

				// Total Project Chart
				if($('#total-project-chart').length > 0) {
					var options = {
						series: [{
						data: [40, 43, 65, 47, 84, 50]
					  }],
						chart: {
						type: 'bar',
						height: 250,
						toolbar: {
							show: false
						},
					  },
					  fill: {
						colors: ['#6F2BCE']
					  },
					  plotOptions: {
						bar: {
						  borderRadius: 4,
						  horizontal: true,
						}
					  },
					  grid: {
						show: false
					  },
					  dataLabels: {
						enabled: false
					  },
					  xaxis: {
						categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
					  }
					};
			  
					var chart = new ApexCharts(document.querySelector("#total-project-chart"), options);
					chart.render();
				}

				// Sales Overview Chart
				if($('#sales-overview-chart').length > 0) {
					var options = {
						series: [{
						  name: "Desktops",
						  data: [10, 41, 35, 51, 49, 62, 69]
					  }],
						chart: {
						height: 300,
						type: 'line',
						toolbar: {
							show: false
						},
						zoom: {
						  enabled: false
						}
					  },
					  colors:['#6F2BCE'],
					  dataLabels: {
						enabled: false
					  },
					  stroke: {
						curve: 'straight'
					  },
					  grid: {
						show: false
					  },
					  xaxis: {
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
					  }
					};
			
					var chart = new ApexCharts(document.querySelector("#sales-overview-chart"), options);
					chart.render();
				}

				// Lead Statistics Chart
				if($('#lead-statistics-chart').length > 0) {
					var options = {
						series: [{
						data: [{
							x: 'Jan',
							y: [6629.81, 6650.5, 6623.04, 6633.33]
						  },
						  {
							x: 'Feb',
							y: [6632.01, 6643.59, 6620, 6630.11]
						  },
						  {
							x: 'Mar',
							y: [6630.71, 6648.95, 6623.34, 6635.65]
						  },
						  {
							x: 'Apr',
							y: [6635.65, 6651, 6629.67, 6638.24]
						  },
						  {
							x: 'May',
							y: [6638.24, 6640, 6620, 6624.47]
						  },
						  {
							x: 'Jun',
							y: [6632.01, 6643.59, 6620, 6630.11]
						  },
						  {
							x: 'Jul',
							y: [6630.71, 6648.95, 6623.34, 6635.65]
						  },
						]
					  }],
						chart: {
						type: 'candlestick',
						height: 350,
						toolbar: {
							show: false
						}
					  },
					  plotOptions: {
						candlestick: {
							colors: {
							  upward: '#6F2BCE',
							  downward: '#97A1D7'
							}
						  }
					  },
					  grid: {
						  show: false
					  },
					  xaxis: {
						type: 'text',
					  },
					  yaxis: {
						tooltip: {
						  enabled: true
						}
					  }
					  };
			  
					  var chart = new ApexCharts(document.querySelector("#lead-statistics-chart"), options);
					  chart.render();
				}

				// Sales Chart
				if($('#sales-chart').length > 0) {
					var options = {
						series: [{
						name: 'Net Profit',
						data: [44, 55, 57, 56, 61, 58, 63]
					  }, {
						name: 'Revenue',
						data: [76, 85, 101, 98, 87, 105, 91]
					  }],
						chart: {
						type: 'bar',
						height: 350,
						toolbar: {
							show: false
						}
					  },
					  plotOptions: {
						bar: {
						  horizontal: false,
						  columnWidth: '55%',
						  endingShape: 'rounded'
						},
					  },
					  colors: ['#9BA6FA', '#6F2BCE'],
					  dataLabels: {
						enabled: false
					  },
					  stroke: {
						show: true,
						width: 2,
						colors: ['transparent']
					  },
					  xaxis: {
						categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
					  },
					  yaxis: {
						title: {
						  show: false
						}
					  },
					  grid: {
						  show: false
					  },
					  fill: {
						opacity: 1
					  },
					  legend: {
						show: false
					  },
					  tooltip: {
						y: {
						  formatter: function (val) {
							return "$ " + val + " thousands"
						  }
						}
					  }
					};
			
					var chart = new ApexCharts(document.querySelector("#sales-chart"), options);
					chart.render();
				}
				
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
	},
	{
		path: '/activities/',
		url: './pages/activities.html',
		name: 'activities',
	},
	{
		path: '/leads/',
		url: './pages/leads.html',
		name: 'leads',
	},
	{
		path: '/companies/',
		url: './pages/companies.html',
		name: 'companies',
	},
	{
		path: '/deals/',
		url: './pages/deals.html',
		name: 'deals',
	},
	{
		path: '/projects/',
		url: './pages/projects.html',
		name: 'projects',
	},
	{
		path: '/add-tasks/',
		url: './pages/add-tasks.html',
		name: 'add-tasks',
		on: {
			pageInit: function (e, page) {
				var calendarModal = app.calendar.create({
		            inputEl: '#due-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
	          	var calendarModal = app.calendar.create({
		            inputEl: '#start-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
	          	var calendarModal = app.calendar.create({
		            inputEl: '#reminder-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
	},
	{
		path: '/new-contact/',
		url: './pages/new-contact.html',
		name: 'new-contact',
		on: {
			pageInit: function (e, page) {
				var calendarModal = app.calendar.create({
		            inputEl: '#due-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
	          	var calendarModal = app.calendar.create({
		            inputEl: '#start-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
  	},
  	{
		path: '/add-company/',
		url: './pages/add-company.html',
		name: 'add-company',
		on: {
			pageInit: function (e, page) {
				var calendarModal = app.calendar.create({
		            inputEl: '#date-to-remember',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
  	},
  	{
		path: '/add-lead/',
		url: './pages/add-lead.html',
		name: 'add-lead',
  	},
  	{
		path: '/add-deal/',
		url: './pages/add-deal.html',
		name: 'add-deal',
		on: {
			pageInit: function (e, page) {
				var calendarModal = app.calendar.create({
		            inputEl: '#forecast-close-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
	          	var calendarModal = app.calendar.create({
		            inputEl: '#actual-close-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
	},
	{
		path: '/add-project/',
		url: './pages/add-project.html',
		name: 'add-project',
	},
	{
		path: '/new-activity/',
		url: './pages/new-activity.html',
		name: 'new-activity',
		on: {
			pageInit: function (e, page) {
				var calendarModal = app.calendar.create({
		            inputEl: '#due-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
	          	var calendarModal = app.calendar.create({
		            inputEl: '#start-date',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
	},
	{
		path: '/contacts/',
		url: './pages/contacts.html',
		name: 'contacts',
	},
	{
		path: '/calendar/',
		url: './pages/calendar.html',
		name: 'calendar',
		on: {
			pageInit: function (e, page) {

				var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

				calendarInline = app.calendar.create({
					containerEl: '#calendar-inline-container',
					value: [new Date()],
					weekHeader: false,
					renderToolbar: function () {
					  return `
					  <div class="toolbar calendar-custom-toolbar no-shadow">
						<div class="toolbar-inner">
						  <div class="left">
							<a href="#" class="link icon-only"><i class="icon icon-back ${app.theme === 'md' ? 'color-black' : ''}"></i></a>
						  </div>
						  <div class="center"></div>
						  <div class="right">
							<a href="#" class="link icon-only"><i class="icon icon-forward ${app.theme === 'md' ? 'color-black' : ''}"></i></a>
						  </div>
						</div>
					  </div>
					  `;
					},
					on: {
					  init: function (c) {
						$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ', ' + c.currentYear);
						$('.calendar-custom-toolbar .left .link').on('click', function () {
						  calendarInline.prevMonth();
						});
						$('.calendar-custom-toolbar .right .link').on('click', function () {
						  calendarInline.nextMonth();
						});
					  },
					  monthYearChangeStart: function (c) {
						$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ', ' + c.currentYear);
					  }
					}
				  });

			},

			pageAfterOut: function (e, page) {
				// page has left the view
			  },
		}

	},
	{
		path: '/chat/',
		url: './pages/chat.html',
		name: 'chat',
		on: {
        pageInit: function (e, page) {
        	$(".search .form-control").on("keyup", function() {
		        var value = $(this).val().toLowerCase();
		        $(".chat-list .list-group ul li").filter(function() {
		            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		        });
		    });
        },
        pageAfterOut: function (e, page) {
          // page has left the view
        },
      }
	},
	{
		path: '/chat-view/',
		url: './pages/chat-view.html',
		name: 'chat-view'
	},
	{
		path: '/email/',
		url: './pages/email.html',
		name: 'email',

	},
	{
		path: '/email-list/',
		url: './pages/email-list.html',
		name: 'email',
		on: {
        pageInit: function (e, page) {
        	$(".search .form-control").on("keyup", function() {
		        var value = $(this).val().toLowerCase();
		        $(".chat-list .list-group ul li").filter(function() {
		            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		        });
		    });
        },
        pageAfterOut: function (e, page) {
          // page has left the view
        },
      }
	},
	{
		path: '/email-view/',
		url: './pages/email-view.html',
		name: 'email',
	},
	{
		path: '/settings/',
		url: './pages/settings.html',
		name: 'settings',
		on: {
			pageInit: function (e, page) {
				var calendarModal = app.calendar.create({
		            inputEl: '#date-of-birth',
		            openIn: 'customModal',
		            header: true,
		            footer: true,
	          	});
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
	},
	{
		path: '/my-profile/',
		url: './pages/my-profile.html',
		name: 'my-profile',
	},
	{
		path: '/tasks/',
		url: './pages/tasks.html',
		name: 'tasks',
	},
	{
		path: '/login/',
		url: './pages/login.html',
		name: 'login',
	},
	{
		path: '/forgot-password/',
		url: './pages/forgot-password.html',
		name: 'forgot-password',
	},
	{
		path: '/change-password/',
		url: './pages/change-password.html',
		name: 'change-password',
	},
	{
		path: '/register/',
		url: './pages/register.html',
		name: 'register',
	},
	{
		path: '/pages/',
		url: './pages/pages.html',
		name: 'pages',
	},
	{
		path: '/voice-call/',
		url: './pages/voice-call.html',
		name: 'voice-call',
	},
	{
		path: '/video-call/',
		url: './pages/video-call.html',
		name: 'video-call',
  	},
  	{
		path: '/light-box/',
		url: './pages/light-box.html',
		name: 'light-box',
		on: {
			pageInit: function (e, page) {
				/*=== standalone ===*/
			    var myPhotoBrowserStandalone = app.photoBrowser.create({
			        photos: [
			          'assets/img/user/user.jpg',
			          'assets/img/user/user1.jpg',
			          'assets/img/user/user2.jpg',
			          'assets/img/user/user4.jpg',
			          'assets/img/user/user5.jpg',
			        ]
			    });
			    //Open photo browser on click
			    $('.pb-standalone').on('click', function () {
			        myPhotoBrowserStandalone.open();
			    });
			    /*=== Popup ===*/
		      	var myPhotoBrowserPopup = app.photoBrowser.create({
			        photos: [
			          'assets/img/user/user.jpg',
			          'assets/img/user/user1.jpg',
			          'assets/img/user/user2.jpg',
			          'assets/img/user/user4.jpg',
			          'assets/img/user/user5.jpg',
			        ],
		        	type: 'popup'
		      	});
		      	$('.pb-popup').on('click', function () {
		        	myPhotoBrowserPopup.open();
		      	});
		      	/*=== As Page ===*/
		     	 var myPhotoBrowserPage = app.photoBrowser.create({
			        photos: [
			          'assets/img/user/user.jpg',
			          'assets/img/user/user1.jpg',
			          'assets/img/user/user2.jpg',
			          'assets/img/user/user4.jpg',
			          'assets/img/user/user5.jpg',
			        ],
			        type: 'page',
		      	});
			    $('.pb-page').on('click', function () {
			        myPhotoBrowserPage.open();
			    });
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
  	},
  	{
		path: '/datepicker/',
		url: './pages/datepicker.html',
		name: 'datepicker',
		on: {
			pageInit: function (e, page) {
				// Default
		      	calendarDefault = app.calendar.create({
		        	inputEl: '#demo-calendar-default',
		      	});
		      	calendarDateFormat = app.calendar.create({
		        	inputEl: '#demo-calendar-date-format',
		        	dateFormat: { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' },
		      	});
		      	// Date + Time
			    calendarDateTime = app.calendar.create({
			        inputEl: '#demo-calendar-date-time',
			        timePicker: true,
			        dateFormat: { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' },
			    });
			    // With multiple values
			    calendarMultiple = app.calendar.create({
			        inputEl: '#demo-calendar-multiple',
			        dateFormat: { month: 'short', day: 'numeric' },
			        multiple: true
			    });
			    // Range Picker
		      	calendarRange = app.calendar.create({
		        	inputEl: '#demo-calendar-range',
		        	rangePicker: true
		      	});
		      	// Custom modal
			    calendarModal = app.calendar.create({
			        inputEl: '#demo-calendar-modal',
			        openIn: 'customModal',
			        header: true,
			        footer: true,
			    });
			    // Disabled
			    var today = new Date();
			    var weekLater = new Date().setDate(today.getDate() + 7);
			    calendarDisabled = app.calendar.create({
			        inputEl: '#demo-calendar-disabled',
			        disabled: {
			          	from: today,
			          	to: weekLater
			        }
			    });
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
  	},
  	{
		path: '/dialog/',
		url: './pages/dialog.html',
		name: 'dialog',
		on: {
			pageInit: function (e, page) {
				// Alert
			    $('.open-alert').on('click', function () {
			        app.dialog.alert('Hello');
			    });
			    // Confirm
			    $('.open-confirm').on('click', function () {
			        app.dialog.confirm('Are you feel good today?', function () {
			          app.dialog.alert('Great!');
			        });
			    });
			    // Prompt
			    $('.open-prompt').on('click', function () {
			        app.dialog.prompt('What is your name?', function (name) {
			          app.dialog.confirm('Are you sure that your name is ' + name + '?', function () {
			            app.dialog.alert('Ok, your name is ' + name);
			          });
			        });
			    });
			    // Login
			    $('.open-login').on('click', function () {
			        app.dialog.login('Enter your username and password', function (username, password) {
			         	app.dialog.alert('Thank you!<br>Username:' + username + '<br>Password:' + password);
			        });
			    });
			    // Password
			    $('.open-password').on('click', function () {
			        app.dialog.password('Enter your password', function (password) {
			          app.dialog.alert('Thank you!<br>Password:' + password);
			        });
			    });
			},
			pageAfterOut: function (e, page) {
			  // page has left the view
			},
		}
  	},
  	{
		path: '/popup/',
		url: './pages/popup.html',
		name: 'popup',
		on: {
        pageInit: function (e, page) {
        	// Create dynamic Popup
		    var dynamicPopup = app.popup.create({
		        content: `
		          <div class="popup custom-popup-new">
		            <div class="block">
		              <p>Popup created dynamically.</p>
		              <p><a href="#" class="link popup-close">Close me</a></p>
		            </div>
		          </div>
		        `,
		        // Events
		        on: {
		          open: function (popup) {
		            console.log('Popup open');
		          },
		          opened: function (popup) {
		            console.log('Popup opened');
		          },
		        }
		    });
		    // Open dynamic popup
		    $('.dynamic-popup').on('click', function () {
		        dynamicPopup.open();
		    });
		    // Create Popup with swipe to close
		    var swipeToClosePopup = app.popup.create({
		        el: '.popup-swipe-to-close',
		        swipeToClose: true,
		    });
		    // Create Popup with swipe to close handler
		    var swipeToClosePopup = app.popup.create({
		        el: '.popup-swipe-to-close-handler',
		        swipeToClose: true,
		        swipeHandler: '.my-swipe-to-close-handler',
		    });
        },
        pageAfterOut: function (e, page) {
          // page has left the view
        },
      }
  	},
];