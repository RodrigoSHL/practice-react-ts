import { useEffect, useReducer } from "react";

interface IAuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: IAuthState = {
  validating: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
}

type AuthAction =
  | { type: "logout" }
  | { type: "login"; payload: LoginPayload };

const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case "logout":
      return {
        validating: false,
        token: null,
        name: "",
        username: "",
      };
    case "login":
      return {
        validating: false,
        token: "token",
        name: action.payload.name,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({type: 'login', payload: {username: "SHL", name: "Rodrigo"}})
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }

  if (state.validating) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating... </div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {state.token ? (
        <div className="alert alert-success">
          Authenticated like: {state.name}
        </div>
      ) : (
        <div className="alert alert-danger">Not authenticated</div>
      )}

      {state.token ? (
        <div className="btn btn-danger" onClick={logout}>Logout</div>
      ) : (
        <div className="btn btn-primary mr-2" onClick={login}>Login</div>
      )}
    </>
  );
};
