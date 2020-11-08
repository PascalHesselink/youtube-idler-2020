export default function abbreviateNumber(number, toReturn) {
    const SI_POSTFIXES = ["", "k", "M", "G", "T", "P", "E"];
    const tier         = Math.log10(Math.abs(number)) / 3 | 0;
    if (tier == 0) return number;
    const postfix = SI_POSTFIXES[tier];
    const scale   = Math.pow(10, tier * 3);
    const scaled  = number / scale;
    let formatted = scaled.toFixed(1) + '';
    if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2);

    switch (toReturn) {
        case 'amount':
            return formatted;
        case 'abbreviate':
            return postfix;
        default:
            return formatted + postfix;
    }
}
