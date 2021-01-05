import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather as Icon } from "@expo/vector-icons"
import { storage } from '../src/firebase/firebase'
import SecCameraComponent from '../components/SecCameraComponent'

export default function CameraComponent() {

    return (
        // <Text>Here</Text>
        <SecCameraComponent />
    )
    // const [hasPermission, setHasPermission] = useState(null);
    // const [type, setType] = useState(Camera.Constants.Type.back);
    // const [previewVisible, setPreviewVisable] = useState(false)
    // const [capturedImage, setCapturedImage] = useState(null)

    // const allInputs = {imgUrl: ''}
    //     const [imageAsFile, setImageAsFile] = useState('')
    //     const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    // const cameraRef = useRef();

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, [])

    // if (hasPermission === null) {
    //     return <View />;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>
    // }


    // const takePicture = async() => {
    //     if (cameraRef.current) {
    //         const options = {quality: 0.5, base64: true, };

    //         const picture = await cameraRef.current.takePictureAsync(options);

    //         // console.log(picture)
    //         setPreviewVisable(true)
    //         setCapturedImage(picture)
    //         // handleImageAsFile()
    //         // console.log(cameraRef.current.getAvailablePictureSizesAsync());
    //         const source = picture.uri;
    //         console.log(source, 'what is this')
            
    //     }
        
        
        
    // }


    
    // const savePicture = () => {
    //     uploadImage()
    // }


    // const retakePicture = () => {
    //     setCapturedImage(null)
    //     setPreviewVisable(false)
    // }


    // return (
    //         <View style={styles.container}>
    //             {previewVisible && capturedImage ? (
    //                 <CameraPreview photo={capturedImage} savePicture={savePicture} retakePicture={retakePicture} />
    //             ) : (
    //                 <Camera style={{flex: 1,}} type={type} ref={cameraRef}>
    //                     <View style={{ position: 'absolute', bottom: 0, flex:1, width: '100%', justifyContent: 'space-between', padding: 20, flexDirection: 'row'}}>
    //                         <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', flex: 1,}}>
    //                             <View>
    //                                 <TouchableOpacity
    //                                     style={styles.button}
    //                                     onPress={takePicture}
    //                                     >
    //                                     <Icon name='aperture' size={50} color='white' />
    //                                 </TouchableOpacity>
    //                             </View>
    //                         </View>
    //                     </View>
    //                 </Camera>
    //             )}
    //         </View>
    // )
}

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         width: '100%',
//     },
//     camera: {
//         flexDirection: 'row',
//         height: '100%',
//     }
// })

// const CameraPreview = ({photo, retakePicture, savePhoto}) => {
//     console.log('this is the photo', photo)
//     return (
//       <View
//         style={{
//           backgroundColor: 'transparent',
//           flex: 1,
//           width: '100%',
//           height: '100%'
//         }}
//       >
//         <ImageBackground
//           source={{uri: photo && photo.uri}}
//           style={{
//             flex: 1
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'column',
//               padding: 15,
//               justifyContent: 'flex-end'
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between'
//               }}
//             >
//               <TouchableOpacity
//                 onPress={retakePicture}
//                 style={{
//                   width: 130,
//                   height: 40,
  
//                   alignItems: 'center',
//                   borderRadius: 4
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: '#fff',
//                     fontSize: 20
//                   }}
//                 >
//                   Re-take
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={savePhoto}
//                 style={{
//                   width: 130,
//                   height: 40,
  
//                   alignItems: 'center',
//                   borderRadius: 4
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: '#fff',
//                     fontSize: 20
//                   }}
//                 >
//                   save photo
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </View>
//     )
//   }
