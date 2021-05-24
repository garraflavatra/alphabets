import clear from 'rollup-plugin-clear';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'alphabets',
  },
  plugins: [
    terser(),
    clear({ targets: ['dist'] }),
  ],
};
