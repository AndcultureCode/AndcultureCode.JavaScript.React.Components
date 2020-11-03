import { InputTypes } from "../constants/input-types";
import { InputProperties } from "../interfaces/input-properties";
import React from "react";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface TextInputProps extends InputProperties {
    id: string;
    maxLength?: number;
    name?: string;

    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    testId?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
    const {
        ariaLabelledBy,
        disabled,
        id,
        name,
        onChange,
        placeholder,
        testId,
        value,
    } = props;

    const maxLength = props.maxLength != null ? props.maxLength : 20;

    return (
        <input
            aria-labelledby={ariaLabelledBy}
            data-testid={testId}
            disabled={disabled}
            id={id}
            placeholder={placeholder}
            maxLength={maxLength}
            name={name}
            onChange={onChange}
            type={InputTypes.Text}
            value={value}
        />
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { TextInput };

// #endregion Exports
