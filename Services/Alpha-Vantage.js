import axios from 'axios'

const AlphaVantage = (setList) => {
  
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      interval: '60min',
      function: 'TIME_SERIES_INTRADAY',
      symbol: 'GOOGL',
      datatype: 'json',
      output_size: 'compact'
    },
    headers: {
      'X-RapidAPI-Key': '3522b990f0msh6437513dbdc6d77p1abbb5jsnf749434201ae',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log('RESPUESTA desde SERVICIO: ', response.data)
    setList(response.data)
    // console.log('STATUS: ', response.status)
    return(response.data)
  }).catch((error) => {
    console.error('ERROR: ',error)
  });
  
}

export default AlphaVantage