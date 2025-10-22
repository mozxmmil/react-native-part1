import { Pressable, Text } from "react-native";

export default function ButtonComp({ tilte, onPress,Style }) {
  return (
    <Pressable onPress={onPress} style={Style}>
      <Text>{tilte}</Text>
    </Pressable>
  );
}
