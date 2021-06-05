module.exports = {
  'moduleNameMapper': {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  },
  'testEnvironment': 'jsdom',
  'setupFilesAfterEnv': [
    '@testing-library/jest-dom/extend-expect'
  ],
  'testMatch': ["**/components/*.test.(js|jsx)"],
}