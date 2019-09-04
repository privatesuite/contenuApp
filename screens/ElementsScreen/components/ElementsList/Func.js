import config from '../../../../constants/Config'

export async function GetElements () {
  // This is so chunky due to the fact I need to mutate the API data to the data format accepted by <SectionList/>
  // Hopefully the API can be updated to slim this, Preferably in how we store Templates & information about them :D
  let data = (await (await fetch(`${config.endpoint}/elements`)).json()).map(element => {return {id: element.id, template: element.template?element.template:config.noTemplate, ...element.fields}})
  let templateData = {}; (await (await fetch(`${config.endpoint}/templates`)).json()).forEach(template => {templateData[template.id] = template.name}) // This line will be removed with API update
  let templates = []; data.forEach(element => {if(!templates.includes(element.template)) {templates.push(element.template?element.template:config.noTemplate)}})
  let mutatedData = []; templates.forEach(template => {
    let toPush = {title: `${templateData[template]}s`, data: []}
    data.forEach(element => {if(element.template === template) toPush.data.push(element);})
    toPush.data.sort(((a, b) => (a.title > b.title) ? 1 : -1))
    mutatedData.push(toPush)
  })
  return mutatedData
}
