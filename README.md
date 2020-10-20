# Work-Day-Scheduler

## Major Task 1

* Within index.html, the proper timeblocks were created using a row for every hour that would be displauyed on the planner.

    * Within these rows are three columns that display the proper areas for the rest of the major tasks.

    * The first column contains the hour for that row.

    * The second column contains a textarea that uses the hour column to set itself to past present or future.
      its color changes accordingly.
    
    * The third column contains the save Button where once clicked, it saves the data in local storage and is read to 
      the textarea.  This way the users events can be saved even when they refresh the page or close their browser.

* The appropriate classes and id's were given to these tags (row, col, textarea, button) to be used by the style.css file and the script.js file.

## Major Task 2

* The current day and hour were fetched using moment.js functions and methods.

* **blockHours**, an array of objects, was then created using a key value pair of hour: $("#hour-9) for each of the id's of every textarea.

* Appropriate classes were given by using a for loop which neatly adds the past, present, or future classes to the text area, based on if the currentHour fetched by moment
  was greater than, equal to, or less than the hour of that row represented by an array **hours** which had military time values of [9,10,11,12,13,14,15,16,17].

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

## Major Task 3

* The saveButton variable was made and given refference to all buttons.  when clicked it used an eventlistener to save the data typed into the textarea 
  into local storage.  **This** is done by using the $(this) pointer.  it points at that exact textarea for that row and is saved into the txtArea variable.

  saveButton.on("click", function(){
      var txtArea = $(this).siblings("textarea");
      var saveText = txtArea.val();
      //console.log(txtArea);
      var key = txtArea.attr("id");
      localStorage.setItem(key,saveText);
      //console.log(key);
    });

* The value of that textArea string is saved into the saveText variable. a key is then created by setting the id attribute to txtArea.

* Finally to complete the saving, the local storage function is used and sets the newly created key value pair of key as the key and saveText as the value.

* Another array object was then created named **keys**.

    * Here the key value pair within this array of objects are key: "hour-9".  

    * This key's value is the key from the key value pair that was saved into localStorage.

as an example:   var keys = [
                {
                    id: "hour-9"       //here the value in this pair was the key from local storage so it can be used in a for loop later!
                },
                {
                    id: "hour-10"
                },
                 {

* *Finally* a for loop was used to read the data from local storage.

for(var i = 0; i < keys.length;i++){
      blockHours[i].hour.val(localStorage.getItem(keys[i].id));
    }

* Here the condition is set to the length of the keys array object.

    * In it the previous array object is used again because its value in its key value pair was the reference to the textarea id's.

    * here the **.val()** function was used to read the data with localStorage.getItem().  

    * keys array objects value was the key set in local storage and its data saveText is pased into the proper textarea tag. 
      and saved whenb refreshed or if the browser is closed!


## PROJECT LINK

https://devdan13.github.io/Work-Day-Scheduler/

## Demo Picture

![image](https://user-images.githubusercontent.com/69943020/96529172-75542880-1252-11eb-8036-764f1c598746.png)