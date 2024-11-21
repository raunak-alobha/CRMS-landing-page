

$(document).ready(function () {
  if ($("nav a.click-scroll").length > 0) {
    $("nav a.click-scroll").click(function (e) {
      e.preventDefault();
      var id = $(this).attr("href");
      var target = $(id);
      var scrollTo = target.offset().top - 60;
      var speed = 1000;
      $("html,body").animate(
        {
          scrollTop: scrollTo,
        },
        speed
      );
    });
  }

  if ($("#view_tabs").length > 0) {
    $("#view_tabs").click("show", function (e) {
      paneID = $(e.target).attr("href");
      src = $(paneID).attr("data-src");
      // if the iframe hasn't already been loaded once
      if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
      }
    });
  }

  if ($('#view_tabs a[data-bs-toggle="tab"]').length > 0) {
    $('#view_tabs a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      // save the latest tab; use cookies if you like 'em better:
      localStorage.setItem("lastTab", $(this).attr("href"));
    });

    // go to the latest tab, if it exists:
    var lastTab = localStorage.getItem("lastTab");
    if (lastTab) {
      $('[href="' + lastTab + '"]').tab("show");
      $(lastTab + " iframe").attr("src", $(lastTab).attr("data-src"));
    } else {
      $("#mobile_tab iframe").attr("src", $("#mobile_tab").attr("data-src"));
    }
  }

  if ($("#view_tabs2").length > 0) {
    $("#view_tabs2").click("show", function (e) {
      paneID = $(e.target).attr("href");
      src = $(paneID).attr("data-src");
      // if the iframe hasn't already been loaded once
      if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
      }
    });
  }

  if ($('#view_tabs2 a[data-bs-toggle="tab"]').length > 0) {
    $('#view_tabs2 a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      // save the latest tab; use cookies if you like 'em better:
      localStorage.setItem("lastTabs", $(this).attr("href"));
    });

    // go to the latest tab, if it exists:
    var lastTabs = localStorage.getItem("lastTabs");
    if (lastTabs) {
      $('[href="' + lastTabs + '"]').tab("show");
      $(lastTabs + " iframe").attr("src", $(lastTabs).attr("data-src"));
    } else {
      $("#mobile_tab2 iframe").attr("src", $("#mobile_tab2").attr("data-src"));
    }
  }

  if ($("#view_tabs3").length > 0) {
    $("#view_tabs3").click("show", function (e) {
      paneID = $(e.target).attr("href");
      src = $(paneID).attr("data-src");
      // if the iframe hasn't already been loaded once
      if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
      }
    });
  }

  if ($('#view_tabs3 a[data-bs-toggle="tab"]').length > 0) {
    $('#view_tabs3 a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      // save the latest tab; use cookies if you like 'em better:
      localStorage.setItem("lastTabs", $(this).attr("href"));
    });

    // go to the latest tab, if it exists:
    var lastTabs = localStorage.getItem("lastTabs");
    if (lastTabs) {
      $('[href="' + lastTabs + '"]').tab("show");
      $(lastTabs + " iframe").attr("src", $(lastTabs).attr("data-src"));
    } else {
      $("#mobile_tab3 iframe").attr("src", $("#mobile_tab3").attr("data-src"));
    }
  }

  if ($("#view_tabs4").length > 0) {
    $("#view_tabs4").click("show", function (e) {
      paneID = $(e.target).attr("href");
      src = $(paneID).attr("data-src");
      // if the iframe hasn't already been loaded once
      if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
      }
    });
  }

  if ($('#view_tabs4 a[data-bs-toggle="tab"]').length > 0) {
    $('#view_tabs4 a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      // save the latest tab; use cookies if you like 'em better:
      localStorage.setItem("lastTabs", $(this).attr("href"));
    });

    // go to the latest tab, if it exists:
    var lastTabs = localStorage.getItem("lastTabs");
    if (lastTabs) {
      $('[href="' + lastTabs + '"]').tab("show");
      $(lastTabs + " iframe").attr("src", $(lastTabs).attr("data-src"));
    } else {
      $("#mobile_tab4 iframe").attr("src", $("#mobile_tab4").attr("data-src"));
    }
  }

  if ($("#view_tabs5").length > 0) {
    $("#view_tabs5").click("show", function (e) {
      paneID = $(e.target).attr("href");
      src = $(paneID).attr("data-src");
      // if the iframe hasn't already been loaded once
      if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
      }
    });
  }

  if ($('#view_tabs5 a[data-bs-toggle="tab"]').length > 0) {
    $('#view_tabs5 a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      // save the latest tab; use cookies if you like 'em better:
      localStorage.setItem("lastTabs", $(this).attr("href"));
    });

    // go to the latest tab, if it exists:
    var lastTabs = localStorage.getItem("lastTabs");
    if (lastTabs) {
      $('[href="' + lastTabs + '"]').tab("show");
      $(lastTabs + " iframe").attr("src", $(lastTabs).attr("data-src"));
    } else {
      $("#mobile_tab5 iframe").attr("src", $("#mobile_tab5").attr("data-src"));
    }
  }

  if ($("#view_tabs6").length > 0) {
    $("#view_tabs6").click("show", function (e) {
      paneID = $(e.target).attr("href");
      src = $(paneID).attr("data-src");
      // if the iframe hasn't already been loaded once
      if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
      }
    });
  }

  if ($('#view_tabs6 a[data-bs-toggle="tab"]').length > 0) {
    $('#view_tabs6 a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      // save the latest tab; use cookies if you like 'em better:
      localStorage.setItem("lastTabs", $(this).attr("href"));
    });

    // go to the latest tab, if it exists:
    var lastTabs = localStorage.getItem("lastTabs");
    if (lastTabs) {
      $('[href="' + lastTabs + '"]').tab("show");
      $(lastTabs + " iframe").attr("src", $(lastTabs).attr("data-src"));
    } else {
      $("#mobile_tab6 iframe").attr("src", $("#mobile_tab6").attr("data-src"));
    }
  }
});
