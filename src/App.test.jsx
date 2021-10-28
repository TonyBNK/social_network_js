import React from 'react';
import {SocialNetworkApp} from './App';
import * as ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialNetworkApp />, div);
});
