/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// forked from https://github.com/microsoft/vscode/blob/1.67.1/extensions/markdown-language-features/src/slugify.ts

/* eslint-disable no-useless-escape */

import type { Slugify } from './types';

export const githubSlugify: Slugify = (str) =>
  encodeURI(
    str
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace whitespace with -
      .replace(
        /[\]\[\!\'\#\$\%\&\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~\`。，、；：？！…—·ˉ¨‘’“”々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝]/g,
        '',
      ) // Remove known punctuators
      .replace(/^\-+/, '') // Remove leading -
      .replace(/\-+$/, ''), // Remove trailing -
  );
