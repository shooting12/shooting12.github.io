function myFunction(year, month) {
  /* Change title of calendar */
  document.getElementById("calendar_year").innerHTML = year;

  var month_int_to_string = ['January', 'Feburary', 'March', 'April', 'May', 'June',
                             'July', 'August', 'September', 'October', 'November', 'December']
  document.getElementById("calendar_month").innerHTML = month_int_to_string[month - 1];
}


