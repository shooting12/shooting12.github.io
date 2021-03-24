// Whether to turn on showing image
var SHOW_IMAGE_AND_CAN_JUMP = true;
// Whether to display photo in original size (result in slowly loading)
var SHOW_ORIGINAL_SIZE_PHOTO = false;
// Build go out event dictionary
var eventDict = createEventDictionary();


function myFunction(year, month) {
  /* Change title of calendar */
  document.getElementById("calendar_year").innerHTML = year;

  var month_int_to_string = ['January', 'Feburary', 'March', 'April', 'May', 'June',
                             'July', 'August', 'September', 'October', 'November', 'December']
  document.getElementById("calendar_month").innerHTML = month_int_to_string[month - 1];


  /* Change content of calendar */
  var html = ""

  // Generate html for monday to sunday
  html += "<div class='calendar__day'>Sun</div>";
  html += "<div class='calendar__day'>Mon</div>";
  html += "<div class='calendar__day'>Tue</div>";
  html += "<div class='calendar__day'>Wed</div>";
  html += "<div class='calendar__day'>Thu</div>";
  html += "<div class='calendar__day'>Fri</div>";
  html += "<div class='calendar__day'>Sat</div>";

  // Generate html for days in the certain month
  var dayInMonthList = getDayInMonthList(year, month);
  console.log(dayInMonthList);

  var eventDays = getEventDayInMonth(eventDict, year, month)
  console.log(eventDays)

  if (SHOW_IMAGE_AND_CAN_JUMP) {
    html += generateDaysLinkHTML(dayInMonthList, eventDays, year, month)
  } else {
    html += generateDaysHTML(dayInMonthList, eventDays)
    
  }

  // Display the calendar by assigning html
  document.getElementById("dynamic_calendar_number").innerHTML = html;
}

function getDayInMonthList(year, month) {
  var deftulaEmptyList = [];

  if (year == 2019) {
    console.log("This is 2019.");

    switch(month) {
        case 12:
          return getZeroAndDays(0, 31);  
        default:
          console.warn("Invalid month " + month + " in 2019!");
          return deftulaEmptyList;
    }
  } else if (year == 2020) {
    console.log("This is 2020.");

    switch(month) {
        case 1:
          return getZeroAndDays(3, 31);
        case 5:
          return getZeroAndDays(5, 31);
        case 6:
          return getZeroAndDays(1, 30);
        case 7:
          return getZeroAndDays(3, 31);
        case 8:
          return getZeroAndDays(6, 31);
        case 10:
          return getZeroAndDays(4, 31);
        case 11:
          return getZeroAndDays(0, 30);
        case 12:
          return getZeroAndDays(2, 31);  
        default:
          console.warn("Invalid month " + month + " in 2020!");
          return deftulaEmptyList;
    }
  } else if (year == 2021) {
    console.log("This is 2021.");

    switch(month) {
        case 1:
          return getZeroAndDays(5, 31);
        case 2:
          return getZeroAndDays(1, 28);
        default:
          console.warn("Invalid month " + month +" in 2021!");
          return deftulaEmptyList;
    }
  } else {
    console.warn("Invalid year!");
  }
}

function getZeroAndDays(zeroNum, maxDays) {
    var dayList = [];

    for (var i = 1; i <= zeroNum; i++) {
      dayList.push(0);
    }
    for (var i = 1; i <= maxDays; i++) {
      dayList.push(i);
    }

    console.log(dayList);

    return dayList;
}

function generateDaysHTML(dayInMonthList, eventDays) {
    var html = "";

    for (var i = 0; i < dayInMonthList.length; i++) {
      if (dayInMonthList[i] == 0) {
        // Empty space in the beginning of month
        html += '<div class="calendar__number"></div>'
      }
      else if (eventDays.includes(dayInMonthList[i])) {
        // Create special tag to indicate this is a special day 
        // by checking whether this day is in the event list.
        html += '<div class="calendar__number calendar__number--event">' + dayInMonthList[i] + '</div>';
      } else {
        html += '<div class="calendar__number">' + dayInMonthList[i] + '</div>';
      }
    }

    return html;
}

function generateDaysLinkHTML(dayInMonthList, eventDays, year, month) {
    var html = "";

    for (var i = 0; i < dayInMonthList.length; i++) {
      if (dayInMonthList[i] == 0) {
        // Empty space in the beginning of month
        html += '<div class="calendar__number"></div>'
      }
      else if (eventDays.includes(dayInMonthList[i])) {
        /* Create special tag to indicate this is a special day 
           by checking whether this day is in the event list. */

        // Generate id name for onClick event.
        var id_name = "click_" + getPictureFileIndex(year, month, dayInMonthList[i]);
        html += '<div class="calendar__number calendar__number--event" id="' + id_name + '" onClick="onClickToImage(this.id)">' + dayInMonthList[i] + '</div>';        
      } else {
        html += '<div class="calendar__number">' + dayInMonthList[i] + '</div>';
      }
    }
    
    return html;
}

function createEventDictionary() {
    var dict = {};
    dict['201912'] = [24];
    dict['202001'] = [19];
    dict['202005'] = [17, 24, 31];
    dict['202006'] = [5, 10, 14, 25, 26, 27, 28];
    dict['202007'] = [5, 11];
    dict['202008'] = [8, 12, 15, 22, 23];
    dict['202010'] = [25];
    dict['202011'] = [26];
    dict['202012'] = [5, 9, 13, 21, 26, 31];
    dict['202101'] = [1, 4, 7, 11, 15, 21, 24, 28];
    dict['202102'] = [7];

    console.log(dict);
    return dict;
}

function getEventDayInMonth(eventDict, year, month) {
    var formattedMonth = ("0" + month).slice(-2); // format 5 to 05
    var monthStr = "" + year + formattedMonth;
    return eventDict[monthStr];
}

function getPictureFileIndex(year, month, day) {
    /* Given 2020 and 5, then get 2005 */
    formattedYear = ("0" + year).slice(-2)
    formattedMonth = ("0" + month).slice(-2);
    formattedDay = ("0" + day).slice(-2);
    picture_name = "" + formattedYear + formattedMonth + formattedDay;
    return picture_name;
}

function onClickToImage(clicked_id) {
    //alert(clicked_id);

    // Jump to show image
    window.location.href="#date_picture";

    // Dynamically give image source
    if (SHOW_ORIGINAL_SIZE_PHOTO) {
        var picture_name = clicked_id.slice(-6) + '.JPG';
        document.getElementById("date_picture").src = "img\\DatePicture\\" + picture_name;
    } else {
        var picture_name = clicked_id.slice(-6) + '.jpg';
        document.getElementById("date_picture").src = "img\\DatePicture_smaller_50%\\" + picture_name;
    }

    /* need to stop the form sending of the form
     UPDATE as comment: This may not be exactly correct syntax 
     for stopping a form , look up preventing form submission  */
    
    //e.preventDefault();
    //e.stopPropagation(); 
}