import axios from "axios"

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get("/api/testimonials")
    return response.data.data
  } catch(error) {
    console.log("Failed to fetch testimonials: ", error)
    throw error
  }
}