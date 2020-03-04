import axios from 'axios'

const url = 'uliftu.helioha.com'

const getJSON = async () => {
  const response = await axios.get(url)
  console.log(response.data)
  return response.data
}

export default {
  getJSON
}
