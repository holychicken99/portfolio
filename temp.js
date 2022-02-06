const wifiName = require('wifi-name');

wifiName().then(name => {
    console.log(name);
    //=> 'wu-tang lan'
});
