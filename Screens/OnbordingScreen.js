import React from 'react'
import { Text, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

    return(
        <View
            style={{
                width:5,
                height:5,
                marginHorizontal:3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity style={{marginLeft: 25}} {...props}>
     <Text>Next</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity style={{marginRight: 25}} {...props}>
      <Text>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginRight: 25}} {...props}>
      <Text>Done</Text>
  </TouchableOpacity>

);

const OnboardingScreen = ({navigation}) =>{
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboard1.png')} />,
            title: 'Connect To The MaJHi',
            subtitle: 'A New Way To Connect To The World.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboard2.png')} />,
            title: 'Share your Thoughts',
            subtitle: 'Share Your Thought With Similar Kind of People.',
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

