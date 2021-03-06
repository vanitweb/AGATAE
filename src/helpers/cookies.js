import cookie from 'react-cookies';

function setCookie(email, password, exdays=1) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = `expires=${d.toGMTString()}`;
    document.cookie = `${email}=${password};${expires}; path=/{email}`;
}
function getCookie(name, password) {
    let email = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    ));
    return email ? decodeURIComponent(email[1]) : undefined;
}

/*function checkCookie() {
  let user = getCookie("email");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("email", user, 7);
    }
  }
} */

export {setCookie, getCookie};