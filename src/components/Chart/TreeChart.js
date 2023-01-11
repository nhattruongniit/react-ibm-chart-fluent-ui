import React from 'react'
import TreeMap from "react-d3-treemap";

const data = {
  name: "",
  children: [
    { name: "care centre hospital", value: 2, children: null },
    { name: "tertiary care centre", value: 2, children: null },
    { name: "hospital staff members", value: 2, children: null },
    { name: "cross sectional survey", value: 2, children: null },
    { name: "knowledge", value: 18, children: null },
    { name: "swine flu pandemic", value: 1, children: null },
    { name: "swine flu control", value: 4, children: null },
    { name: "swine flu centre", value: 1, children: null },
    {
      name: "influenza",
      value: 34,
      children: null
    },
    { name: "influenza pandemics", value: 1, children: null },
    { name: "respondents", value: 27, children: null },
    { name: "term pandemic", value: 1, children: null },
    { name: "present study group", value: 1, children: null },
    { name: "study", value: 14, children: null },
    { name: "group meetings", value: 2, children: null },
    { name: "public health agencies", value: 2, children: null },
    { name: "public health campaign", value: 1, children: null },
    { name: "public health communications", value: 1, children: null },
    { name: "public responses", value: 1, children: null },
    { name: "general public", value: 3, children: null },
    { name: "public gatherings", value: 2, children: null },
    { name: "public behavior", value: 1, children: null },
    { name: "world health organization", value: 0, children: null },
    { name: "pandemic alert status", value: 1, children: null },
    { name: "world", value: 11, children: null },
    { name: "risk area", value: 2, children: null },
    { name: "attitude", value: 14, children: null },
    { name: "patients", value: 5, children: null },
    { name: "practice", value: 10, children: null },
    { name: "disease", value: 22, children: null }
  ]
}
export default function TreeMapComponent() {
  
  return (
    <TreeMap
      nodeStyle={{
        fontSize: 12,
        paddingLeft: 10,
        stroke: "transparent !important",
        alignSelf: "center !important",
        alignContent: "center !important"
      }}
      data={data}
    />
  )
}