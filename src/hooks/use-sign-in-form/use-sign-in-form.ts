// Hooks
import {useForm} from "_Hooks/use-form/use-form";

// Utils
import {TValues, TErrors, TTouched} from "./use-sing-in-form.types";
import {TUseFormReturn} from "_Hooks/use-form/use-form.types";

function validateEmail(email: string): string {
  const regExpEmail = /\S+@\S+\.\S+/;

  if (email === ``) {
    return `Email is required`;
  }

  if (!regExpEmail.test(email)) {
    return `Invalid email address`;
  }

  return ``;
}

function validatePassword(password: string): string {
  if (password === ``) {
    return `Password is required`;
  }

  return ``;
}

function validate(values: TValues): TErrors {
  const email = validateEmail(values.email);
  const password = validatePassword(values.password);

  return {email, password};
}

export function useSingInForm(): TUseFormReturn<TValues> {
  const form = useForm<TValues>({
    initialValues: {
      email: ``,
      password: ``
    },
    validate
  });

  return form;
}
