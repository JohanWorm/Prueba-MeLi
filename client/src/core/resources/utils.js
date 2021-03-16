
const CurrencyFormat = (value, currencyId) => {
    return `$ ${parseInt(value).toLocaleString()}`;
};

export { CurrencyFormat };
