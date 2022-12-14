import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex:1}}>
    <StatusBar hidden/>  
    <WebView 
      style={styles.container}
      source={{ html:  `
      <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Gallery</title>
    </head>

    <style>
        *{margin: 0;box-sizing: border-box;}

        .header{
            background-color: blueviolet;
            text-align: center;
            width: 100%;
            color: white;
            font-size: 26px;
            padding: 20px 0;
        }

        img{
            max-width: 100%;
            width: 90%;
            display: block;
            margin: 10px auto;
        
        }

        button{
            background-color: blueviolet;
            width: 200px;
            height: 40px;
            color: white;
            cursor: pointer;
        }

        .btn-load{
            padding: 30px 0;
        }

    </style>



    <body>
        <div class="header">
            Gallery app
        </div>

        <!--Gallery-->
        <div id="gallery" class="gallery">

        </div>
        <!--Gallery-->

        <div class="btn-load">
            <button id="load-more">
                Load more !
            </button>
        </div>

        <!--JS-->
        <script>

            var gallery = document.getElementById('gallery');
            var initialImages = 3;
            var loadMore = document.getElementById('load-more');
            var controlImage =0;
            
            for(var i=controlImage; i<initialImages; i++){
                gallery.innerHTML+='<img src="https://picsum.photos/800/400?random='+i+'" />';
                controlImage++;
            }

            loadMore.addEventListener('click', ()=> {

                for(var i=0; i<initialImages; i++){
                
                    let image = document.createElement('img');
                    image.src="https://picsum.photos/800/400?random="+controlImage;
                    
                    loadMore.innerHTML = "Loading...";

                    image.addEventListener('load', function(){
                        loadMore.innerHTML = "Load more !";
                    })

                    gallery.appendChild(image);
                    controlImage++;    
                }

            });



        </script> 
        <!--JS-->

    </body>



</html>
      `
      }}
    />
    </View>
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
