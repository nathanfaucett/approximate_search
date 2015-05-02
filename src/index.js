module.exports = approximateSearch;


function approximateSearch(query, text, caseSensitive) {
    var textLength = text.length,
        queryLength = query.length;

    if (queryLength > textLength) {
        return false;
    } else {
        if (queryLength === textLength && query === text) {
            return true;
        } else {
            if (caseSensitive !== false) {
                return caseSensitiveCheck(query, queryLength, text, textLength);
            } else {
                return check(query, queryLength, text, textLength);
            }
        }
    }
}

function caseSensitiveCheck(query, queryLength, text, textLength) {
    var i = 0,
        j = 0,
        ch;

    outer: while (i < queryLength) {
        ch = query.charCodeAt(i++);

        while (j < textLength) {
            if (text.charCodeAt(j++) === ch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}

function check(query, queryLength, text, textLength) {
    var i = 0,
        j = 0,
        ch;

    outer: while (i < queryLength) {
        ch = query.charAt(i++).toLowerCase();

        while (j < textLength) {
            if (text.charAt(j++).toLowerCase() === ch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}
