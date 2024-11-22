// Import Package
import { useEffect, useState } from "react"

// Import Service
import { fetchTestimonials } from "@/api/testimonialService";

// Data Types
export interface Testimonials {
  id: number,
  name: string,
  division: string,
  position: string,
  image: string,
  testimonial: string,
  batch: number,
  created_at: string
}

export const useTestimonialsData = () => {
  // Variables
  const [testimonials, setTestimonials] = useState<Testimonials[]>([])
  const [randomTestimonials, setRandomTestimonials] = useState<Testimonials[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Used to get testimonials data
  const initializeTestimonials = async() => {
    setIsLoading(true)
    try {
      const data = await fetchTestimonials()

      const getRandomTestimonials = (arr: Testimonials[], total: number) => {
        const testiWithSort = arr.sort(() => 0.5 - Math.random())
        return testiWithSort.slice(0, total)
      }

      setTestimonials(data)
      setRandomTestimonials(getRandomTestimonials(data, 9))
      setIsLoading(false)
    } catch(error) {
      console.log("Error :", error)
    }
  }

  useEffect(() => {
    initializeTestimonials()
  }, [])

  return {testimonials, randomTestimonials, isLoading}
}