import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

const plugins = [
  babel({
    exclude: 'node_modules/**',
  }),
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/minecraft_text.js',
      format: 'umd',
      name: 'MinecraftText',
    },
    plugins: [...plugins],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/minecraft_text.min.js',
        format: 'umd',
        name: 'MinecraftText',
      },
      {
        file: 'docs/js/minecraft_text.min.js',
        format: 'umd',
        name: 'MinecraftText',
      },
    ],
    plugins: [
      ...plugins,
      minify(),
    ],
  },
];
