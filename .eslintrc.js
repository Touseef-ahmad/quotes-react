module.exports = {
  root: true,
  parser: "babel-eslint",
	extends: '@react-native-community',
	rules: {
		'linebreak-style': 'off', // Don't play nicely with Windows.
		'arrow-parens': 'off', // Incompatible with prettier
		'object-curly-newline': 'off', // Incompatible with prettier
		'object-curly-spacing': ['error', 'always'],
		'no-mixed-operators': 'off', // Incompatible with prettier
		'arrow-body-style': 'off', // Not our taste?
		'function-paren-newline': 'off', // Incompatible with prettier
		'no-plusplus': 'off',
		'space-before-function-paren': 0, // Incompatible with prettier
		'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
		'no-console': 'error', // airbnb is using warn
		'no-unused-vars': 'error',
		'no-alert': 'error', // airbnb is using warn
		'no-param-reassign': 'off', // Not our taste?
		"radix": "off", // parseInt, parseFloat radix turned off. Not my taste.
		'react/require-default-props': 'off', // airbnb use error
		'react/forbid-prop-types': 'off', // airbnb use error
		'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
		'prefer-destructuring': 'off',
		'no-alert': 'off',
		'react/no-find-dom-node': 'off', // I don't know
		'react/no-did-mount-set-state': 'off',
		'react/no-unused-prop-types': 'off', // Is still buggy
		'react/jsx-one-expression-per-line': 'off',
		// "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
		// "jsx-a11y/label-has-for": [2, {
		// 	"required": {
		// 		"every": ["id"]
		// 	}
		// }], // for nested label htmlFor error
		// quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'jsx-quotes': ['error', 'prefer-single'],
		'prettier/prettier': ['error'],
	},
};