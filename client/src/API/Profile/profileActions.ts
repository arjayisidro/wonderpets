import axios from 'axios';
import { dispatch } from '../../Store/GlobalStore';

export const getCurrentProfile = () => {
  axios
    .get('/api/profile')
    .then((response) => {
      dispatch.loginStore.getCurrentProfile(response.data);
    })
    .catch((err) => {
      dispatch.loginStore.getCurrentProfile({
        id: '',
        role: 0,
        userName: '',
        email: '',
        avatar: '',
      });
    });
};
