export const required = (value) => value ? undefined : 'Field is required';
// validation function to check if a value exists

export const maxLengthCreator = (maxLength) => (value) => {
    return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
}

// const testValidators = () => {
//     // Проверка валидатора required
//     console.log("Testing required validator:");
//     console.log(required("") === "Field is required" ? "Validation error for empty value: Passed" : "Validation error for empty value: Failed");
//     console.log(required("Some value") === undefined ? "Validation for non-empty value: Passed" : "Validation for non-empty value: Failed");

//     // Проверка валидатора maxLengthCreator
//     console.log("\nTesting maxLengthCreator validator:");
//     const maxLength5 = maxLengthCreator(5); // Проверка для максимальной длины 5 символов
//     console.log(maxLength5("12345") === undefined ? "Validation for value with length 5: Passed" : "Validation for value with length 5: Failed");
//     console.log(maxLength5("123456") === "Max length is 5 symbols" ? "Validation for value with length 6: Passed" : "Validation for value with length 6: Failed");
// };

// // Вызов функции для тестирования валидаторов
// testValidators();