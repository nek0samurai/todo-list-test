module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	plugins: ['node', 'prettier', 'svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs', 'svelte.config.js', 'vite.config.js'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: ['*.ts', '*.js', '*.svelte'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'node/no-missing-import': 'off',
				'node/no-unpublished-import': 'off',
			},
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: ['./tsconfig.json'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'prettier/prettier': 'error',
		'block-scoped-var': 'error',
		eqeqeq: 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'eol-last': 'error',
		'prefer-arrow-callback': 'error',
		'no-trailing-spaces': 'error',
		quotes: ['warn', 'single', { avoidEscape: true }],
		'no-restricted-properties': [
			'error',
			{
				object: 'describe',
				property: 'only',
			},
			{
				object: 'it',
				property: 'only',
			},
		],
	},
};
