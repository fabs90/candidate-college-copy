import axios from 'axios'

export const fetchArticles = async () => {
  try {
    const response = await axios.get("/api/articles")
    return response.data.data
  }
  catch(error) {
    console.error("Failed to fetch articles: ", error)
    throw error
  }
}