// u05169098 Devan Dewet

const { start } = require("repl");

module.exports = { checkDate, checkName };

function checkDate(strdate)
{
        const date = new Date(strdate);
        const startDate = new Date('2024/09/09');
        const endDate = new Date('2024/09/21');

        if ( date > startDate && date <= endDate)
        {
            return true;
        }
        else
        {
            return false;
        }


}

function checkName(name)
{
    const specialchar = /[^a-zA-Z0-9\s]/;

    return !specialchar.test(name);
}

