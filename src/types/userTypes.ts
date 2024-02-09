export interface UserRegisterPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
}

export interface UserUpdatePayload {
    firstName?: string;
    age: string;
    email: string;
    currentLocation?: string;
    currentCompany?: string;
    designation: string;
    yearOfExps?: string;
    qualification?: string;
    phoneNumber: string;
    languages?: string;
    careerObj: string;
    websiteLink?: string;
    description?: string;
}
export interface UserSocialNetworkPayload {
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    pinterest?: string,
    dribbble?: string,
    behance?: string
}
