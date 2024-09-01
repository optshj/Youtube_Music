module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // 올바른 경로 확인
    moduleNameMapper: {
        "^@src/(.*)$": "<rootDir>/src/$1"
    }
}
