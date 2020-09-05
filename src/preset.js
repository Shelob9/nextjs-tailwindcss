const { Preset } = require('use-preset');

// prettier-ignore
module.exports = Preset.make('NextJS Tailwind CSS')

	.editJson('package.json')
        .copyTemplates()
		.merge({
			devDependencies: {
				'@tailwindcss/ui': '^0.3',
				'@tailwindcss/typography': '^0.2',
				'postcss-nested': '^4',
				'postcss-import': '^12',
				'autoprefixer': '^9.6',
				tailwindcss: '^1.8.2',
			},
		})
		.indentWith('    ')
		.chain()

	.installDependencies()
		.if(({ flags }) => Boolean(flags.interaction))
		.for('node')
		.title('Install Node dependencies')
		.chain()
		
