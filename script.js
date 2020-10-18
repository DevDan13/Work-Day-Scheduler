$(document).ready(function() {
    //array of hours to be used in the conditionals compared to the currentHour variable.
    var hours = [9,10,11,12,13,14,15,16,17];
  
    //an array of objects with a key hours. each index contains a key which contains a reference to its specfic time block
    var blockHours = [

      {
        hour: $("#hour-9")
      },

      {
        hour: $("#hour-10")
      },

      {
        hour: $("#hour-11")
      },

      {
        hour: $("#hour-12")
      },

      {
        hour: $("#hour-13")
      },

      {
        hour: $("#hour-14")
      },

      {
        hour: $("#hour-15")
      },

      {
        hour: $("#hour-16")
      },

      {
        hour: $("#hour-17")
      },
    ];
    
    //sets the current day displayed in the jumbotron
    var currentDay = $("#currentDay");
    currentDay.text(moment().weekday(0).format("dddd, MMMM Do YYYY"));

    //fetches the current hour to be used to set the text area to the proper class depending on the time.
    var currentHour = moment().hour();

    //create a for loop to run the conditionals or all the rows uses array of objects blockHours with keys that refference one of each hours 
    //in the hours array.  If currentHour is less than, greater than, or equal to the hour in the array, the referenced field is given the 
    //appropriate class.
    for (i = 0; i < hours.length; i++) {

      if (currentHour > hours[i]){
        blockHours[i].hour.addClass("past");
      }

      else if(currentHour < hours[i]){
        blockHours[i].hour.removeClass("past");
        blockHours[i].hour.addClass("future");
      }

      else{
        blockHours[i].hour.removeClass("past");
        blockHours[i].hour.removeClass("future");
        blockHours[i].hour.addClass("present");
      }
    }

    var saveButton = $("button");

    //here a reference to the save buttons are made and on click, the this pointer is used to get the value of the proper textarea of 
    //the save button pressed and saved into saveText. this saveText variable is used as the value for local storage, and the variable 
    //key is used as the key. this is done by getting the id attribute of the textarea tag.
    saveButton.on("click", function(){
      var txtArea = $(this).siblings("textarea");
      var saveText = txtArea.val();
      //console.log(txtArea);
      var key = txtArea.attr("id");
      localStorage.setItem(key,saveText);
      //console.log(key);
    });

    //here another array of objects are used to create a key value pair containing the keys that are already stored in local storage i.e. "hour-9" 
    //is the key for the value saveText in the first textarea. 
    var keys = [
      {
        id: "hour-9"
      },
      {
        id: "hour-10"
      },
      {
        id: "hour-11"
      },
      {
        id: "hour-12"
      },
      {
        id: "hour-13"
      },
      {
        id: "hour-14"
      },
      {
        id: "hour-15"
      },
      {
        id: "hour-16"
      },
      {
        id: "hour-17"
      }
    ];

    //here one local storage call is made in a for loop to read the data from local storage in the textareas.
    //the blockHours object arrays have a key value pair of references to the id's in the textarea tags.  keys[i].id contain the key value pair of 
    //id: "hour-17" which is the key of the local storage value.
    for(var i = 0; i < keys.length;i++){
      blockHours[i].hour.val(localStorage.getItem(keys[i].id));
    }
  });