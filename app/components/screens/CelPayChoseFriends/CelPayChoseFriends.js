import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Permissions, Contacts } from 'expo';
import { Image, TouchableOpacity, View } from 'react-native';

import * as appActions from '../../../redux/actions';
import testUtil from "../../../utils/test-util";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import CelText from '../../atoms/CelText/CelText';
import { requestForPermission, hasPermission } from '../../../utils/device-permissions';
import STYLES from '../../../constants/STYLES';
import CelButton from '../../atoms/CelButton/CelButton';
import Spinner from '../../atoms/Spinner/Spinner';
import ContactList from '../../molecules/ContactList/ContactList';
import Separator from '../../atoms/Separator/Separator';
import Icon from '../../atoms/Icon/Icon';
import { getFilteredContacts } from '../../../redux/custom-selectors';

const renderEmptyState = ({onContactImport, onSkip}) => (
  <View style={{flex: 1, alignItems: 'center', marginTop: 25}}>
    <Image source={require('../../../../assets/images/diane-sad.png')} style={{ height: 160, resizeMode: 'contain' }} />
    <CelText bold type="H1" align="center">
      Uhoh, no friends?
    </CelText>
    <CelText margin="15 0 0 0" style={{paddingHorizontal: 20}} color={STYLES.COLORS.MEDIUM_GRAY} type="H4" align="center">
      Add your contacts or connect your Facebook or Twitter so you can easily send your friends some crypto.
    </CelText>

    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <CelButton margin="30 0 0 0" onPress={onContactImport}>
        Import contacts
      </CelButton>

      <CelButton basic onPress={onSkip}>
        Skip this step
      </CelButton>
    </View>
  </View>
);

@connect(
  state => ({
    contacts: getFilteredContacts(state)
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class CelPayChoseFriends extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: null,
      hasContactPermission: false,
      isLoading: true
    };

    this.subs = [];
  }

  async componentDidMount() {
    const { navigation, actions } = this.props;
    const permission = await hasPermission(Permissions.CONTACTS);

    this.subs = [
      navigation.addListener('willBlur', () => {
        actions.updateFormField('search', "")
      }),
    ];

    if (permission) {
      const { data } = await Contacts.getContactsAsync();
      this.setContacts(data)
    }

    this.setState({
      header: {
        left: 'back',
        title: permission ? "Choose a friend to CelPay" : "CelPay",
        right: permission ? "search" : "profile"
      },
      hasContactPermission: permission,
      isLoading: false
    });
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
  }

  // TODO: contacts will come from the API and will be stored in redux and not in local state
  // setContacts = (contacts) => {
    // TODO: here we should POST contacts to API, and that API will return us filtered contacts

  // };

  handleContactImport = async () => {
    const permission = await requestForPermission(Permissions.CONTACTS);

    this.setState({
      hasContactPermission: permission
    });

    if (permission) {
      const { data } = await Contacts.getContactsAsync();
      this.setContacts(data)
    }
  };

  handleSkip = () => {
    const { actions } = this.props;
    actions.navigateTo('CelPayEnterAmount')
  };

  sendLink = () => {
    const { actions } = this.props;
    actions.navigateTo('CelPayEnterAmount')
  };

  handleContactPress = () => {
    const { actions } = this.props;
    actions.navigateTo('CelPayEnterAmount')
  };

  renderContent = () => {
    const { hasContactPermission } = this.state;
    const { contacts } = this.props;

    const EmptyState = renderEmptyState;

    return (
      !hasContactPermission
        ?
          <EmptyState onContactImport={this.handleContactImport} onSkip={this.handleSkip}/>
        :
          <View style={{flex: 1, width: '100%'}}>
            <TouchableOpacity onPress={this.sendLink} style={{flexDirection: 'row', alignItems: 'center'}}>
              <CelText color={STYLES.COLORS.CELSIUS_BLUE} bold type='H4' align='left' margin={'20 0 20 0'}>
                Send as a link
              </CelText>
              <Icon name='IconChevronRight' height={10} width={20} fill={STYLES.COLORS.MEDIUM_GRAY}/>
            </TouchableOpacity>
            <View style={{width: '100%'}}>
              <Separator size={2} opacity={0.07}/>
            </View>
            <ContactList contacts={contacts} onContactPress={this.handleContactPress}/>
          </View>
    )
  };

  renderLoader = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Spinner/></View>
  );

  render() {
    const { header, isLoading } = this.state;

    const RenderLoader = this.renderLoader;
    const RenderContent = this.renderContent;

    return (
      <RegularLayout
        header={header}
        enableParentScroll={false}
        padding={'0 20 140 20'}
      >
        {isLoading ? <RenderLoader/> : <RenderContent {...this.props}/>}

      </RegularLayout>
    );
  }
}

export default testUtil.hookComponent(CelPayChoseFriends);
