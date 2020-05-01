/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { JestHookEmitter } from 'jest-watcher';
import { Context } from 'jest-runtime';
import { Config } from '@jest/types';
import { AggregatedResult } from '@jest/test-result';
import { ChangedFilesPromise } from 'jest-changed-files';
import FailedTestsCache from './FailedTestsCache';
import TestWatcher from './TestWatcher';
import { Filter } from './types';
export default function runJest({ contexts, globalConfig, outputStream, testWatcher, jestHooks, startRun, changedFilesPromise, onComplete, failedTestsCache, filter, }: {
    globalConfig: Config.GlobalConfig;
    contexts: Array<Context>;
    outputStream: NodeJS.WriteStream;
    testWatcher: TestWatcher;
    jestHooks?: JestHookEmitter;
    startRun: (globalConfig: Config.GlobalConfig) => void;
    changedFilesPromise?: ChangedFilesPromise;
    onComplete: (testResults: AggregatedResult) => void;
    failedTestsCache?: FailedTestsCache;
    filter?: Filter;
}): Promise<void | null>;
//# sourceMappingURL=runJest.d.ts.map