//Josh says action reducers are just functions that return action objects.
//Apparently, action creators can't have the same name as reducer functions.

export const updateFirstName = (e) => {
        return {
            type: "add_first_name",
            payload: e
    };
};

export const updateLastName = (e) => {
    return {
        type: "add_last_name",
        payload: e
    };
};

export const updateEmail = (e) => {
    return {
        type: "add_email",
        payload: e
    };
};

export const updatePhone = (e) => {
    return {
        type: "add_phone",
        payload: e
    };
};

export const updateStreetAddress = (e) => {
    return {
        type: "add_street_address",
        payload: e
    };
};

export const updateCity = (e) => {
    return {
        type: "add_city",
        payload: e
    };
};

export const updateState = (e) => {
    return {
        type: "add_state",
        payload: e
    };
};

export const updateZip = (e) => {
    return {
        type: "add_zip",
        payload: e
    };
};

export const updateMainText = (e) => {
    return {
        type: "add_main_text",
        payload: e
    };
};

export const updateMainTextFont = (e) => {
    return {
        type: "add_main_text_font",
        payload: e
    };
};

export const updateMainTextColor = (e) => {
    return {
        type: "add_main_text_color",
        payload: e
    };
};

export const updateSecondaryText = (e) => {
    return {
        type: "add_secondary_text",
        payload: e
    };
};

export const updateSecondaryTextFont = (e) => {
    return {
        type: "add_secondary_text_font",
        payload: e
    };
};

export const updateSecondaryTextColor = (e) => {
    return {
        type: "add_secondary_text_color",
        payload: e
    };
};

export const updateBackgroundColor = (e) => {
    return {
        type: "add_background_color",
        payload: e
    };
};

export const updateComments = (e) => {
    return {
        type: "add_comments",
        payload: e
    };
};
