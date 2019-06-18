import * as React from "react";

// Types
import {TUseFormConfig, TUseFormReturn, TFormErrors, TFormTouched} from "./use-form.types";

export function useForm<V>(
    config: TUseFormConfig<V>
): TUseFormReturn<V> {
  const {initialValues, validate} = config;

  const [values, setValues] = React.useState<V>(initialValues);
  const [errors, setErrors] = React.useState<TFormErrors<V>>({});
  const [touched, setTouched] = React.useState<TFormTouched<V>>({});
  const [submitting, setSubmitting] = React.useState<boolean>(false);

  const handleFieldChange = React.useCallback(
      (event: React.SyntheticEvent<HTMLInputElement>) => {
        const fieldName = event.currentTarget.name;
        const fieldValue = event.currentTarget.value;

        setValues((prevValues) => {
          const fields = Object.assign({}, prevValues, {
            [fieldName]: fieldValue
          });

          if (typeof validate === `function`) {
            setErrors((prevErrors) =>
              Object.assign({}, prevErrors, validate(fields))
            );
          }

          return fields;
        });
      },
      [setValues, setErrors]
  );

  const handleFieldBlur = React.useCallback(
      (event: React.SyntheticEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;

        setTouched((prevTouched) => {
          if (typeof validate === `function`) {
            setErrors((prevErrors) =>
              Object.assign({}, prevErrors, validate(values))
            );
          }

          return Object.assign({}, prevTouched, {[name]: true});
        });
      },
      [setTouched, values]
  );

  return {
    values,
    errors,
    touched,
    submitting,
    setSubmitting,
    handleChange: handleFieldChange,
    handleBlur: handleFieldBlur
  };
}
