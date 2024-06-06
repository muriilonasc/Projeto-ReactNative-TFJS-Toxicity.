import { Image,TextInput,TouchableOpacity,FlatList, StyleSheet,View,Text, Platform } from 'react-native';
import { useState } from "react";
import { styles } from '../../constants/styles'
import { toxicityClassifier, toxicityLabels } from "../../constants/tensor";
export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const [Texte, setText] = useState('');
  const [isInitialTextVisible, setIsInitialTextVisible] = useState(true);
  const [mensagemDeAviso, setMensagemDeAviso] = useState("Check the aggressiveness of your text")

  const adicionarItem = async () => {
    const predictions = await toxicityClassifier(Text)
    const labelMaisProvavel = {
      label: null,
      probabilidade: 0
    } 
    
    predictions.forEach(prediction => {
      if(prediction.label == "toxicity") {
        return
      }

      const probabilidadeDaPredictionSerVerdadeira = prediction.results[0].probabilities[1]

      if(probabilidadeDaPredictionSerVerdadeira > labelMaisProvavel.probabilidade) {
        labelMaisProvavel.label = prediction.label
        labelMaisProvavel.probabilidade = probabilidadeDaPredictionSerVerdadeira
      }

    })

    if(labelMaisProvavel.probabilidade > 0.01) {
      setMensagemDeAviso(labelMaisProvavel.label)
    } else {
      setMensagemDeAviso("no toxicy")
    }

  
    if (Texte.trim() !== '') {
 
      setItems([...items, Texte]);

      setText(''); 
    }
  };

  // const [fontsLoaded] = useFonts({
  //   Oswald_300Light,
  //   Oswald_400Regular,
  //   Oswald_500Medium,
  // })

  return (
    <View style={styles.container}>
      <View style={styles.contentReader}>
        <Text style={styles.title} >Verifique a agressividade de seu texto</Text>
        </View>
        <FlatList
        // style={styles.fat}
        data={items}
        renderItem={({ item }) => (<View style={styles.item}>
          <Text>{item.value}</Text>
        </View>
        )}
        keyExtractor={(item) => item}
         // Mensagem para lista vazia
        ListHeaderComponent={
          <View style={styles.listaVazia}>
            <Text style={styles.textoListaVazia}> Your text was: {mensagemDeAviso}</Text>
           </View> 
        }
      />
        <TextInput
            style={styles.input}
            value={Texte}
            onChangeText={setText}
            placeholder="Text here..."
        />
        
        <View style={styles.tocavel}>
      <TouchableOpacity
      
      onPress={adicionarItem}
      style={styles.botao}

      >To check</TouchableOpacity>
      </View>
    </View>
  );
}

