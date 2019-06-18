import * as React from "react";

// Hooks
import {useSingInForm} from "_Hooks/use-sign-in-form/use-sign-in-form";
import {useRequestLoginUser} from "_Hooks/use-request-login-user";
import {useRequestCheckLogin} from "_Hooks/use-check-login";
import {useAuthorizationRedirection} from "_Hooks/use-authorization-redirection";

// Types
import {TProps} from "./sign-in-page.types";

export function SignInPage(props: TProps): JSX.Element {
  const {form, onSubmit} = props;

  const isDisabled: boolean =
    form.submitting ||
    Object.values(form.errors).filter(Boolean).length > 0 ||
    Object.values(form.touched).length !== 2;

  return (
    <div className="sign-in user-page__content" style={{paddingTop: `231px`}}>
      <form className="sign-in__form" onSubmit={onSubmit}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="email"
              id="user-email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            {form.touched.email && form.errors.email}

            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>

          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="password"
              id="user-password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            {form.touched.password && form.errors.password}

            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>

        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit" disabled={isDisabled}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

function SignInPageContainer(): JSX.Element {
  const form = useSingInForm();
  const handleLogin = useRequestLoginUser();

  useRequestCheckLogin();
  useAuthorizationRedirection({
    authorized: `/`
  });

  const handleFormSubmit = React.useCallback(
      (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {email, password} = form.values;

        if (email && password) {
          handleLogin({email, password});
        }
      },
      [handleLogin, form.values.email, form.values.password]
  );

  return <SignInPage form={form} onSubmit={handleFormSubmit} />;
}

export default SignInPageContainer;
