import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback,UIManager ,Platform,LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import CarSection from './common/CardSectiion';
import * as action from '../_actions'
import CardSection from './common/CardSectiion';



class ListIteam extends Component {
constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }


componentWillUpdate() {
 LayoutAnimation.spring();
}

  rederDescription() {
    if (this.props.expanded) {
      return (


        <CardSection>
          <Text style={{flex:1}}>{this.props.libraries.description}</Text>
        </CardSection>

      )

    }
  }

  render() {
    console.log(this.props)
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.libraries.id)}
      >

        <View>
          <CarSection>
            <Text style={{ paddingLeft: 15, fontSize: 18 }}>
              {this.props.libraries.title}
            </Text>
          </CarSection>
          {this.rederDescription()}
        </View>

      </TouchableWithoutFeedback>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.libraries.id
  return { expanded: expanded };
}


export default connect(mapStateToProps, action)(ListIteam);