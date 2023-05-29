import React, { useState, useEffect } from "react"
import * as Location from "expo-location"
import { WEATHER_API_KEY } from "@env"

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (err) {
      setError("Could not fetch weather")
      console.error(err) // Log the error for debugging
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setError("Permission to access location was denied")
        return
      }

      try {
        let location = await Location.getCurrentPositionAsync({})
        console.log("Location:", location) // Log the location object for debugging
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData()
      } catch (error) {
        setError("Error retrieving location")
        console.error(error) // Log the error for debugging
      }
    })()
  }, [lat, lon])

  console.log("Loading:", loading) // Log the loading state for debugging
  console.log("Error:", error) // Log the error state for debugging
  console.log("Weather:", weather) // Log the weather data for debugging

  return [loading, error, weather]
}
