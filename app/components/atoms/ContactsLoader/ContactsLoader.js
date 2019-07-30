import React from 'react';
import { Image, View } from "react-native";

import LoadingScreen from "../../screens/LoadingScreen/LoadingScreen";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import CelText from "../CelText/CelText";
import Spinner from "../Spinner/Spinner";
import CelButton from "../CelButton/CelButton";
import { heightPercentageToDP } from "../../../utils/styles-util";


class ContactsLoader extends React.Component {
  constructor(props) {
    super(props)
    this.interval = null

    this.state = {
      start: new Date().getTime(),
      time: new Date().getTime()
    }

  }

  componentDidMount() {
    const self = this
    this.interval = setInterval(() => self.setState({ time: new Date().getTime() }), 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { navigateTo } = this.props
    const { time, start } = this.state

    if ((time - start) < 3000) return <LoadingScreen />

    return (
      <RegularLayout fabType={'hide'}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: heightPercentageToDP("80%"),
        }}>
          <View>
            <Image
              source={require("../../../../assets/images/victory-bear3x.png")}
              style={{
                width: 140,
                height: 140,
                resizeMode: "contain"
              }}/>
          </View>

          <CelText margin="20 0 15 0" align="center" type="H4">Your contacts are being imported. We’ll let you know once this import is complete.</CelText>

          <View style={{ alignSelf: "center" }}>
            <Spinner size={80} />
          </View>

          <CelButton margin={'10 0 0 0'} onPress={() => navigateTo('WalletLanding') }>Return to App</CelButton>
        </View>
      </RegularLayout>
    )
  }
}

export default ContactsLoader
