// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let today = dayjs();
  // a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  //
  let saveBtn = $(".saveBtn");
  saveBtn.on("click", function (e) {
    let eParent = $(this).parent();
    let timeBlockEId = eParent.attr("id");
    let eLog = eParent.children("textarea").val();
    console.log(eParent);
    console.log(eLog);
    console.log(timeBlockEId);

    localStorage.setItem(timeBlockEventId, eventLog);
    // console.log(eventLog);
  });

  for (let i = 9; i < 18; i++) {
    const localSItem = localStorage.getItem(i);
    console.log(localSItem, i);
    let tBlockId = i;
    $(`#${tBlockId}`).children("textarea").val(localSItem);

  }

  // code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  let currentHour = today.hour();
  console.log(currentHour);
  let tBlock = $(".time-block");

  // console.log(timeBlock);

  for (let i = 0; i < tBlock.length; i++) {
    if (tBlock[i].id > currentHour) {
      tBlock[i].classList.add("future");
    } else if (tBlock[i].id == currentHour) {
      tBlock[i].classList.add("present");
    } else {
      tBlock[i].classList.add("past");
    }
  }



  //code to display the current date in the header of the page.
  $("#currentDay").text(today.format("h:mma dddd, MMMM D"));
});