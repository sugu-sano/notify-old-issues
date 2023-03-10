import commandLineArgs from 'command-line-args';
import { optionDefinitions } from './option-definitions';
import { Args } from './types/args';

/**
 * コマンドライン引数を取得する関数。
 *
 * @returns 引数のオブジェクト
 */
export function get_args(): Args {
  return commandLineArgs(optionDefinitions) as Args;
}
