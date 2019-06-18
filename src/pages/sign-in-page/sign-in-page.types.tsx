// Types
import {TUseFormReturn} from "_Hooks/use-form/use-form.types";

export type TProps = {
  form: TUseFormReturn<{ email: string; password: string }>;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
};
