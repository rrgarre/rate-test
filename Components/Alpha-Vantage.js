import React, {useState, useEffect} from 'react'
import {ScrollView, Text} from 'react-native'
import AlphaVantageService from '../Services/Alpha-Vantage'

// const AlphaVantage = ({lista}) => {
const AlphaVantage = () => {

  const [list, setList] = useState([])

  useEffect(()=>{
    AlphaVantageService(setList)
  }, [])



  // console.log('LISTA DESDE COMPONENTE: ', lista)
  if(!list['Meta Data']){
    return <Text>No existe contenido en la list de elemntos</Text>
  }
 
  // Parseo de los datos de la list ////////////////////////////////
  // const metaData = list['Meta Data']
  // const timeSeries = []
  // for(let clave in list['Time Series (60min)']){
  //   const linea = list['Time Series (60min)'][clave]
  //   linea.date = clave
  //   timeSeries.push(linea)
  // }
  // Parseo de los datos de la lista ////////////////////////////////

  const metaData = list['Meta Data']
  const timeSeries = Object.entries(list['Time Series (60min)']).map(([date, data]) => ({...data, date}))



  return(
    <>
      <Text>Empresa: {metaData['2. Symbol']}</Text>
      <ScrollView style={{paddingLeft:60, paddingRight:60}}>
        {
          timeSeries.map(elem => {
            return (
              <Text key={elem.date} style={{paddingTop:10}}>
                {elem.date} : {elem['4. close']}$
              </Text>
              )
          })
        }
      </ScrollView>
    </>
  )

  
}

export default AlphaVantage