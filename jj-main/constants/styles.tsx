import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';

    const { width, height } = Dimensions.get('window');
        const widthTela = width;
        const heightTela = height;

        export const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#1b0c32',
                alignItems: 'center',
              },
              title:{
                color: '#FFFFFF',
                fontSize: 40,
                fontFamily: "Oswald_500Medium"
              },
              contentReader:{
                marginTop: 100,
                margin: 30,
              },
              contentFooter:{
                margin: 30,
              },
              centerContent:{
                marginTop: 300
              },
              titleContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              },
              stepContainer: {
                gap: 8,
                marginBottom: 8,
              },
              reactLogo: {
                height: 178,
                width: 290,
                bottom: 0,
                left: 0,
                position: 'absolute',
              },
            botao:{
              backgroundColor: 'red',
              color: '#FFFFFF',
              borderRadius: 10,
              padding: 10,
              width: widthTela * 0.8,
              height: heightTela * 0.07,
              alignItems: 'center',
              justifyContent: 'center'
            },
            input:{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              padding: 10,
              width: widthTela * 0.8,
              height: heightTela * 0.07,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 10,
              color: '#1b0c32',
              fontSize: 20,
              fontFamily: "Oswald_500Medium"
            },
            textoListaVazia: {
                  color: '#FFFFFF',
                  fontSize: 20,
            },

        })