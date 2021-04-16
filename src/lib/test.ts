import * as fetch from 'isomorphic-fetch'

const test = async () => {
  const ss = await fetch('./users.json', {
    method: 'GET'
    //   body: buffer,
    //   headers: Object.assign({}, headers, { authorization: token }),
    //   signal
  })
    .then((response) => {
      if (response.ok) {
        const data = response.headers
          .get('content-type')
          ?.startsWith('application/json')
          ? response.json()
          : response.text()

        return { data, headers: response.headers, status: response.status }
      } else {
        throw response
      }
    })

    .catch((error) => {
      console.info(error)
      // handleRequestError(error, {
      //   serviceName,
      //   functionName,
      //   env: qualifier,
      //   requestId: headers.requestId
      // })
    })

  console.info(ss)
}

test()
