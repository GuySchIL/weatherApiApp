import React from "react"
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utilities/weatherType"

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    tempStyles,
    feels
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <StatusBar />
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 10
  },
  feels: {
    color: "black",
    fontSize: 30
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 44
  },
  message: {
    fontSize: 24
  }
})

export default CurrentWeather
