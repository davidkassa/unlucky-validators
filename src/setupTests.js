// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// https://github.com/firebase/firebase-js-sdk/issues/5687
jest.mock("firebase/firestore", () => {
    return {
        getFirestore: jest.fn(),
    };
});