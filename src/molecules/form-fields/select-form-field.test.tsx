import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
    SelectFormField,
    InvalidSelectFormValueClass,
} from "./select-form-field";
import faker from "faker";
import uuid from "uuid";

describe("SelectFormField", () => {
    test("when default props, renders with label", () => {
        // Arrange
        const label = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByText } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        // Assert
        expect(getByText(label)).not.toBeNil();
    });

    test("when has errorsMessages prop, renders with error messages", () => {
        // Arrange
        const label = faker.random.words();
        const errorMessages = [faker.random.uuid(), faker.random.uuid()];
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByText } = render(
            <SelectFormField
                label={label}
                onChange={() => {}}
                id={uuid()}
                errorMessages={errorMessages}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        // Assert
        errorMessages.forEach((errorMessage) =>
            expect(getByText(errorMessage)).not.toBeNil()
        );
    });

    test("when has errorsMessage prop, renders with error message", () => {
        // Arrange
        const label = faker.random.words();
        const testErrorMessage = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByText } = render(
            <SelectFormField
                label={label}
                onChange={() => {}}
                id={uuid()}
                errorMessage={testErrorMessage}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        // Assert
        expect(getByText(testErrorMessage)).not.toBeNil();
    });

    test(`when isValid prop is false, renders with ${InvalidSelectFormValueClass} class name`, () => {
        // Arrange
        const label = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { container } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                isValid={false}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );
        const result = container.querySelector(
            "." + InvalidSelectFormValueClass
        );

        // Assert
        expect(result).not.toBeNil();
    });

    test(`when isValid prop is true, renders without ${InvalidSelectFormValueClass} class name`, () => {
        // Arrange
        const label = faker.random.words();
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { container } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                isValid={true}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );
        const result = container.querySelector(
            "." + InvalidSelectFormValueClass
        );

        // Assert
        expect(result).toBeNil();
    });

    test("when required prop set, renders with required text", () => {
        // Arrange
        const label = faker.random.words();
        const requiredText = "*";
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { container } = render(
            <SelectFormField
                onChange={() => {}}
                label={label}
                required={true}
                id={uuid()}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );
        const htmlLabelTag = container.getElementsByTagName("label");

        // Assert
        expect(htmlLabelTag[0].textContent).toContain(requiredText);
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        const label = faker.random.word();
        let isChecked = false;
        const handleChange = () => (isChecked = true);
        const selectLabel = faker.random.word();
        const selectValue = faker.random.word();

        // Act
        const { getByLabelText } = render(
            <SelectFormField
                onChange={handleChange}
                label={label}
                id={label}
                values={[{ value: selectValue, label: selectLabel }]}
            />
        );

        fireEvent.change(getByLabelText(label), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });
});
