if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
  console.log('web3 setuppp')
} else {
  web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://mainnet.infura.io/v3/7c648fd8024b4bfd8c3e327ca2736d56'
    )
  )
  console.log('web3 setup')
}

web3.eth.getAccounts().then(function (accounts) {
  console.log(`hello: ${accounts}`)
})

// const getAc = async () => {
// 	const ac = await web3.eth.requestAccounts()
// 	console.log(`acc: ${ac}`)
// 	console.log("accounts")
// }
// getAc()

const contractAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_firstname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_lastname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_organ',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_bloodtype',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_height',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_weight',
        type: 'string',
      },
    ],
    name: 'addDonor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_firstname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_lastname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_organ',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_bloodtype',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_height',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_weight',
        type: 'string',
      },
    ],
    name: 'addPatient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'donorCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'donors',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'firstname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'lastname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'organ',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bloodtype',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'height',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'weight',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'status',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getAllDonors',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getAllPatients',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDonorCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPatientCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'patientCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'patients',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'firstname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'lastname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'organ',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bloodtype',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'height',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'weight',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'status',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_organ',
        type: 'string',
      },
    ],
    name: 'validateOrgan',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
]
const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'
const contract = new web3.eth.Contract(contractAbi, contractAddress)

function clearForm() {
  for (let i = 0; i < input_names.length; i++) {
    document.getElementById(input_names[i]).value = ''
  }
}

function checkBlockchainStatus() {
  console.log('Checking blockchain status...')

  let status = document.getElementById('status')
  let status_icon = document.getElementById('status-icon')
  let status_text = document.getElementById('status-text')

  setDefaultUser('donor')

  web3.eth.net
    .isListening()
    .then((s) => {
      console.log('Connected to node...')

      status.style.color = '#22B573'
      status_icon.style.background = '#22B573'
      status_icon.classList.remove('blink')
      status_text.innerHTML = 'Online'

      let user_profile = document.getElementById('user-profile')
      let user_obj = JSON.parse(sessionStorage.getItem('user'))

      let user_title = document.createElement('div')
      user_title.id = 'user-profile-title'
      user_profile.appendChild(user_title)
      user_title.innerHTML = 'Logged in as:'

      let user_icon = document.createElement('div')
      user_icon.id = 'user-profile-icon'
      user_profile.appendChild(user_icon)
      user_icon.innerHTML = "<i class='" + user_obj.icon + "'></i>"

      let user_input = document.createElement('select')
      user_input.id = 'user-profile-input'
      user_profile.appendChild(user_input)
      user_input.addEventListener('change', function () {
        switchUser()
      })

      let options = ['donor', 'patient', 'doctor']

      for (let i = 0; i < options.length; i++) {
        let user_option = document.createElement('option')
        user_option.value = options[i]
        user_option.text = capitalize(options[i])
        user_input.appendChild(user_option)
      }

      loadMenuBox()
    })
    .catch((err) => {
      console.log('Not connected to blockchain: ', err)
      setDefaultUser('offline')
      status.style.color = '#D84A49'
      status_icon.style.background = '#D84A49'
      status_icon.classList.remove('blink')
      status_text.innerHTML = 'Offline'
      loadMenuBox()
    })
}

const defaultUser = '0xA8272c7f78f0C70264fE136d3EBdFa116621B83c'

function setDefaultUser(user_type) {
  let user_obj = {}
  if (user_type == 'donor') {
    user_obj.type = 'donor'
    user_obj.address = defaultUser
    user_obj.icon = 'fas fa-hand-holding-heart'
  } else {
    user_obj.type = 'offline'
  }

  sessionStorage.setItem('user', JSON.stringify(user_obj))
}

