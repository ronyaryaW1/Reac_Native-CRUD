import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_EVENT_ERROR } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: {
    // flex: 1,
    alignSelf: 'center',
    width: scale(300),
    height: scale(100),
    marginBottom: METRICS.baseMargin
  },
  appTitle: { fontSize: 18, color: COLOR_BLACK, marginBottom: METRICS.doubleSection },
  forgetPass: {
    alignSelf: 'flex-end',
    marginRight: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection
  },
  margin: { marginBottom: METRICS.baseMargin },
  outlined: { backgroundColor: COLOR_WHITE, borderColor: COLOR_EVENT_ERROR, borderWidth: 2 },
  outlinedText: { color: COLOR_EVENT_ERROR }
});

export default styles;
