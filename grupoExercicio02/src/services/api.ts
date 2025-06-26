import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1/forecast.json",
    params: {
        key: "7b83aa55ff284858aea00731252606",
        lang: "pt",
        days: 1,
    },
});

// Docs: https://www.weatherapi.com/docs/
// URL base= http://api.weatherapi.com/v1
// Current weather= /current.json  ou  Forecast= /forecast.json
// Key= 7b83aa55ff284858aea00731252606 (valido até 10-jul-2025)
// q(query parameter)= nome da cidade- ex: q=Paris
// Caso forecast usar days de 1 a 14 ex: days=1
// Lingua: lang=pt
