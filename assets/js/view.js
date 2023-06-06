function viewPatients(div_id) {
  let list_loading = document.getElementById('list-loading')

  web3.eth.net
    .isListening()
    .then((s) => {
      console.log('Connected to node...')

      contract.methods
        .patientCount()
        .call()
        .then(function (count) {
          list_loading.style.display = 'none'
          count++
          console.log(count)
          web3.eth.getAccounts().then(function (accounts) {
            let list_container = document.getElementById(div_id)
            list_container.innerHTML = ''

            let header = document.createElement('div')
            header.id = 'list-header'
            header.className = 'list-row'
            list_container.appendChild(header)

            let header_items = [
              'First Name',
              'Last Name',
              'Blood Type',
              'Medical Insurance #',
              'Height',
              'Weight',
              'Status',
            ]

            for (let i = 0; i < header_items.length; i++) {
              let item = document.createElement('div')
              item.id = 'list-item-' + (i + 1)
              item.className = 'list-item list-item-' + (i + 1)
              header.appendChild(item)
              item.innerHTML = header_items[i]
            }
            if (count == 1) {
              let row = document.createElement('div')
              row.id = 'list-row-empty'
              row.className = 'list-row'
              list_container.appendChild(row)
              row.innerHTML = 'The list is currently empty.'
            } else {
              for (let i = 1; i < count; i++) {
                contract.methods
                  .getPatient(i)
                  .call()
                  .then(function (result) {
                    console.log(result, i)

                    let row = document.createElement('div')
                    row.id = 'list-row-' + i
                    row.className = 'list-row'
                    list_container.appendChild(row)

                    for (let j = 0; j < header_items.length; j++) {
                      let item = document.createElement('div')
                      item.id = 'list-item-' + i + '-' + (j + 1)
                      item.className = 'list-item list-item-' + (j + 1)
                      row.appendChild(item)
                      item.innerHTML = result[j]
                    }
                  })
              }
            }
          })
        })
        .catch((err) => {
          console.log('Failed with error: ' + err)
        })
    })
    .catch((e) => {
      console.log('Not connected to blockchain: ', e)
      let list_container = document.getElementById('list-container')
      list_container.innerHTML = ''

      list_loading.style.display = 'none'

      let list_error = document.createElement('list-error')
      list_error.id = 'list-error'
      list_error.className = 'error-box'
      list_container.appendChild(list_error)
      list_error.innerHTML = e
    })
}

function viewDonors(div_id) {
  let list_loading = document.getElementById('list-loading')

  web3.eth.net
    .isListening()
    .then((s) => {
      console.log('Connected to node...')

      contract.methods
        .donorCount()
        .call()
        .then(function (count) {
          list_loading.style.display = 'none'
          count++
          console.log(count)
          web3.eth.getAccounts().then(function (accounts) {
            let list_container = document.getElementById(div_id)
            list_container.innerHTML = ''

            let header = document.createElement('div')
            header.id = 'list-header'
            header.className = 'list-row'
            list_container.appendChild(header)

            let header_items = [
              'First Name',
              'Last Name',
              'Blood Type',
              'Medical Insurance #',
              'Height',
              'Weight',
              'Status',
            ]

            for (let i = 0; i < header_items.length; i++) {
              let item = document.createElement('div')
              item.id = 'list-item-' + (i + 1)
              item.className = 'list-item list-item-' + (i + 1)
              header.appendChild(item)
              item.innerHTML = header_items[i]
            }
            if (count == 1) {
              let row = document.createElement('div')
              row.id = 'list-row-empty'
              row.className = 'list-row'
              list_container.appendChild(row)
              row.innerHTML = 'The list is currently empty.'
            } else {
              for (let i = 1; i < count; i++) {
                contract.methods
                  .getDonor(i)
                  .call()
                  .then(function (result) {
                    console.log(result, i)

                    let row = document.createElement('div')
                    row.id = 'list-row-' + i
                    row.className = 'list-row'
                    list_container.appendChild(row)

                    for (let j = 0; j < header_items.length; j++) {
                      let item = document.createElement('div')
                      item.id = 'list-item-' + i + '-' + (j + 1)
                      item.className = 'list-item list-item-' + (j + 1)
                      row.appendChild(item)
                      item.innerHTML = result[j]
                    }
                  })
              }
            }
          })
        })
        .catch((err) => {
          console.log('Failed with error: ' + err)
        })
    })
    .catch((e) => {
      console.log('Not connected to blockchain: ', e)
      let list_container = document.getElementById('list-container')
      list_container.innerHTML = ''

      list_loading.style.display = 'none'

      let list_error = document.createElement('list-error')
      list_error.id = 'list-error'
      list_error.className = 'error-box'
      list_container.appendChild(list_error)
      list_error.innerHTML = e
    })
}
