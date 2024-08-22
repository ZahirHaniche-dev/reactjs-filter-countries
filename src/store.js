import { configureStore } from "@reduxjs/toolkit"
import countries from "./features/countries"

export const store = configureStore({
    reducer: {
        countries
    }
})