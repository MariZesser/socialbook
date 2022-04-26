import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/collection.js';
import './main.html';
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
  'click.js-add'(){
    console.log("adding");
    $("#addModal").modal("show");
  }
});

Template.main.events({});

profile
// image
// name
// age
// sex