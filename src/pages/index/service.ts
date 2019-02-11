import Api from '../../utils/request'

export const getLists = data => {
  return Api.getLists(data)
}

export const getSchoolList = () => {
  // return Api.getSchoolList()
  console.log('++++++++++++++++++++++++++++++++++++++    Api:', Api)
}
