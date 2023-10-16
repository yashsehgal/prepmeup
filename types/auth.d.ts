/**
 * type for auth-flow view state: login / create account
 */
declare type AuthFlowViewType = 'login' | 'create-account';

/**
 * type for login procedure in auth-flow: email input / password input view
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
