export type User = {
  [index: string]: any;
  id: string;
  username: string;
  email: string;
  profilePicture: string;
};

export interface MobileProps {
  ismobile?: boolean | string;
}
