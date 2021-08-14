import { getCharge } from "vanna/api"
import { createDoc, createSignerLinkFromCreateDocResponse } from "vanna/zapsign"

export default async (req, res) => {
  const {chargeId} = req.body
  const [error, charge] = await getCharge({id: chargeId})

  if(!charge) {
    console.log({error})
    res.json({error: error})
    return 
  }

  const doc = await createDoc({
    name: charge.customer.name,
    taxId: charge.customer.taxId,
  })

  const signerLink = createSignerLinkFromCreateDocResponse(doc)

  if(error) {
    console.log(error)
    res.json({error: error})
  } else {
    res.json({signerLink})
  }
}