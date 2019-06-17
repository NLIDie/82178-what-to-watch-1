import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

// Reducers
import {rootReducer} from "_Store/reducer";

// Types
import {TRootState, TRootActions} from "_Types/redux";

const middleware = [thunk];

const composeEnhancers =
  (window[`__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`] as typeof compose) || compose;

export const store = createStore<TRootState, TRootActions, {}, {}>(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
