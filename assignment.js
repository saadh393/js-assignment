// https://github.com/saadh393/js-assignment

function kilometerToMeter(km) {
    if (km == (null || undefined) || km < 0) {
        return "Value Can't be null or undefined or negative";
    }

    const METER = 1000; // 1000 Meter is equals to 1 Kilometer
    return km * METER
}

function budgetCalculator(noOfWatch, noOfPhone, noOfLaltop) {
    // Handling Errors
    if (noOfWatch < 0 || noOfPhone < 0 || noOfLaltop < 0) {
        return " Please Input with Positive Numbers";

    } else if (noOfWatch == (null || undefined) || noOfPhone == (null || undefined) || noOfLaltop == (null || undefined)) {
        return "Price Can't be a Null/Undefined Value";
    }

    // Price of My Items
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;
    let total = (watchPrice * noOfWatch) + (phonePrice * noOfPhone) + (laptopPrice * noOfLaltop)
    return total;
}

function hotelCost(daysToStay) {
    /* Filtering Input Value */
    if (daysToStay < 1) {
        return "Please Enter an Appropriate Number";
    }

    /*
        1 to 10 days    => 100 / -
        11 to 20 days   => 80/-
        20 to rest of the Days => 50/-
    */
    const rentOfFirstTenDays = 100;
    const rentOfSecondsTenDays = 80;
    const rentOfRestOftheDays = 50;

    if (daysToStay >= 1 && daysToStay <= 10) {
        let totalHotelCost = daysToStay * rentOfFirstTenDays;
        return totalHotelCost;

    } else if (daysToStay >= 11 && daysToStay <= 20) {
        let costOfFirstTenDays = 10 * rentOfFirstTenDays;
        let costOfReminingDays = (daysToStay - 10) * rentOfSecondsTenDays;
        let totalHotelCost = costOfFirstTenDays + costOfReminingDays;
        return totalHotelCost;

    } else {
        let costOfFirstTenDays = 10 * rentOfFirstTenDays;
        let costOfSecondTenDays = 10 * rentOfSecondsTenDays;
        let costOfReminingDays = (daysToStay - 20) * rentOfRestOftheDays;
        let totalHotelCost = costOfFirstTenDays + costOfSecondTenDays + costOfReminingDays;
        return totalHotelCost;
    }
}


function megaFriend(nameOfFriends) {
    let highestLength = 0;
    let resultName = '';
    for (let i = 0; i < nameOfFriends.length; i++) {
        let name = nameOfFriends[i];

        if (name != null && name != undefined) { // Handling Error Causes by null and undefined
            if (name.length > highestLength) {
                highestLength = name.length;
                resultName = name;
            }
        }
    }
    return resultName;
}

