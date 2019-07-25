import { FETCH_PERMISSION} from './actionTypes';

export const fetch_permission = (ReqEvent) => {
  return {
    type: FETCH_PERMISSION,
    ReqEvent
  }
};
  
