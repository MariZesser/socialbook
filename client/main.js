import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/collection.js';
import './main.html';
import './ViewProfile/VP.html';
import './AddProfile/AD.html';
import './Profile/Profile.html';
import './Navbar/Nav.html';
import './ConfirmDelete/CD.html';
import './ConfirmDelete/CD.js';
import bootstrap from 'bootstrap';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
Template.nav.events({
  'click .js-add'(){
    console.log("adding");
    $("#addModal").modal("show");
  }
});

Template.main.events({
  'click .js-saveProfile'() {
    // grad data from fields
    let pic = $("#Profpic").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let Sex = $("#male").prop("checked") ? "male" : "female";

    if (validateAddForm(fName, lName,Sex,pic)) {
      socialdb.insert({
        "picPath": pic,
        "fname": fName,
        "createdOn": new Date().getTime()
      });
      $("#addModal").modal("hide");
    }
  },
  'input #profPic'() {
    let path = $("#Profpic").val();
    path = !path ? "unisex-avatar.png" : path;
    $("#displaypic").prop("src", path);
    console.log(path);
  },
  'click .js-view'() {
    let that = this;
    $("#docId").val(that._id);
    $("#chkMe").html("<h2>" + $("#chkMe").html() + "</h2>profile picture<br>first<br>last<br>age<br>sex<br>description");
    //console.table(that);
    $("#viewModal").modal("show");
  },
  "click .js-delete"() {
    let dId = $("#docId").val();
    console.log (dId);
    $("#viewModal").modal("hide");
    $("#conDelModal").modal("show");
    $("#" + dId).fadeOut("slow", () => {
       socialdb.remove({
         "_id": dId
       });
    });
  }
});

let validateAddForm = (fn, ln,Sx,pc) => {
  let valid = true;
  $("#fName").removeClass("errorBox");
  $("#lName").removeClass("errorBox");

  if (!fn) {
    $("#fName").addClass("errorBox");
    valid = false;
  }
  if (!ln) {
    $("#lName").addClass("errorBox");
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

Template.profile.helpers({
  profiles(){
    return socialdb.find();
  }
});

// profile
// image
// name
// age
// sex