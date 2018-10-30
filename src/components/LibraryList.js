import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListIteam from './ListIteam'

class LibraryList extends Component {

componentWillMount = () => {
  const ds= new ListView.DataSource({
    rowHasChanged:(r1,r2) => r1!==r2
  });
  this.dataSource=ds.cloneWithRows(this.props.libraries)
}

renderRow(library){
  return <ListIteam libraries={library}  />
}

  render() {
    console.log(this.props)
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
  
    )


  }
}

const mapStateToProps = state => {
console.log("state" ,state)

console.log("state" ,state.libraries)

  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
