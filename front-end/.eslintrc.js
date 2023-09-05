const path = require('path');

module.exports = {
    "ignorePatterns": [
        "node_modules/",
        "build/",
        "src/assets/",
        "public/"
    ],
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "jsx-a11y"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": path.resolve(__dirname, './tsconfig.json'),
        "tsconfigRootDir": path.resolve(__dirname, './'),
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.js"
            ],
            "parserOptions": {
                "sourceType": "script",
                "project": undefined
            },
        }
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error"
    }
}
