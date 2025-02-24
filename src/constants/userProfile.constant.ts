import { REGISTER_REQUSER_VALIDATION } from "./user.constant.js";

const USERPROFILE_REQUSER_VALIDATION = {
  BIO: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 200,
    PATTERN_MESSAGE: "自我介紹最多只能200個字",
  },

  FULLNAME: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 30,
    PATTERN_MESSAGE: "姓名最多只能30個字",
  },

  NICKNAME: REGISTER_REQUSER_VALIDATION.NICKNAME,

  AVATAR: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 100,
    PATTERN_MESSAGE: "頭像ID最多只能100個字",
  },

  COVERPHOTO: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 100,
    PATTERN_MESSAGE: "封面ID最多只能100個字",
  },

  GENDER: {
    VALUES: [0, 1, 2],
  },

  EMAIL: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 50,
    PATTERN_MESSAGE: "Email最多只能50個字",
  },

  PHONE: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 20,
    PATTERN_MESSAGE: "電話最多只能20個字",
  },

  ADDRESS: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 100,
    PATTERN_MESSAGE: "地址最多只能100個字",
  },
};

export { USERPROFILE_REQUSER_VALIDATION };
