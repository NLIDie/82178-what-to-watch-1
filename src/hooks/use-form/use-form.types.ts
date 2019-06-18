export interface IFormValues {
  [field: string]: any;
}

export type TFormErrors<V> = {
  [K in keyof V]?: V[K] extends object
    ? TFormErrors<V[K]>
    : string
};

export type TFormTouched<V> = {
  [K in keyof V]?: V[K] extends object
    ? TFormTouched<V[K]>
    : boolean
};

export type TUseFormConfig<V> = {
  initialValues: V;
  validate?: (values: V) =>TFormErrors<V>;
};

export type TUseFormReturn<V extends IFormValues> = {
  values: V;
  errors: TFormErrors<V>;
  touched: TFormTouched<V>;
  submitting: boolean;
  setSubmitting: (submitting: boolean) => void;
  handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void;
};
