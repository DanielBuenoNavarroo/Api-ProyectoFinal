export const registerSchema = {
  username: {
    validate: (value) => {
      if (!value) {
        return "Username is required";
      }
      if (typeof value !== "string") {
        return "Username must be a string";
      }
      return null;
    },
  },
  email: {
    validate: (value) => {
      if (!value) {
        return "Email is required";
      }
      const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (!emailRegex.test(value)) {
        return "Email is not valid";
      }
      if (typeof value !== "string") {
        return "Username must be a string";
      }
      return null;
    },
  },
  password: {
    validate: (value) => {
      if (!value) {
        return "Password is required";
      }
      if (typeof value !== "string") {
        return "Username must be a string";
      }
      if (value.length < 6) {
        return "Password must be at least 6 characters";
      }
      const passwordRegex =
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Password must contain special character, number, uppercase & lowercase";
      }
      return null;
    },
  },
};

export const loginSchema = {
  email: {
    validate: (value) => {
      if (!value) {
        return "Email is required";
      }
      const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (!emailRegex.test(value)) {
        return "Email is not valid";
      }
      if (typeof value !== "string") {
        return "Username must be a string";
      }
      return null;
    },
  },
  password: {
    validate: (value) => {
      if (!value) {
        return "Password is required";
      }
      if (typeof value !== "string") {
        return "Username must be a string";
      }
      if (value.length < 6) {
        return "Password must be at least 6 characters";
      }
      const passwordRegex =
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Password must contain special character, number, uppercase & lowercase";
      }
      return null;
    },
  },
};
