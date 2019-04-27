import React from 'react'
import WebView  from 'react-native-webview'

const MyWebView = props => {
  const defaultPage = "https://www.gofundme.com/70ln46w"
  const page = props.page || defaultPage
  return (
    <WebView style={styles.webView} source={{ uri: page }} />
  )
}

const styles = {
  webView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginTop: 20
  }
}

export default MyWebView