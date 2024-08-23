import { Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
  bgVariant: string;
  textVariant: string;
  IconLeft: string;
  IconRight: string;
  className?: string;
}

const CustomButton = ({
  bgVariant = "primary",
  textVariant = "default",

  ...props
}: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.IconLeft && <IconLeft />}
      <Text>{props.title}</Text>
      {props.IconRight && <IconRight />}
    </TouchableOpacity>
  );
};
export default CustomButton;
