//try_statement_start -> finally_statement -> Error; try_statement_end isn't displayed because it's after throw reserved word
function throwsError() {
    throw new Error('Sorry...');
}

function cleansUp() {
    try {
        console.log("try_statement_start");
        throwsError();
        console.log("try_statement_end");
    } finally {
        console.log("finally_statement");
    }
}

cleansUp();

//x -> result (returns now because there is nothing to compute) -> finally
function idLog(x) {
    try {
        console.log(x);
        return 'result';
    } finally {
        console.log("FINALLY");
    }
}

idLog("arg");

//try_statement -> computes count -> finally_statement -> returns count
var count = 0;

function countUp() {
    try {
        console.log("try_statement");
        return count;
    } finally {
        console.log("finally_statement");
        count++;
    }
}

countUp();