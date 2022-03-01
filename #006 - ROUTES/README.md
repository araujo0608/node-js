# ROUTES

A route is a "path" that will be "called" by an application or client and respond to some information.

For example, when I access [https://google.com](https://www.google.com/) it returns the default Google page, but when I access [https://google.com/robots.txt](https://www.google.com/robots.txt) it returns other data. Because we accessed another route, in this case robots.txt

![homepage](google-homepage.png);

<br>

![robots](google-robots.png);

Each route can have one or more functions, and it must be unique; when it receives a call it does all the necessary processing to return the data that was requested.

<br>

And there is no point in randomly accessing any route, it must be a route known by the application. In other words, there is no point in "creating" new non-existent routes because the back-end will return an error, probably with code 404. Like this:

![error](google-noroute.png);
