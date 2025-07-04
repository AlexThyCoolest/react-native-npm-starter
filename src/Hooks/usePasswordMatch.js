import { useState } from "react";

export const usePasswordMatch = () => {
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const checkPasswordMatch = (data) => {
        if (data.password !== data.repeatPassword) {
            setIsPasswordMatch(false);
        } else {
            setIsPasswordMatch(true);
        }
    };

    return { isPasswordMatch, checkPasswordMatch };
};
