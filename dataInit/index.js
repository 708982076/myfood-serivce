const fs = require('fs');

function storeMoban(data){
  const result = {}
  const shopInfo = data.shopInfo;
  result.food_menu = data.categoryList.map(m => {
    let name, type, foods;

    name = m.categoryName;
    type = m.categoryType;
    foods = m.spuList.map( f => {
      let name, price, oldPrice, description, sellCount, rating, info, icon, image;

      name = f.spuName;
      oldPrice = f.originPrice;
      price = f.currentPrice;
      description = f.spuDesc;
      sellCount = f.saleVolume;
      rating = Math.floor(Math.random() * 100);
      info = f.spuPromotionInfo;
      icon = '';
      image = f.littleImageUrl;

      return {
        name, price, oldPrice, description, sellCount, rating, info, icon, image
      }

    })

    return { name, type, foods }
  });
  result.name = shopInfo.shopName;
  result.description = '美团外卖';
  result.deliveryTime = shopInfo.deliveryTime;
  result.score = parseFloat(Math.floor(Math.random() * 4) + '.' + Math.floor(Math.random() * 9));
  result.serviceScore = parseFloat(Math.floor(Math.random() * 4) + '.' + Math.floor(Math.random() * 9));
  result.foodScore = parseFloat(Math.floor(Math.random() * 4) + '.' + Math.floor(Math.random() * 9));
  result.rankRate = parseFloat(Math.floor(Math.random() * 99) + '.' + Math.floor(Math.random() * 9));
  result.minPrice = shopInfo.minFee
  result.deliveryPrice = shopInfo.deliveryFee;
  result.ratingCount = Math.floor(Math.random() * 99);
  result.distance = shopInfo.distance;
  result.sellCount = Math.floor(Math.random() * 99);
  result.bulletin = shopInfo.bulletin;
  result.supports = shopInfo.activityList || [].map(({actDesc, actType}) => {
    return {
      type: actType,
      description: actDesc
    }
  });
  result.avatar = shopInfo.shopPic;

  return result;
}

function commentsMoban(data) {
  const result = {};
  result.labels = data.commentLabels;
  result.comments = data.list;
  return result;
}

function shopInfoMoban(data) {
  const result = {};
  result.activityList = data.activityList;
  result.serTime = data.serTime;
  result.shopAddress = data.shopAddress;
  result.shopName = data.shopName;
  result.shopPhone = data.shopPhone;
  result.tip = data.tip;
  return result;
}

const moban = {
  stores: storeMoban,
  comments: commentsMoban,
  shopInfo: shopInfoMoban
}

const arr = [
  'stores',
  'comments',
  'shopInfo'
]

arr.forEach(filename => {
  fs.readFile(`./${filename}.json`, (err, buf) => {
    if (!err) {
      const json = buf.toString();
      const arr = [];
      JSON.parse(json).forEach((e) => {
        arr.push( moban[filename](e.data) );
      })

      const result = JSON.stringify( arr );

      fs.writeFile(`./${filename}-init.json`, result, (err) => {
        if (!err) {
          console.log('完成');
        }
      })
    }else {
      console.error(err);
    }
  })
})