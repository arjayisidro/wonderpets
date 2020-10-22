export type Errors = {
  email: string;
  password: string;
};

export type RegistrationErrors = {
  userName: string;
  email: string;
  password: string;
};

export type LoginSuccess = {
  decoded: string;
};

export type Profile = {
  id: string;
  role: number;
  userName: string;
  email: string;
  avatar: string;
};
