const axios = require('axios');
const fs = require('fs');

const url = 'https://github.com/medve1343/Portfolio/blob/main/2024_Resume_smith_johnson.pdf';

axios({
    method: 'get',
    url: url,
    responseType: 'stream',
})
.then(response => {
    response.data.pipe(fs.createWriteStream('2024_Resume_smith_johnson.pdf'));
})
.catch(error => {
    console.error('Error downloading PDF:', error);
});