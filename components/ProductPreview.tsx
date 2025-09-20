import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function ProductPreview() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1759104000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o6Q80-yuG8ja4oqoHHJqEazxwLRtLqyOtNnzySWBEWj1cWHdHVW9bsHXn4HJ4RqeJcNOwtaJZNnD9QT8L2obSGu9Y-ACN28YL4fyy8WFGWq1RQFgFqLcla8x0ywYmFnYJXgv-EG~1wBqJoMsnYfPYD7K2wjJrfQau3nB8JQTjEOJVBZ8vskR08J7H89j1-Ql99Jqen1hv36aMsd-jRlxppJVUKYbMyxcCFugv3WfkG-ZTZoEPkJaHZ6r0n0pQfZL7UK7wN3x5J7CxsKGdqx9~H0OU18l8P1kLfuX56OCJIAoppaxrRe-uSqmLTR5y4vpdl6B9kVSzwl-FPnH4BXq4w__',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(15, 65, 66, 0.3)', 'rgba(13, 21, 32, 0.8)']}
          style={styles.gradient}
        >
          <View style={styles.divider} />
          <View style={styles.productContainer}>
            <ImageBackground
              source={{
                uri: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e1fd/12cc/1f07e108d7ede7c64862c13778bef074?Expires=1759104000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SKHkAO8VbNUZzJgdLPg~g73oHJ7ClyywDgB574vtJwZHwoEhirM4CjgTrHu6iSTw3EOYzHmT1cOVTTfzZuLYu6hOmH522bjuOK0HOPmD3~5woKaOUp~v~kvOGGB9eYrX~MRtdCQAIa1~zPfaaiNrPnn2Dl9xeruJf4UuYo9UnY1axTmj1T1eO~5OXiDlLiVm1iOa0qWGEMYwbvpTZaMAGi4z4ZYYEagRCKIFygZWCU1Xkg8NlHs8Yu2iT6zrXajCwI5OUclEudKsN5HJHj9RFYuV-vV4kMnyIZFzamqXsYTXx9Hp7ajb2FS03CzTNrBpyMDo0zsLi7Si2BlqHmmiig__',
              }}
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 530,
    width: width,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  divider: {
    position: 'absolute',
    left: 12,
    top: 0,
    bottom: 0,
    width: 9,
    backgroundColor: 'transparent',
    borderLeftWidth: 9,
    borderLeftColor: '#91EFF7',
    borderRightWidth: 0,
  },
  productContainer: {
    position: 'absolute',
    bottom: 70,
    width: 154,
    height: 235,
    borderRadius: 29,
    overflow: 'hidden',
  },
  productImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
