import { spawn } from "redux-saga/effects";

import main from "./main";

function* appSagas() {
  yield spawn(main);
}

export default appSagas;
