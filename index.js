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

//finally executes, but try doesn't
var count = 0;

function countUp() {
    try {
        return count;
    } finally {
        count++; // (1)
    }
}

countUp();