function switchUser() {
  let user_input = document.getElementById('user-profile-input')
  let obj = {}
  obj.type = user_input.value
  if (user_input.value == 'donor') {
    obj.address = defaultUser
    obj.icon = 'fas fa-hand-holding-heart'
  } else if (user_input.value == 'patient') {
    obj.address = '0x0a02D0A98FD47A5B1eF2789fd342c2Fb9c69447f'
    obj.icon = 'fas fa-user-injured'
  } else if (user_input.value == 'doctor') {
    obj.address = defaultUser
    obj.icon = 'fas fa-stethoscope'
  } else {
    console.log("User type doesn't exist...")
  }
  let user_icon = document.getElementById('user-profile-icon')
  user_icon.innerHTML = "<i class='" + obj.icon + "'></i>"

  sessionStorage.setItem('user', JSON.stringify(obj))

  loadMenuBox()
}

function addPatient(firstname, lastname, bloodtype, medid, height, weight) {
  console.log(
    'Calling addPatient function... (' +
      firstname +
      ', ' +
      lastname +
      ', ' +
      bloodtype +
      ', ' +
      medid +
      ',' +
      height +
      ', ' +
      weight +
      ')'
  )

  let form_response = document.getElementById('form-response')
  let form_response_loading = document.getElementById('form-response-loading')
  let form_response_message = document.getElementById('form-response-message')

  form_response.style.display = 'none'
  form_response_loading.style.display = 'flex'

  web3.eth.net
    .isListening()
    .then((s) => {
      console.log('Connected to node...')

      web3.eth.getAccounts().then(function (accounts) {
        console.log(`Accounts here: ${accounts}`)
        contract.methods
          .addPatient(firstname, lastname, bloodtype, medid, height, weight)
          .send(
            {
              from: accounts[0],
              gas: 3000000,
            },
            function (response) {
              if (response == null) {
                console.log('Success!')
                form_response_message.innerHTML = 'Success!'
                form_response.style.background = '#22B573'
                clearForm()
              }
            }
          )
          .catch((err) => {
            console.log('Failed with error: ' + err)
            form_response_message.innerHTML = err
            form_response.style.background = '#D84A49'
          })
        form_response.style.display = 'flex'
        form_response_loading.style.display = 'none'
      })
    })
    .catch((err) => {
      console.log('Not connected to blockchain: ', err)
      form_response_message.innerHTML = err
      form_response.style.background = '#D84A49'
      form_response.style.display = 'flex'
      form_response_loading.style.display = 'none'
    })
}

function addDonor(firstname, lastname, bloodtype, medid, height, weight) {
  console.log(
    'Calling addDonor function... (' +
      firstname +
      ', ' +
      lastname +
      ', ' +
      bloodtype +
      ', ' +
      medid +
      ',' +
      height +
      ', ' +
      weight +
      ')'
  )

  let form_response = document.getElementById('form-response')
  let form_response_loading = document.getElementById('form-response-loading')
  let form_response_message = document.getElementById('form-response-message')

  form_response.style.display = 'none'
  form_response_loading.style.display = 'flex'

  web3.eth.net
    .isListening()
    .then((s) => {
      console.log('Connected to node...')

      web3.eth.getAccounts().then(function (accounts) {
        contract.methods
          .addDonor(firstname, lastname, bloodtype, medid, height, weight)
          .send(
            {
              from: accounts[0],
              gas: 3000000,
            },
            function (response) {
              if (response == null) {
                console.log('Success!')
                form_response_message.innerHTML = 'Success!'
                form_response.style.background = '#22B573'
                clearForm()
              }
            }
          )
          .catch((err) => {
            console.log('Failed with error: ' + err)
            form_response_message.innerHTML = err
            form_response.style.background = '#D84A49'
          })
        form_response.style.display = 'flex'
        form_response_loading.style.display = 'none'
      })
    })
    .catch((err) => {
      console.log('Not connected to blockchain: ', err)
      form_response_message.innerHTML = err
      form_response.style.background = '#D84A49'
      form_response.style.display = 'flex'
      form_response_loading.style.display = 'none'
    })
}