'use strict';
import { StyleSheet } from 'react-native';

export const headerFooterStyles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5dc00',
    // alignItems: 'center',
    borderWidth: 1,
  },
  headerButtonSwivel: {
    flex: 0.5,
    backgroundColor: '#55252',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginTop: '3%',
  },
  headerButtonUser: {
    flex: 0.5,
    backgroundColor: '#55252',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '3%',
  },
  body: {
    flex: 0.8,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#5dc00',
    borderWidth: 1,
  },
  footerButtonBike: {
    flex: 0.5,
    backgroundColor: '#55252',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
  },
  footerButtonGarage: {
    flex: 0.5,
    backgroundColor: '#55252',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20%',
  },

});