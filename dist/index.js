"use strict";
class Ride {
    start() {
        Ride._activeRide++;
    }
    stop() {
        Ride._activeRide--;
    }
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 10;
const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride1.start();
console.log(Ride.activeRide);
//# sourceMappingURL=index.js.map