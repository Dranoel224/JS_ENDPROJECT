//Declaring my variables
let addbut;
let saved = localStorage.getItem("meetings");
let meetings = saved ? JSON.parse(saved) : [];
let meeting;

function initUI() { //Initialization of variables
    meeting = document.getElementById("meetingName");
    nMembers = document.getElementById("nMembers");
    aCoffers = document.getElementById("aCoffers");
    aOwing = document.getElementById("aOwing");
    displayMeetingDetails = document.getElementById("displayMeetingDetails");
    addbut = document.getElementById("addbut");
    deleteBtnEl = document.getElementsByClassName("deleteBtn");
    addbut.addEventListener("click", () => Input());
    // deleteBtnEl.addEventListener("click", () => onDeleteRow(this));
    showUI()
}

function showUI() { //Display in DOM
    displayMeetingDetails.innerHTML = meetings.map(function (x,i) {
        let text = ""
        text += "<tr id='" + x.id + "' style='background-color: lightblue; border-collapse: collapse'>";
        text += "<td align='center'>" + (i+1)+ 
        "</td>" + "<td align='left'>" + x.Name + "</td>" + 
        "<td align='center'>" + x.NO + "</td>" + "<td align='right'>" + x.AC + "</td>" + 
        "<td align='right'>" + x.AO + "</td>" + 
        "<td align='right'>" + '<button onclick="onDeleteRow(this)"><i class="fa fa-trash"></i></button>' + "</td>"; 
        text += "</tr>"
        return text;
    }).join(''); //
    if (meeting.value) { //Clearing the input fields
        localStorage.setItem(meeting.value, id);
        location.reload();
    }
}

function Input() {  //Diverse data input fields
    let meet = {
        id: new Date().valueOf(),
        Name: meeting.value,
        NO: nMembers.value,
        AC: aCoffers.value,
        AO: aOwing.value
    }
    //Delivering the meet object to the main containing array(meetings)
    meetings.push(meet); 
    localStorage.setItem("meetings", JSON.stringify(meetings));
    showUI()
}
console.log(meetings);

function displayBtn(id) { //Condition to return either true to enable either Delete or Edit or false for no action
    let filting = meetings.filter(id);
    if(checked){
        return filting;
    }
}

function onDeleteRow(filting){  //Function to delete a row of data
    filting.parentElement.parentElement.remove();
    meetings.splice(filting.parentElement.parentElement.id, 1);
    localStorage.setItem("meetings", JSON.stringify(meetings));
    
}


// function onDeleteRow(e){
//     let s = e.parentNode.parentNode;
//     s.parentNode.removeChild(s);
// }

// function onDeleteRow(filting){
//     let s = filting.parentElement.parentElement.remove();
//     s.parentNode.removeChild(s);
//     alert(s.parentNode.removeChild(s));
// }


// function onDeleteRow(e){
//     if(!e.target.meetings.constains("deleteBtn")){
//     return;
// }
// const btn = e.target;
// btn.closest("<tr>").remove();
// rembut.addEventListener("click", () => onDeleteRow());
// }
//document.getElementById("mn").innerHTML = meetings.map(function(item){return "<td>" + item + "</td>"}).join("\n");


/*
//insertion of meeting name into meetingArray and reloading the input
function Input() {
    //let key = meetingArray.value;
    insertMeeting = meetingArray.push(meetingName.value);
    console.log(meetingArray);

    if (meetingName.value) {
        localStorage.setItem(meetingName.value, "");
        location.reload();
    }
}
console.log(localStorage);

function displayStore() {
    let display = "";
    for (let i = 0; i < meetingArray.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        display += meetingArray[i] + "<br>"
        displayMeetingDetails.innerHTML = `${key}: ${value}`;
    }
}
*/


//meetingName.innerHTML = meetingArray;

//localStorage.removeItem('derty');


// function showItem(meetingArray) {
//     let meetingArr = meetingArray.map(showItem());
//     return meetingArr;
//     meetingAr = JSON.parse(localStorage.getItem(meetingArray));
//     localStorage.getItem(meetingAr);
//     console.log(meetingAr);
// }