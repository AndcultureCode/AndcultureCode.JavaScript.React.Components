import * as React from "react";
import { forwardRef } from "react";

const COMPONENT_CLASS = "c-radio";

interface RadioButtonProps {
    autofocus?: boolean;
    checked: boolean;
    children?: React.ReactNode;
    cssClassName?: string;
    id: string;
    label: string;
    name: string;
    onCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    ref?: React.RefObject<HTMLInputElement> | null;
    value?: string | string[] | number;
}

const RadioButton: React.RefForwardingComponent<
    HTMLInputElement,
    RadioButtonProps
> = forwardRef((props: RadioButtonProps, ref: React.Ref<HTMLInputElement>) => {
    const {
        autofocus,
        checked,
        children,
        cssClassName,
        id,
        label,
        name,
        onCheck,
        onClick,
        value,
    } = props;

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void =>
        onCheck?.(e);
    const handleClick = (): void => onClick?.();

    const cssChecked = checked ? "-selected" : "";

    return (
        <div className={`${COMPONENT_CLASS} ${cssChecked} ${cssClassName}`}>
            <input
                autoFocus={autofocus}
                checked={checked}
                id={id}
                name={name}
                onChange={handleChecked}
                onClick={handleClick}
                ref={ref}
                type="radio"
                value={value}
            />
            <label htmlFor={id}>
                {label}
                {children}
            </label>
        </div>
    );
});

export { RadioButton };
