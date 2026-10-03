import { User } from './types';

export const users = {
    standard: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
    lockedOut: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
} satisfies Record<string, User>;