import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { ScrollView } from 'react-native-web';
export default class index extends  React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      promotion: [
        {id:1,title:'January Offer',description:'Get cashback up to %30 for all transaction'},
        {id:3,title:'February Offer',description:'Get cashback up to %30 for all transaction'},
        {id:4,title:'February Offer',description:'Get cashback up to %30 for all transaction'},
        {id:5,title:'February Offer',description:'Get cashback up to %30 for all transaction'},
      ],
      category: [
        {id:1,title:'All',icon:require('../../../assets/food.png')},
        {id:2,title:'Medicines',icon:require('../../../assets/medicine.png')},
        {id:3,title:'Vegatables',icon:require('../../../assets/vegetable.png')},
        {id:4,title:'Fruits',icon:require('../../../assets/fruits.png')},
        {id:5,title:'Utilities',icon:require('../../../assets/utility.png')}
      ],
      products: [
        {id:1,image:require('../../../assets/elma.png'),title:'Apple',price:'15$'},
        {id:2,image:require('../../../assets/vs.png'),title:'Vişne',price:'11$'},
        {id:3,image:require('../../../assets/banan.png'),title:'Banana',price:'25$'}
      ]
    }
  }
  renderPromationItem = ({ item, index }) => {
    return <View style={styles.promotionItem} key={index}>
      <Text style={styles.promisonItemTitle}>{item.title}</Text>
      <Text style={styles.promisonItemDescription}>{item.description}</Text>
    </View>
  }
  renderCategoryItem = ({ item, index }) => {
    return <View style={styles.categoryItem} key={index} >
      <View stlye={styles.categoryItemIconContainer}>
        <Image source={item.icon} style={styles.categoryItemIcon} />
      </View>
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
    </View>
  }
  renderProductItem = ({ item, index }) => {
    return <View style={styles.productItem} key={index} >
      <View stlye={styles.productItemImageContainer}>
        <Image source={item.image} style={styles.productItemImage} />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.productItemTitle}>{item.title}</Text>
        <Text style={styles.productItemPrice}>{item.price}</Text>
      </View>
    </View>
  }
  render() {
    const { promotion,category,products } = this.state;
    return (
      <SafeAreaView showsVerticalScrollIndicator={false} stlye={{ flex: 1 }}>
        <View style={styles.header}>
          <View>
            <Text style={{ fontFamily: 'Poppin', fontSize: 18, color: '#535353', fontWeight: 500, marginBottom: 3 }}>Selam, İsmail</Text>
            <Text style={{ fontFamily: 'Poppin', fontSize: 14, color: '#2EB086' }}>Türkiye, Şanlıurfa</Text>
          </View>
          <View>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1645090531075-73d2b277c7d8?ixlib=rb-1.2.1' }} style={styles.avatar} />
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Best Safety Standarts amid  Covid -19</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.searcArea}>
              <View style={styles.searchInputContainer}>
                <Icon name={'search'} color={'#BBBBBB'} size={16} style={{ position: 'absolute', left: 5, top: 15 }}></Icon>
                <TextInput placeholder='Search' placeholderTextColor={'#BBBBBB'} style={styles.searchInput}></TextInput>
              </View>
              <View style={styles.searchButtonContainer}><TouchableOpacity style={styles.searchButton}><Text><Icon name={'sliders-h'} size={16}></Icon></Text></TouchableOpacity></View>
              
            </View>
            <View style={styles.promotion}>
              <FlatList
                style={{ paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                data={promotion}
                horizontal={true}
                renderItem={this.renderPromationItem}
              />
            </View>
            <View style={styles.categoryArea}>
              <View style={styles.categoryAreaTopBar}>
                <View><Text style={{ fontSize: 18, color: '#535353', fontWeight: '500' }}>Categories</Text></View>
                <View><Text stlye={{ fontFamily: 'Poppin', fontSize: 15, color: '#FBA346' }}>View All</Text></View>
              </View>
              <View style={{ marginTop: 20 }}>
                <FlatList
                  style={{ paddingHorizontal: 10, }}
                  showsHorizontalScrollIndicator={false}
                  data={category}
                  horizontal={true}
                  renderItem={this.renderCategoryItem}
                />
              </View>
            </View>
            <View style={styles.categoryArea}>
              <View style={styles.categoryAreaTopBar}>
                <View><Text style={{ fontFamily: 'Poppin', fontSize: 18, color: '#535353', fontWeight: '500' }}>Featured Products</Text></View>
                <View><Text stlye={{ fontFamily: 'Poppin', fontSize: 15, color: '#FBA346' }}>View All</Text></View>
              </View>
              <View style={{ marginTop: 20 }}>
                <FlatList
                  style={{ paddingHorizontal: 10, paddingVertical: 10 }}
                  showsHorizontalScrollIndicator={false}
                  data={products}
                  horizontal={true}
                  renderItem={this.renderProductItem}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#313552'
  },
  banner: {
    backgroundColor: '#2EB086',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 14,
    fontFamily: 'Poppin'
    
  },
  searcArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  searchInput: {
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 30
  },
  searchButtonContainer: {
    padding: 15,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  promotion: {
    marginTop: 20
  },
  promotionItem: {
    backgroundColor: '#2EB086',
    padding: 10,
    flex: 1,
    width: 280,
    height: 152,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  // https://colorhunt.co/palette/313552b8405e2eb086eee6ce
  promisonItemTitle: {
    color: '#EEE6CE',
    fontSize: 25,
    fontWeight: "500",
    fontFamily: 'Poppin'
  },
  promisonItemDescription: {
    color: 'white',
    marginTop: 20,
    fontWeight: "500",
    fontSize: 18,
    fontFamily: 'Poppin'
    
  },
  categoryAreaTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  categoryArea: {
    marginTop: 20
  },
  categoryItem: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryItemIconContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryItemIcon: {
    width: 60,
    height: 60,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryItemTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#535435',
    fontFamily: 'Poppin',
  },
  productItem: {
    width: 160,
    height: 168,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    justifyContent: 'center',
  },
  productItemImageContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productItemImage: {
    width: 100,
    height: 100
  },
  productItemTitle: {
    color: '#1D1D1D',
    fontSize: 18,
    fontFamily: 'Poppin',
  },
  productItemPrice: {
    color: '#4A4A4A',
    marginTop: 5
  }
});
