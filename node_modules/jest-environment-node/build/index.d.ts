/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { Context, Script } from 'vm';
import { Config, Global } from '@jest/types';
import { ModuleMocker } from 'jest-mock';
import { JestFakeTimers as LegacyFakeTimers, LolexFakeTimers } from '@jest/fake-timers';
import { JestEnvironment } from '@jest/environment';
declare type Timer = {
    id: number;
    ref: () => Timer;
    unref: () => Timer;
};
declare class NodeEnvironment implements JestEnvironment {
    context: Context | null;
    fakeTimers: LegacyFakeTimers<Timer> | null;
    fakeTimersLolex: LolexFakeTimers | null;
    global: Global.Global;
    moduleMocker: ModuleMocker | null;
    constructor(config: Config.ProjectConfig);
    setup(): Promise<void>;
    teardown(): Promise<void>;
    runScript(script: Script): any;
    getVmContext(): Context | null;
}
export = NodeEnvironment;
//# sourceMappingURL=index.d.ts.map