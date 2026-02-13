import {User} from '../../shared/models/user/user.interface.ts';

export interface UserState {
  user: User | null;
}