import React, { useState } from "react";
import { View, Picker } from "react-native";

export default function AlarmPicker({ onChange }) {
  const [time, setTime] = useState("07:00");

  const times = [];

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      times.push(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
      );
    }
  }

  return (
    <View>
      <Picker
        selectedValue={time}
        onValueChange={(value) => {
          setTime(value);
          onChange(value);
        }}
      >
        {times.map((t) => (
          <Picker.Item key={t} label={t} value={t} />
        ))}
      </Picker>
    </View>
  );
}