import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';

const LoginHome = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.stackLayout}>
        <Text style={styles.title}>Login</Text>
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          title="Login"
          onPress={handleLogin}
          color="#1E90FF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 40, top: 100, bottom: 100 },
  stackLayout: { width: "100%" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "500", color: "#4A4A4A", marginBottom: 8 },
  input: { width: "100%", padding: 12, marginBottom: 16, borderWidth: 1, borderColor: "#ccc", borderRadius: 8 },
});

export default LoginHome;