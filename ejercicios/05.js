const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  // function isSpain(array){
  //   const nonCapitalArray = array.filter(obj=>obj.capital===false)
  //   let isSpainArray = [];
  //   nonCapitalArray.map(obj=>{

  //       isSpainArray.push({
  //           city:obj.city,
  //           isSpain: obj.country==='Spain' ? true : false
  //       })
  //   })
  //   return isSpainArray
  // }

  function isSpain(array){
    return array.filter(obj=>!obj.capital).map(c=>({
     city: c.city,
     isSpain: c.country==='Spain' 
   }))
 }

  module.exports=isSpain