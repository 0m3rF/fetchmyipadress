# fetchmyipadress
This nodejs API returns ip adress of a computer which makes request.

I deployed this to https://fetchmyipadress.herokuapp.com/

When you make a get request to this address (no routing), nodejs will return your ipv4 adress in json format like this;

{"ipv4":"12.35.19.21"}

I'm using heroku's free account so app goes to sleep after 30 min if no one uses it. App will start after you requested, but
you need to wait a little for app to start.
