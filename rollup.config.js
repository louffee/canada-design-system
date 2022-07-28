import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

const ESM_FILENAME = 'build/esm/index.js'
const CJS_FILENAME = 'build/cjs/index.js'
const TYPES_FILENAME = 'build/types/index.d.ts'

const TSCONFIG_FILENAME = '../../tsconfig.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: CJS_FILENAME,
        format: 'cjs',
        sourcemap: false,
        name: 'react-ts-lib',
        exports: 'auto',
      },
      {
        file: ESM_FILENAME,
        format: 'esm',
        sourcemap: false,
        exports: 'auto',
      },
    ],
    plugins: [
      external({ includeDependencies: ['react', 'react-dom'] }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: TSCONFIG_FILENAME }),
      postcss(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: TYPES_FILENAME, format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]
