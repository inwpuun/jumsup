export function validateRegEx(regex: RegExp, value: string) {
    return regex.test(value);
}