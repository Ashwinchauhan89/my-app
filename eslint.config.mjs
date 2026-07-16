import nextPlugin from "@next/eslint-plugin-next";

export default [
	{
		files: ["**/*.{js,jsx,mjs,cjs}"],
		plugins: {
			"@next/next": nextPlugin,
		},
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			"@next/next/no-html-link-for-pages": "error",
			"@next/next/no-sync-scripts": "error",
		},
	},
];
