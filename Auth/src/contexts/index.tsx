import { createContext, useEffect, useState } from 'react';

interface Props {
  user?: string | boolean;
  email?: string;
  password?: string;
  children: JSX.Element | JSX.Element[];
}

export const AuthContext = createContext({});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<string | any>('');

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const userStorage = localStorage.getItem('users_db');

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user: { email: string }) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email?: string, password?: string) => {
    const parse = localStorage.getItem('users_db');
    const userStorage = JSON.parse(parse);

    const hasUser = userStorage?.filter(
      (user: { email: string }) => user.email === email
    );
    console.log(hasUser);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('user_token', JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return 'Email or password incorrect';
      }
    } else {
      return 'unregistered user';
    }
  };

  const signup = (email?: string, password?: string) => {
    const parse = localStorage.getItem('users_db');
    const userStorage = JSON.parse(parse);
    console.log(userStorage);

    const hasUser = userStorage?.filter(
      (user: { email: string }) => user.email === email
    );

    if (hasUser?.length) {
      return 'An account with this email already exists';
    }

    let newUser;

    if (userStorage) {
      newUser = [...userStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem('users_db', JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user_token');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
