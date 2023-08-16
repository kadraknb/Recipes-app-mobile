import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const RadioButton = ({ option, setSelectedOption }) => {
  const [selected, setSelected] = useState(option[0].value);

  const chargeOption = (value) => {
    setSelected(value)
    setSelectedOption(value)
  }

  return (
    <View>
      <View style={styles.container}>
        {option.map(({ label, value }) => (
          <TouchableOpacity
            key={value}
            style={styles.radioButton}
            onPress={() => {
              chargeOption(value);
            }}
          >
            <View
              style={[
                styles.radioButtonIcon,
                selected === value && styles.radioButtonSelected,
              ]}
            />
            <Text>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5,
    justifyContent: 'space-evenly'
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 3,
  },
  radioButtonSelected: {
    borderColor: 'blue',
    backgroundColor: 'blue',
  },
});

export default RadioButton;
