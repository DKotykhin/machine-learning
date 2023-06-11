import { FieldValues } from "react-hook-form";
import { IFormData } from "types/types";

export const formData = (data: FieldValues): IFormData[] => {
    let newArray = [];
    for (const property in data) {
        newArray.push({
            name: property,
            value: +data[property],
        });
    }

    return newArray;
};
