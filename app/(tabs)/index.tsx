import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [screen, setScreen] = useState('setup');
  const [rawText, setRawText] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSaveSetup = () => {
    const lines = rawText.split('\n');
    const parsed = lines.map((line, index) => {
      const priceMatch = line.match(/\d+/);
      const nameMatch = line.replace(/[0-9!@#$%^&*()_\-=+]/g, '').trim();
      if (nameMatch && priceMatch) {
        return { id: index.toString(), name: nameMatch, price: parseInt(priceMatch[0]) };
      }
      return null;
    }).filter(item => item !== null);

    if (parsed.length === 0) {
      Alert.alert("Hata", "Lütfen ürün ve fiyat girin. Örn: Cay 10");
      return;
    }
    setProducts(parsed);
    setScreen('sales');
  };

  if (screen === 'setup') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Kermes Kasa Kurulum</Text>
        <Text style={styles.info}>Ürünleri alt alta yazın (Örn: Simit 20):</Text>
        <TextInput 
          multiline 
          style={styles.textArea} 
          placeholder="Cay 10&#10;Simit 25"
          value={rawText} 
          onChangeText={setRawText} 
        />
        <TouchableOpacity style={styles.bigButton} onPress={handleSaveSetup}>
          <Text style={styles.buttonText}>KASAYI AÇ →</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixedHeader}>
        <Text style={styles.totalText}>TOPLAM: {total} TL</Text>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.actionButton, {backgroundColor: '#FF9800'}]} onPress={() => {
            if(cart.length > 0) {
              const last = cart[cart.length-1];
              setTotal(total - last.price);
              setCart(cart.slice(0, -1));
            }
          }}>
            <Text style={styles.buttonSmallText}>GERİ AL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, {backgroundColor: '#F44336'}]} onPress={() => {
            if(total > 0) {
              setCart([]);
              setTotal(0);
              Alert.alert("Satış Kaydedildi", "Yeni müşteriye geçebilirsiniz.");
            }
          }}>
            <Text style={styles.buttonSmallText}>TEMİZLE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productButton} onPress={() => {
            setCart([...cart, item]);
            setTotal(total + item.price);
          }}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price} TL</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={{padding: 15, alignItems: 'center'}} onPress={() => setScreen('setup')}>
        <Text style={{fontSize: 18, color: '#666'}}>← Ürünleri Düzenle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 15 },
  title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 40 },
  info: { fontSize: 16, color: '#666', marginBottom: 10, textAlign: 'center' },
  textArea: { flex: 1, backgroundColor: 'white', fontSize: 22, padding: 20, borderRadius: 15, borderWidth: 1, borderColor: '#ccc', textAlignVertical: 'top' },
  bigButton: { backgroundColor: '#4CAF50', padding: 25, borderRadius: 20, marginVertical: 20, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  buttonSmallText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  fixedHeader: { backgroundColor: 'white', padding: 20, borderRadius: 20, marginBottom: 15, marginTop: 40, elevation: 5 },
  totalText: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: '#2E7D32' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  actionButton: { padding: 15, borderRadius: 12, width: '48%', alignItems: 'center' },
  productButton: { backgroundColor: '#2196F3', flex: 1, margin: 8, height: 120, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  productName: { color: 'white', fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  productPrice: { color: 'white', fontSize: 18, marginTop: 5 }
});