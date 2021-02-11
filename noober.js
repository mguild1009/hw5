function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

//buttons

let AllButtons = document.querySelectorAll('.filter-button')
let allRidesButton = document.querySelector('#all-filter')
let NooberPurpleButton = document.querySelector('#noober-purple-filter')
let NooberPoolButton = document.querySelector('#noober-pool-filter')
let NooberXLButton = document.querySelector('#noober-xl-filter')
let NooberXButton = document.querySelector('#noober-x-filter')

console.log(AllButtons)

for(let j=0; j < AllButtons.length; j++) {
  AllButtons[j].addEventListener ('click', async function(event) {

    let button = AllButtons [j]
    console.log(button)
    console.log(j)
  })
}

//when all rides is clicked
allRidesButton.addEventListener('click', async function(event){
event.preventDefault()

//remove backround color of any previously clicked noober list
  allRidesButton.classList.remove('bg-gray-300')
  NooberPurpleButton.classList.remove('bg-gray-300')
  NooberPoolButton.classList.remove('bg-gray-300')
  NooberXLButton.classList.remove('bg-gray-300')
  NooberXButton.classList.remove('bg-gray-300')

  allRidesButtonclassList.add('bg-gray-300')

  console.log('The All Rides button was clicked')
  let output = document.querySelector('.rides')
  output.innerHTML = ' '

  //request the datea from our API
  let url = 'https://kiei451.com/api/rides.json'
  let response = await fetch(url)

  renderRides(json)

})

// when Noober purple is pressed

NooberPurpleButton.addEventListener('click',async function(event) {
event.preventDefault()

allRidesButton.classList.remove('bg-gray-300')
NooberPurpleButton.classList.remove('bg-gray-300')
NooberPoolButton.classList.remove('bg-gray-300')
NooberXLButton.classList.remove('bg-gray-300')
NooberXButton.classList.remove('bg-gray-300')

NooberPurpleButton.add('bg-gray-300')
console.log('The Noober Purple button was clicked')
let output = document.querySelector('.rides')
output.innerHTML = ' '

  //request the datea from our API
  let url = 'https://kiei451.com/api/rides.json'
  let response = await fetch(url)
  let json = await response.json()
  const newArray = new Array()

  for(let i=0; i<json.lenght; i++) {

    let ride=json[i]
let ServiceLevel= levelOfService(ride)

if(ServiceLevel == "Noober Purple"){
  newArray.push(ride) 
    }
  }
renderRides(newArray)
})

// when Noober pool is pressed

NooberPoolButton.addEventListener('click',async function(event) {
  event.preventDefault()
  
  allRidesButton.classList.remove('bg-gray-300')
  NooberPurpleButton.classList.remove('bg-gray-300')
  NooberPoolButton.classList.remove('bg-gray-300')
  NooberXLButton.classList.remove('bg-gray-300')
  NooberXButton.classList.remove('bg-gray-300')
  
  NooberPoolButton.add('bg-gray-300')
  console.log('The Noober Pool button was clicked')
  let output = document.querySelector('.rides')
  output.innerHTML = ' '
  
    //request the datea from our API
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    const newArray = new Array()
  
    for(let i=0; i<json.lenght; i++) {
  
      let ride=json[i]
      let ServiceLevel= levelOfService(ride)
  
      if(ServiceLevel == "Noober Pool"){
      newArray.push(ride) 
      }
    }
    renderRides(newArray)
// when Noober XL is pressed

    NooberXLButton.addEventListener('click',async function(event) {
      event.preventDefault()
      
      allRidesButton.classList.remove('bg-gray-300')
      NooberPurpleButton.classList.remove('bg-gray-300')
      NooberPoolButton.classList.remove('bg-gray-300')
      NooberXLButton.classList.remove('bg-gray-300')
      NooberXButton.classList.remove('bg-gray-300')
      
      NooberXLButton.add('bg-gray-300')
      console.log('The Noober XL button was clicked')
      let output = document.querySelector('.rides')
      output.innerHTML = ' '
      
        //request the datea from our API
        let url = 'https://kiei451.com/api/rides.json'
        let response = await fetch(url)
        let json = await response.json()
        const newArray = new Array()
      
        for(let i=0; i<json.lenght; i++) {
      
          let ride=json[i]
          let ServiceLevel= levelOfService(ride)
      
          if(ServiceLevel == "Noober XL"){
          newArray.push(ride) 
          }
        }
// Noober x is pressed

    NooberXButton.addEventListener('click',async function(event) {
      event.preventDefault()
      
      allRidesButton.classList.remove('bg-gray-300')
      NooberPurpleButton.classList.remove('bg-gray-300')
      NooberPoolButton.classList.remove('bg-gray-300')
      NooberXLButton.classList.remove('bg-gray-300')
      NooberXButton.classList.remove('bg-gray-300')
      
      NooberXButton.add('bg-gray-300')
      console.log('The Noober X button was clicked')
      let output = document.querySelector('.rides')
      output.innerHTML = ' '
      
        //request the datea from our API
        let url = 'https://kiei451.com/api/rides.json'
        let response = await fetch(url)
        let json = await response.json()
        const newArray = new Array()
      
        for(let i=0; i<json.lenght; i++) {
      
          let ride=json[i]
          let ServiceLevel= levelOfService(ride)
      
          if(ServiceLevel == "Noober X"){
          newArray.push(ride) 
          }
        }

        renderRides(newArray)
      })
    })
  }
