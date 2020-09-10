import React, {useState, BrowserRouter} from 'react';
import ChecronSkywalker from '../images/ChevronSkywalker';
import ChevronSkywalkerInverse from '../images/ChevronSkywalkerInverse';
// import { API_URL } from '../config.js'

const MainPage = () => {
  const [href, setHref] = useState();

  const [bottomNavState, setBottomNavState] = useState(true);
  const openCloseBottomNav = () => {
    let nextState = !bottomNavState;
    setBottomNavState(nextState)
  }
  // const [user, setUser] = useState({})
  // const [targetUser, setTargetUser] = useState(1);

  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     const token = window.localStorage.getItem('auth_token')
  //     const response = await fetch(`${API_URL}/users/token`, {
  //       method: "GET",
  //       mode: "cors",
  //       headers: { "Authorization": `Bearer ${token}` },
  //     })
  //     if (!response.ok) {
  //       console.log("this will never happen. you can quote me")
  //     } else {
  //       const json = await response.json();
  //       setUser(json);
  //     }
  //   }
  //   getCurrentUser();
  // }, [targetUser])


  const API_KEY = 'DEMO_KEY'
  const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

  const previousWeatherToggle = document.querySelector('.show-previous-weather');
  const previousWeather = document.querySelector('.previous-weather')

  const currentSolElement = document.querySelector('[data-current-sol]')
  const currentDateElement = document.querySelector('[data-current-date]')
  const currentTempHighElement = document.querySelector('[data-current-temp-high]')
  const currentTempLowElement = document.querySelector('[data-current-temp-low]')
  const windSpeedElement = document.querySelector('[data-wind-speed]')
  const windDirectionText = document.querySelector('[data-wind-direction-text]')
  const windDirectionArrow = document.querySelector('[data-wind-direction-arrow]')

  const previousSolTemplate = document.querySelector('[data-previous-sol-template]')
  const previousSolContainer = document.querySelector('[data-previous-sols]')

  const unitToggle = document.querySelector('[data-unit-toggle]')
  const metricRadio = document.getElementById('cel')
  const imperialRadio = document.getElementById('fah')

  // previousWeatherToggle.addEventListener('click', () => {
  //   previousWeather.classList.toggle('show-weather')
  // })

  // let selectedSolIndex

  // getWeather().then(sols => {
  //   selectedSolIndex = sols.length - 1
  //   displaySelectedSol(sols)
  //   displayPreviousSols(sols)
  //   updateUnits()

  //   unitToggle.addEventListener('click', () => {
  //     let metricUnits = !isMetric()
  //     metricRadio.checked = metricUnits
  //     imperialRadio.checked = !metricUnits
  //     displaySelectedSol(sols)
  //     displayPreviousSols(sols)
  //     updateUnits()
  //   })

  //   metricRadio.addEventListener('change', () => {
  //     displaySelectedSol(sols)
  //     displayPreviousSols(sols)
  //     updateUnits()
  //   })

  //   imperialRadio.addEventListener('change', () => {
  //     displaySelectedSol(sols)
  //     displayPreviousSols(sols)
  //     updateUnits()
  //   })
  // })

  // function displaySelectedSol(sols) {
  //   const selectedSol = sols[selectedSolIndex]
  //   currentSolElement.innerText = selectedSol.sol
  //   currentDateElement.innerText = displayDate(selectedSol.date)
  //   currentTempHighElement.innerText = displayTemperature(selectedSol.maxTemp)
  //   currentTempLowElement.innerText = displayTemperature(selectedSol.minTemp)
  //   windSpeedElement.innerText = displaySpeed(selectedSol.windSpeed)
  //   windDirectionArrow.style.setProperty('--direction', `${selectedSol.windDirectionDegrees}deg`)
  //   windDirectionText.innerText = selectedSol.windDirectionCardinal
  // }

  // function displayPreviousSols(sols) {
  //   previousSolContainer.innerHTML = ''
  //   sols.forEach((solData, index) => {
  //     const solContainer = previousSolTemplate.content.cloneNode(true)
  //     solContainer.querySelector('[data-sol]').innerText = solData.sol
  //     solContainer.querySelector('[data-date]').innerText = displayDate(solData.date)
  //     solContainer.querySelector('[data-temp-high]').innerText = displayTemperature(solData.maxTemp)
  //     solContainer.querySelector('[data-temp-low]').innerText = displayTemperature(solData.minTemp)
  //     solContainer.querySelector('[data-select-button]').addEventListener('click', () => {
  //       selectedSolIndex = index
  //       displaySelectedSol(sols)
  //     })
  //     previousSolContainer.appendChild(solContainer)
  //   })
  // }

  // function displayDate(date) {
  //   return date.toLocaleDateString(
  //     undefined,
  //     { day: 'numeric', month: 'long' }
  //   )
  // }

  // function displayTemperature(temperature) {
  //   let returnTemp = temperature
  //   if (!isMetric()) {
  //     returnTemp = (temperature - 32) * (5 / 9)
  //   }
  //   return Math.round(returnTemp)
  // }

  // function displaySpeed(speed) {
  //   let returnSpeed = speed
  //   if (!isMetric()) {
  //     returnSpeed = speed / 1.609
  //   }
  //   return Math.round(returnSpeed)
  // }
//-------------------------------

  // function getWeather() {
  //   return fetch(API_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       const {
  //         sol_keys,
  //         validity_checks,
  //         ...solData
  //       } = data
  //       return Object.entries(solData).map(([sol, data]) => {
  //         return {
  //           sol: sol,
  //           maxTemp: data.AT.mx,
  //           minTemp: data.AT.mn,
  //           windSpeed: data.HWS.av,
  //           windDirectionDegrees: data.WD.most_common.compass_degrees,
  //           windDirectionCardinal: data.WD.most_common.compass_point,
  //           date: new Date(data.First_UTC)
  //         }
  //       })
  //     })
  // }
  
  // const weather = getWeather();
  // console.log(weather)
//-----------------------------------------------------------
  // function updateUnits() {
  //   const speedUnits = document.querySelectorAll('[data-speed-unit]')
  //   const tempUnits = document.querySelectorAll('[data-temp-unit]')
  //   speedUnits.forEach(unit => {
  //     unit.innerText = isMetric() ? 'kph' : 'mph'
  //   })
  //   tempUnits.forEach(unit => {
  //     unit.innerText = isMetric() ? 'C' : 'F'
  //   })
  // }

  // function isMetric() {
  //   return metricRadio.checked
  // }
  let searchString = 'stars'
  

  async function sendApiRequest(href){
    let API_KEY = "HBW5c8xowLyU4NYh8rLUQY47Rth5rmaK5o7fQyWK"
    // let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
    // let response = await fetch(`https://images-api.nasa.gov/search?q={moon}&api_key=${API_KEY}`);
    let response = await fetch(`https://images-api.nasa.gov/search?q=${searchString}`);
    // https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"
//     console.log(response)
    let data = await response.json()
    console.log("data", data.collection.items[0].data[0].description)
    setHref(data.collection.items[0].links[0].href)
    console.log(href)

  }
  
  sendApiRequest();


    console.log("href",  href)
    return (
      <div id={"main-c"}>
        
        <div  className={`main-c__bottom-nav ${bottomNavState ? "open" : "closed" }`}   >
          
          
          <div className={`main-c__switch-bottom-nav ${bottomNavState ? "flipped" : "" }`} onClick={openCloseBottomNav}>
            
              {bottomNavState ? <ChecronSkywalker /> : <ChevronSkywalkerInverse />}
            
            
          </div>
        </div>
        <img className={"main-c__img"} src={href} ></img>

        

      </div>
    )

}

export default MainPage;
