const stringLength = (string) => {
    const c = string.length;

    if (c > 0 && c <= 10) {
        return c;
    } else {
        throw new Error('String must be at least be 1 character long and not more longer than 10 characters');
    }
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const capitalize = (string) => {
    const val = string.charAt(0).toUpperCase() + string.slice(1);

    return val;
}

module.exports = {stringLength, reverseString, capitalize};