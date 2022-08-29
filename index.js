// code your solution here
function saturdayFun(arg="roller-skate") {
    return `This Saturday, I want to ${arg}!`;
}

function mondayWork(arg="go to the office") {
    return `This Monday, I will ${arg}.`;
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}