import { RuleType } from './interfaces';

export const getInitialAlertState = (ruletype: RuleType, hasnumber: boolean) => {
    switch (ruletype) {
        case RuleType.afktimer:
        case RuleType.buff:
        case RuleType.model:
        case RuleType.stat:
            return false;
        case RuleType.chat:
        case RuleType.popup:
            return undefined;
        case RuleType.xpgain:
            return hasnumber ? false : undefined;
    }
}
