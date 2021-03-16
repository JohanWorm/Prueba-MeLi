module.exports = {

    setupFilesAfterEnv: ['<rootDir>/client/src/setup-test.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest",
        "^.+\\.(png|svg)$": "babel-jest",
        "^src(.*)$": "<rootDir>/client/src$1",
        "^__mockData__(.*)$": "<rootDir>/__mockData__$1",
    }
};
