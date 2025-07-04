import { useState, useEffect } from "react";

export const useFormValidation = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [formValues, setFormValues] = useState(null);

    useEffect(() => {
        if (formValues) {
            const isValid = 
                formValues.email &&
                formValues.password &&
                formValues.repeatPassword &&
                formValues.password === formValues.repeatPassword;
            setIsFormValid(isValid);
        } else {
            setIsFormValid(false);
        }
    }, [formValues]);

    return { isFormValid, setFormValues };
};
