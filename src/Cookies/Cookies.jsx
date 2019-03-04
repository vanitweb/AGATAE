import {teachers} from '../../bn /data'
import React, { Component } from 'react';
import cookie from 'react-cookies'


//inchpes nshem vor loginn u parol@ berem data.jsx-ic u formic havaqn
const Cookies  = {
function setCookie(username, password, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = username + "=" + password + ";" + expires + ";path=/{username}";
}

function getCookie(username) {
  let name = username + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user + );
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
};
export {Cookies}