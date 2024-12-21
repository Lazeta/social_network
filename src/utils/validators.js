export const required = (value) => value ? undefined : 'Field is required';
// validation function to check if a value exists

export const maxLengthCreator = (maxLength) => (value) => {
    return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
}