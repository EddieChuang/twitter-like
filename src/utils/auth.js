import axios from 'axios';

export default {

  
  signined: () => {
    return !!sessionStorage._id
  }

}