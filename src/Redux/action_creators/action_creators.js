//Josh says action reducers are just functions that return action objects.

export const firstName = (e) => {
        return {
            type: "add_first_name",
            payload: e
    };
};

export const lastName = (e) => {
    return {
        type: "add_last_name",
        payload: e
    };
};

export const email = (e) => {
    return {
        type: "add_email",
        payload: e
    };
};

export const phone = (e) => {
    return {
        type: "add_phone",
        payload: e
    };
};

export const streetAddress = (e) => {
    return {
        type: "add_street_address",
        payload: e
    };
};

export const city = (e) => {
    return {
        type: "add_city",
        payload: e
    };
};

export const state = (e) => {
    return {
        type: "add_state",
        payload: e
    };
};

export const zip = (e) => {
    return {
        type: "add_zip",
        payload: e
    };
};

export const mainText = (e) => {
    return {
        type: "add_main_text",
        payload: e
    };
};

export const mainTextFont = (e) => {
    return {
        type: "add_main_text_font",
        payload: e
    };
};

export const mainTextColor = (e) => {
    return {
        type: "add_main_text_color",
        payload: e
    };
};

export const secondaryText = (e) => {
    return {
        type: "add_secondary_text",
        payload: e
    };
};

export const secondaryTextFont = (e) => {
    return {
        type: "add_secondary_text_font",
        payload: e
    };
};

export const secondaryTextColor = (e) => {
    return {
        type: "add_secondary_text_color",
        payload: e
    };
};

export const backgroundColor = (e) => {
    return {
        type: "add_background_color",
        payload: e
    };
};

export const comments = (e) => {
    return {
        type: "add_comments",
        payload: e
    };
};
