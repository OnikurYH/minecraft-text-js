import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';

const baseConfig = {
  input: 'src/index.ts',
  external: [
    'jquery'
  ],
};

const extensions = [
  '.js', '.ts',
];

const plugins = [
  resolve({ extensions }),
  babel({
    extensions,
    exclude: 'node_modules/**',
  }),
];

export default [
  {
    ...baseConfig,
    output: {
      file: 'dist/minecraft_text.esm.js',
      format: 'esm',
      name: 'MinecraftText',
      sourcemap: true,
    },
    plugins: [...plugins],
  },
  {
    ...baseConfig,
    output: [
      {
        file: 'dist/minecraft_text.min.js',
        format: 'umd',
        name: 'MinecraftText',
        sourcemap: true,
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
