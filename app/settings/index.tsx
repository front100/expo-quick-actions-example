import { StyleSheet, Text, View } from 'react-native';
const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsPage</Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quaerat consequatur id sit
        rerum, magnam velit officia nihil maxime doloremque dolores mollitia, quia quas corporis
        fugit beatae commodi quod repudiandae.
      </Text>
    </View>
  );
};
export default SettingsPage;
const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });
