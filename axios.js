import axios from './node_modules/axios';

const getData = async() => {
    const result = await axios({
        method: 'POST',
        url: 'https://62b9d24aff109cd1dc9bec86.mockapi.io/users',
        
      });
      return result;
}
const res = await getData()
console.log({ data })
document.body.innerHTML = "<h1>Today's date is " + res.data + "</h1>"

