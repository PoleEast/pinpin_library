const USERPROFILE_REQUSER_VALIDATION = {
  MOTTO: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 30,
  },

  BIO: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 200,
  },

  FULLNAME: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 30,
  },

  NICKNAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 16,
  },

  AVATAR: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 100,
  },

  COVERPHOTO: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 100,
  },

  GENDER: {
    VALUES: [0, 1, 2],
  },

  EMAIL: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 50,
    PATTERN: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  },

  PHONE: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 20,
  },

  ADDRESS: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 100,
  },

  VISITEDCOUNTRIES: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 10,
  },

  LANGUAGES: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 10,
  },

  CURRENCIES: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 10,
  },

  TRAVELINTERESTS: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 10,
  },
  TRAVELSTYLES: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 10,
  },
};

export { USERPROFILE_REQUSER_VALIDATION };
