const ACCESS_TOKEN_KEY = "access-token";

const Storage = {
  setToken: (accessToken: string) => {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  },

  getToken: () => {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  },

  clearToken: () => {
    return sessionStorage.clear();
  },
};

export default Storage;
