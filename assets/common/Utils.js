import Storage from 'react-native-storage';
import ReactNative,{Vibration} from 'react-native'
import { AsyncStorage } from 'react-native';
var storage = new Storage({
		  size: 1000,
		  defaultExpires: null,
		  enableCache: true,
		  storageBackend: AsyncStorage,
		})
	global.storage = storage
class utils {

	vibrate(){
		Vibration.vibrate([0,20,], false);
	}

	toast(msg){
		ReactNative.ToastAndroid.show(msg,ReactNative.ToastAndroid.SHORT);
	}

}
const Utils=new utils();
export default Utils;
