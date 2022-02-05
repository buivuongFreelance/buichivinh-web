import { configureStore } from '@reduxjs/toolkit';

import importantArticlesReducer from './importantArticles';
import articleReducer from './article';
import importantPoemsReducer from './importantPoems';
import poemReducer from './poem';

export const store = configureStore({
  reducer: {
    importantArticles: importantArticlesReducer,
    article: articleReducer,
    importantPoems: importantPoemsReducer,
    poem: poemReducer,
  }
});