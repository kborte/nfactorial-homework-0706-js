import { firstName, shopInfo } from ".";

const greeting = function(){
    let currentTime = new Date();
    let currentTimeSec = currentTime.getHours() * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds();
    //тернарный оператор
    let result = (currentTimeSec >= shopInfo.openingHour * 3600 && currentTimeSec <= shopInfo.closingHour * 3600) ? `Welcome to "${shopInfo.shopName}",  my name is ${firstName}. How can I help you?` : `Sorry, "${shopInfo.shopName}" is closed right now. Please come during our working hours, between ${shopInfo.openingHour}:00 and ${shopInfo.closingHour}:00!`;
    console.log(result);
}

export {greeting};