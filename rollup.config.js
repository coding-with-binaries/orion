import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';

export default {
  external: [...Object.keys(packageJson.dependencies)],
  input: 'src/components/index.ts',
  output: {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    minify({
      comments: false
    }),
    typescript(),
    commonjs()
  ]
};
