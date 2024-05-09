export const registerSchema = {
  username: {
    validate: (value) => {
      if (!value) {
        return "Username is required";
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
      return null;
    },
  },
  password: {
    validate: (value) => {
      if (!value) {
        return "Password is required";
      }
      if (value.length < 6) {
        return "Password must be at least 6 characters";
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
        return null;
      }
    },
    password: {
      validate: (value) => {
        if (!value) {
          return "Password is required";
        }
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
        return null;
      }
    }
  };