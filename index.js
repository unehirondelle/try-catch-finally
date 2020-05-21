//finally -> try
function throwsError() {
    throw new Error('Sorry...');
}

function cleansUp() {
    try {
        throwsError();
    } finally {
        console.log('Performing clean-up');
    }
}

cleansUp();

//try -> finally
function idLog(x) {
    try {
        console.log(x);
        return 'result';
    } finally {
        console.log("FINALLY");
    }
}

idLog("arg");

//try (console.log executes but return doesn't) -> finally
var count = 0;

function countUp() {
    try {
        console.log("count");
        return count;
    } finally {
        console.log("count++");
        count++;
    }
}

countUp();