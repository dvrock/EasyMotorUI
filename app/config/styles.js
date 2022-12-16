import {Platform} from 'react-native';
import colors from './colors'
export default{
    customText: {
        color: colors.dark,
        ...Platform.select({
          ios: {
            fontSize: 20,
          },
          android: {
            fontSize: 18,
          },
        }),
      },
}