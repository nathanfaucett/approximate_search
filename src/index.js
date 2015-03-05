module.exports = function approximateSearch(query, text) {
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
    }
};
