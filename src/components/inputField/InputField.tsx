import { Controller } from "react-hook-form";

import {
    Box,
    InputLabel,
    FormControl,
    FormHelperText,
    Input,
} from "@mui/material";

import styles from './inputField.module.scss';

interface INameField {
    label: string;
    defaultValue: string;
    error: any;
    control: any;
}

const InputField: React.FC<INameField> = ({ label, defaultValue, error, control }) => {
    return (
        <Box className={styles.field}>
            <InputLabel>{label}</InputLabel>
            <FormControl className={styles.field__control}>
                <Controller
                    name={label}
                    control={control}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <Input
                            {...field}
                            type="number"
                            placeholder="type the value..."
                            error={error ? true : false}
                        />
                    )}
                />
                <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default InputField;