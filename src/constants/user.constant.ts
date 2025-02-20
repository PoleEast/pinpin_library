const REGISTER_REQUSER_VALIDATION = {
  ACCOUNT: {
    MIN_LENGTH: 4,
    MAX_LENGTH: 32,
    PATTERN: /^[a-zA-Z0-9_]+$/,
    PATTERN_MESSAGE: "帳號只能有英文、數字、底線",
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 32,
    PATTERN: /^[a-zA-Z0-9_]+$/,
    PATTERN_MESSAGE: "密碼只能有英文、數字、底線",
  },
  NICKNAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 16,
  },
};

const LOGIN_REQUSER_VALIDATION = {
  ACCOUNT: {
    MIN_LENGTH: 4,
    MAX_LENGTH: 32,
    PATTERN: /^[a-zA-Z0-9_]+$/,
    PATTERN_MESSAGE: "帳號只能有英文、數字、底線",
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 32,
    PATTERN: /^[a-zA-Z0-9_]+$/,
    PATTERN_MESSAGE: "密碼只能有英文、數字、底線",
  },
};

export { REGISTER_REQUSER_VALIDATION, LOGIN_REQUSER_VALIDATION };
