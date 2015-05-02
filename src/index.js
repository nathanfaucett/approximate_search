module.exports = approximateSearch;


function approximateSearch(query, text) {
    var textLength = text.length,
        queryLength = query.length,
        ch, i, j;

    if (queryLength > textLength) {
        return false;
    } else {
        if (queryLength === textLength && query === text) {
            return true;
        } else {
            i = 0;
            j = 0;

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
    }
}
