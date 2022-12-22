import { createContext, Dispatch, ReactNode, Reducer, useContext, useReducer } from "react";

export interface ThemeState {
  mode: string;
}

const initialThemeState = {
  mode: "light",
};

interface ThemeReducerAction {
  mode: string;
  payload?: Object; 
}

const themeReducer: Reducer<ThemeState, ThemeReducerAction> = (
  prevState: { mode: string },
  action: { mode: string }
) => {
  switch (action.mode) {
    case "dark":
      return { mode: "dark" };

    case "light":
      return { mode: "light" };

    case "toggle":
      return { mode: prevState.mode === "dark" ? "light" : "dark" };

    default:
      return { mode: "light" };
  }
};

const ThemeStateContext = createContext<typeof initialThemeState | null>(null);
const ThemeDispatchContext = createContext<Dispatch<ThemeReducerAction> | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <div className={state.mode}>
          {children}
        </div>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

const useTheme = () => {
  const stateContext = useContext(ThemeStateContext)
  const dispatchContext = useContext(ThemeDispatchContext)

  if(stateContext === undefined || dispatchContext === undefined) {
    throw new Error("Theme couldn't be loaded. Issue in Context.")
  }

  return [stateContext, dispatchContext as Dispatch<ThemeReducerAction> ] as const
}

export {
  ThemeProvider,
  useTheme
}