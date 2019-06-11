import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity, Image, FlatList } from "react-native"
import { Carousel } from '@ant-design/react-native'
import TopBar from '../../components/TopBar'
import { Style } from '../../global';

const screen = Dimensions.get('window')
var listNewData = [
  {
    "id": "cjvnv4lvs02br0791r1ur9bvo",
    "articleURL": "https://mp.weixin.qq.com/s/LIJ2S3KYnZVejTXuqDqOBw",
    "imgURL": "https://upload-images.jianshu.io/upload_images/14609368-da340042bd5209e2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
    "source": "域乎",
    "title": "【科技百咖】域乎CEO曹胜虎：主动拥抱传统企业 区块链+IOT落地创新场景",
    "sourceAt": "2019年5月4日"
  },
  {
    "id": "cjvnv4lvs02br0791r1ur9bvo",
    "articleURL": "https://mp.weixin.qq.com/s/LIJ2S3KYnZVejTXuqDqOBw",
    "imgURL": "https://upload-images.jianshu.io/upload_images/14609368-da340042bd5209e2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
    "source": "域乎",
    "title": "【科技百咖】域乎CEO曹胜虎：主动拥抱传统企业 区块链+IOT落地创新场景",
    "sourceAt": "2019年5月4日"
  },
  {
    "id": "cjvnv4lvs02br0791r1ur9bvo",
    "articleURL": "https://mp.weixin.qq.com/s/LIJ2S3KYnZVejTXuqDqOBw",
    "imgURL": "https://upload-images.jianshu.io/upload_images/14609368-da340042bd5209e2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
    "source": "域乎",
    "title": "【科技百咖】域乎CEO曹胜虎：主动拥抱传统企业 区块链+IOT落地创新场景",
    "sourceAt": "2019年5月4日"
  }
]

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNewData: listNewData
    }
  }

  static navigationOptions = {
    header: null
  }

  _swiperItemDom = (item) => (
    <TouchableOpacity
      style={[{ height: 180, width: screen.width }]}
      activeOpacity={0.5}
      onPress={() => {
        this.props.navigation.navigate('ArticleDom', { artUrl: item.articleURL, title: item.title })
      }}
    >
      <Image
        source={{ uri: item.imgURL }}
        style={[{ height: 180, width: screen.width - 40, borderRadius: 10 }]}
      />
    </TouchableOpacity>
  )

  _carouselDom = () => (
    <Carousel
      style={styles.wrapper}
      // autoplay
      infinite
      afterChange={this.onHorizontalSelectedIndexChange}
    >
      {this._swiperItemDom(this.state.listNewData[0])}
      {this._swiperItemDom(this.state.listNewData[1])}
      {this._swiperItemDom(this.state.listNewData[2])}
    </Carousel>
  )

  _newsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemWrp}
      activeOpacity={0.5}
      onPress={() => { this.props.navigation.navigate('ArticleDom', { artUrl: item.articleURL, title: item.title }) }}
    >
      <Text style={styles.leftWrp}>{item.title}</Text>
      <Image
        style={{ width: 130, height: 75, borderRadius: 4 }}
        source={{ uri: item.imgURL }}
      />
      <View style={styles.itemBot}>
        <Text style={[styles.norText, { color: Style.themeColor, marginRight: 5 }]}>{item.source}</Text>
        <Text style={styles.norText}>{item.sourceAt}</Text>
      </View>
    </TouchableOpacity>
  )

  _listDom() {
    return (
      <FlatList
        data={this.state.listNewData}
        extraData={this.state}
        renderItem={this._newsItem}
        keyExtractor={(item) => item.id}
      // style={{ marginBottom: 50 }}
      />
    );
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <TopBar
            title="发现"
            isShowScan={false}
          />
          {this._carouselDom()}
          {this._listDom()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollWrp: {
    width: screen.width,
    paddingHorizontal: 20
  },
  wrapper: {
    height: 180,
    borderRadius: 10,
    marginBottom: 30
  },
  itemWrp: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    position: 'relative',
    borderBottomColor: Style.eeeColor,
    borderBottomWidth: 1
  },
  leftWrp: {
    flex: 1,
    fontSize: Style.smlFontSize,
    color: "#000",
    marginRight: 10
  },
  itemBot: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 10,
    left: 0
  }
})