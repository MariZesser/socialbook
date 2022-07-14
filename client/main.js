import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/collection.js';
import './main.html';
import './ViewProfile/VP.html';
import './AddProfile/AD.html';
import './Profile/Profile.html';
import './Profile/Profile.js';
import './Navbar/Nav.html';
import './ConfirmDelete/CD.html';
import './ConfirmDelete/CD.js';
import bootstrap from 'bootstrap';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

Template.nav.events({
  'click .js-add'(){
    $("#addModal").modal("show");
  }
});

Template.main.events({
  'click .js-saveProfile'() {
    let pic = $("#Profpic").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let Num = $("#Num").val();
    let Sex = $("#male").prop("checked") ? "male" : "female";

    if (validateAddForm(pic,fName,lName,Num,Sex)) {
      socialdb.insert({
        "picPath": pic,
        "fname": fName,
        "lname": lName,
        "num":Num,
        "sex":Sex,
        "createdOn": new Date().getTime(),
      });
      $("#addModal").modal("hide");
    }
  },
  'input #Profpic'() {
    let path = $("#Profpic").val();
    path = !path ? "Avatar2.jpg" : path;
    $("#displayPic").prop("src", path);
  },
  'click .js-view'() {
    let that = this;
    $("#docId").val(that._id);
    $("#chkMe").html("<h2>" + $("#chkMe").html() + "</h2>profile picture<br>first<br>last<br>age<br>sex<br>description");
    $("#viewModal").modal("show");
  },
  "click .js-delete"() {
    let dId = $("#docId").val();
    $("#conId").val(dId);
    $("#viewModal").modal("hide");
    $("#conDelModal").modal("show");
  }
});

let validateAddForm = (fn,ln,nm,Sx,pc) => {
  let valid = true;
  $("#pic").removeClass("errorBox");
  $("#fName").removeClass("errorBox");
  $("#lName").removeClass("errorBox");
  $("#Num").removeClass("errorBox");
  $("#Sex").removeClass("errorBox");

  if (!fn) {
    $("#fName").addClass("errorBox");
    valid = false;
  }
  if (!ln) {
    $("#lName").addClass("errorBox");
    valid = false;
  }
  if (!nm) {
    $("#Num").addClass("errorBox");
    valid = false;
  }
  if (!Sx) {
    $("#Sex").addClass("errorBox");
    valid = false;
  }
  if (!pc) {
    $("#pic").addClass("errorBox");
    valid = false;
  }
  return valid;
}



// profile
// image
// name
// age
// sex