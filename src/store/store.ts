import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
// @ts-ignore
import storage from 'redux-persist/lib/storage'

import { SITE_NAME } from '@/constants/seo/seo.constants'

import { OrderReducer } from './order/slice'

const cartPersistConfig = {
	key: SITE_NAME,
	storage,
	version: 1,
	whitelist: ['cart']
}

const rootReducer = combineReducers({ OrderReducer })
// FilterReducer: persistReducer(cartPersistConfig, FilterReducer)

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})
export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
