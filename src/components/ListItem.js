import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { weatherType } from "../utilities/weatherType"
import moment from "moment"

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, datesTextWrapper } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color={"white"} />
      <View style={datesTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("HH:mm:ss")}</Text>
      </View>
      <Text style={temp}>{`High ${Math.round(min)}°/ Low ${Math.round(
        max
      )}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "lightslategrey"
  },
  temp: {
    color: "white",
    fontSize: 20
  },
  date: {
    color: "white",
    fontSize: 15
  },
  datesTextWrapper: {
    flexDirection: "column"
  }
})

export default ListItem
