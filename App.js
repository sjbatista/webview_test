import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView 
      style={styles.container}
      source={{ html: `
      <html>

        <head>
          <meta name= "viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        </head>

        <body>
      
        <style>
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }
          .btn{
            width:100%;
            height:20px;
            background-color:#069;
            text-align:center;
            color:white;
          }
        </style>
        
        <div id="btn" class="btn">Clique here !</div>

        <script>
          var el = document.getElementById('btn');
          el.addEventListener('click', ()=>{
            alert('click !');
          });
        </script>
        </body>

      </html> 
    
      ` }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
