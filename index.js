// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};

    newDriver[key] = value;

    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const anotherNewDriver = {...driver};

    delete anotherNewDriver[key];

    return anotherNewDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
};