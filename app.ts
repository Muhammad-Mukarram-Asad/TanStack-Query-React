// API Endpoint from environment variable, fallback to default
export const ENDPOINT =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:8000/api/v1";
export const SERVER_ASSETS =
  process.env.NEXT_PUBLIC_SERVER_ASSETS || process.env.SERVER_ASSETS || "";

export const Asset = (PATH: string) => SERVER_ASSETS + PATH;

export const API = {
  AUTH: {
    SIGN_IN: ENDPOINT + "/auth/signin",
    ME: ENDPOINT + "/me",
  },

  USER: {
    GET_ALL_USERS: ENDPOINT + "/users",
    ADD_USER: ENDPOINT + "/users",
    GET_USER: (params: { userId: number }) =>
      ENDPOINT + `/users/${params?.userId}`,
    UPDATE_USER: (params: { userId: number }) =>
      ENDPOINT + `/users/${params?.userId}`,
    DELETE_USER: (params: { user_id: number }) =>
      ENDPOINT + `/users/${params?.user_id}`,
  },

  STORES: {
    GET_ALL_STORES: ENDPOINT + "/stores",
    ADD_STORE: ENDPOINT + "/stores",
    // GET_STORE: (params: { storeId: number }) =>
    //   ENDPOINT + `/stores/${params?.storeId}`,
    // UPDATE_STORE: (params: { storeId: number }) =>
    //   ENDPOINT + `/stores/${params?.storeId}`,
    // DELETE_STORE: (params: { storeId: number }) =>
    //   ENDPOINT + `/stores/${params?.storeId}`,
  },
};
