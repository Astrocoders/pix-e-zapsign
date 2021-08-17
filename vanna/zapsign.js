export const createDoc = ({ name, taxId }) => {
  const url = `https://api.zapsign.com.br/api/v1/models/create-doc/?api_token=${process.env.ZAPSIGN_TOKEN.trim()}`
  const body = JSON.stringify({
    template_id: process.env.ZAPSIGN_MODELO_ID.trim(),
    signer_name: name,
    data: [
      { de: '{{name}}', para: name },
      { de: '{{taxId}}', para: taxId }
    ]
  })

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body
  }

  return fetch(
    url,
    options
  )
    .then((response) => response.json())
    .then((res) => {
      return res
    })
}

export const createSignerLinkFromCreateDocResponse = (response) => {
  const signerToken = response.signers?.[0]?.token

  return `https://app.zapsign.com.br/verificar/${signerToken}`
}
