//u05169098 Devan Dewet
const { fileRead, fileWrite } = require('./fileManager');
const { checkDate, checkName } = require('./dataValidation');

const events = fileRead();

const filteredEvents = events.filter(event => checkDate(event.date));

const processedEvents = filteredEvents.map(event => {
    return Object.assign({}, event, {
        validName: checkName(event.name)
    });
});

fileWrite(processedEvents);