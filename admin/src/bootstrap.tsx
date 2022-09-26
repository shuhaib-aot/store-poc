import React from "react";
import { createRoot } from 'react-dom/client';
import StoreService from "store/StoreService";
console.log(StoreService)
import { Provider } from 'react-redux';
import App from "./App";
const store = StoreService.configureStore();
const history = StoreService.history;
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Provider store={store}><App /></Provider>);