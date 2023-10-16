/**
 * type for auth-flow view state:
 * ~ login
 * ~ create account
 */
declare type AuthFlowViewType = 'login' | 'create-account';

/**
 * type for login procedure in auth-flow:
 * ~ email input view
 * ~ password input view
 */
declare type LoginFlowType = 'email' | 'password';

/**
 * interface for LoginEmailInputView Props
 */
declare interface LoginEmailInputViewProps {
  emailInput: string;
  setEmailInput: (value: string) => void;
  setFlow: (value: LoginFlowType) => void;
}

/**
 * interface for LoginPasswordInputView Props
 */
declare interface LoginPasswordInputViewProps {
  setFlow: (value: LoginFlowType) => void;
}

/**
 * type for account creation in auth-flow:
 * ~ first, last name and username input view: name
 * ~ email input view: email
 * ~ password and confirm password input vew: password
 */
declare type CreateAccountFlowType = 'name' | 'email' | 'password';

/**
 * interface for CreateAccountNameInputView Props
 */
declare interface CreateAccountNameInputViewProps {
  data: CreateAccountDataType;
  setCreateAccountData: (data: CreateAccountDataType) => void;
  setFlow: (value: CreateAccountFlowType) => void;
}

/**
 * interface for CreateAccountEmailInputView Props
 */
declare interface CreateAccountEmailInputViewProps {
  data: CreateAccountDataType;
  setCreateAccountData: (data: CreateAccountDataType) => void;
  setFlow: (value: CreateAccountFlowType) => void;
}

/**
 * interface for CreateAccountPasswordInputView Props
 */
declare interface CreateAccountPasswordInputViewProps {
  setCreateAccountData: (data: CreateAccountDataType) => void;
  setFlow: (value: CreateAccountFlowType) => void;
}

/**
 * type for state managing the account creation flow
 */
declare type CreateAccountDataType = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};
