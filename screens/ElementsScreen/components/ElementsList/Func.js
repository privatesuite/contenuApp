import config from '../../../../constants/Config'

export async function GetElements () {
  let data = await (await fetch(`${config.endpoint}/elements`)).json()
  return data.map(element => {return {id: element.id, template: element.template, ...element.fields}})
}
