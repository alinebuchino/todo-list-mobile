import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import Clipboard from "../../assets/Clipboard.png";

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={styles.image} />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradadas
      </Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
