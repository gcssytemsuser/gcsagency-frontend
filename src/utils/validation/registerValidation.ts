import { ValidationResult } from "../../types";

export function validateUserRegistrationData(firstName: string, lastName: string, username: string, email: string, password: string, confirmPassword: string): ValidationResult {
    const errors: { [key: string]: string } = {};

    if (!firstName) {
        errors.firstName = "First name is required";
    }

    if (!lastName) {
        errors.lastName = "Last name is required";
    }

    if (!username) {
        errors.username = "Username is required";
    }

    if (!email) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "Email is invalid";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}


export function validateCompanyRegistrationData(firstName: string, lastName: string, username: string, email: string, companyName: string, companyType: string, password: string, confirmPassword: string): ValidationResult {
    const errors: { [key: string]: string } = {};

    if (!firstName) {
        errors.firstName = "First name is required";
    }

    if (!lastName) {
        errors.lastName = "Last name is required";
    }

    if (!username) {
        errors.username = "Username is required";
    }

    if (!email) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "Email is invalid";
    }

    if (!companyName) {
        errors.companyName = "First name is required";
    }

    if (!companyType) {
        errors.companyType = "First name is required";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}