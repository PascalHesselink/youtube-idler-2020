export default function abbreviateNumber(number, toReturn) {
    const SI_POSTFIXES = ["", "k", "M", "G", "T", "P", "E"];
    const tier         = Math.log10(Math.abs(number)) / 3 | 0;

    let formatted = parseFloat(number);
    let postfix   = SI_POSTFIXES[0];
    if (tier) {
        postfix      = SI_POSTFIXES[tier];
        const scale  = Math.pow(10, tier * 3);
        const scaled = number / scale;
        formatted    = scaled.toFixed(1) + '';
        if (/\.0$/.test(formatted))
            formatted = formatted.substr(0, formatted.length - 2);
    }

    if (formatted % 1 != 0 && typeof formatted === 'number') formatted = formatted.toFixed(1);

    switch (toReturn) {
        case 'amount':
            return formatted;
        case 'abbreviate':
            return postfix;
        default:
            return formatted + postfix;
    }
}
