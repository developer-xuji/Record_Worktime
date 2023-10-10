import fetch from './fetch';

type ClockInReq = {
  location: string,
};

const punchClockIn = async (body: ClockInReq) =>
  fetch
    .post('/api/user/record', body)
    .then((res) => {
      console.log(res);
      localStorage.setItem('taskID', res.data?.data?.taskID);
      return res.status;
    })
    .catch((err) => console.log(err));

export default punchClockIn;