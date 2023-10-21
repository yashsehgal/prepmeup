import { EMAIL_REGEX } from '@/common';

function validateEmailInput(inputString: string): boolean {
  return EMAIL_REGEX.test(inputString);
}

export { validateEmailInput };
