// checking if user is logged in.
// send to login page if not logged in.
// !update cookie names in here!

export default function checkUserLogin(request, response, next) {
  request.userLoggedIn = false;
  if (request.cookies.loggedIn && request.cookies.userID) {
    request.userLoggedIn = true;
  }
  next();
}