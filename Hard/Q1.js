
function realType(value) {
    switch (typeof (value)) {
        case 'object':
            if (value instanceof Array)
                return 'Array';
            if (value instanceof Date)
                return 'Date';
            if (value instanceof RegExp)
                return 'regexp';
            if (value instanceof String)
                return 'String';
            if (value instanceof Number)
                return 'Number';
            else if (value === null)
                return "null";
            return 'object';
        default:
            return typeof (value);
    }
}
