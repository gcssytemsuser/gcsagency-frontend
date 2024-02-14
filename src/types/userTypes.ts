export interface UserRegisterPayload {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    username: string;
}

export interface UserDataPayload {
    first_name?: string;
    last_name?: string;
    age?: string;
    email?: string;
    current_location?: string;
    current_company?: string;
    designation?: string;
    year_of_exps?: string;
    qualification?: string;
    phone_number?: string;
    languages?: string;
    career_obj?: string;
    website_link?: string;
    description?: string;
    status?: string;
    username?: string;
}
export interface UserSocialNetworkPayload {
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    pinterest?: string,
    dribbble?: string,
    behance?: string
}
