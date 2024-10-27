import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NullPhoto} from '../../assets/icon';
import {Button, Gap} from '../../components/atoms';

export default function MoneyTracker() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Money Tracker</Text>
        <Image source={NullPhoto} style={styles.profile} />
      </View>
      <Text style={styles.subtitle}>Track your money</Text>
      <Gap height={20} />
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Your Balance</Text>
        <Text style={styles.balanceAmount}>Rp. 10.000.000</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.subTotal}>
        <Text style={styles.labelOn}>Cash on Hand</Text>
        <Text style={styles.amountOn}>Rp. 4.000.000</Text>
      </View>
      <View style={styles.subTotal}>
        <Text style={styles.labelOn}>Cash on Bank</Text>
        <Text style={styles.amountOn}>Rp. 6.000.000</Text>
      </View>
      <View style={styles.transactionSection}>
        <Text style={styles.transactionTitle}>Add Transaction</Text>
        <Button text="Cash On Hand" />
        <Gap height={26} />
        <Button text="Cash On Bank" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profile: {
    width: 50,
    height: 50,
    top: 32,
  },
  title: {
    fontSize: 24,
    color: '#020202',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    color: '#8D92A3',
    fontSize: 14,
    marginLeft: 40,
    fontFamily: 'Poppins-Regular',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  balanceSection: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    marginTop: 20,
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  balanceLabel: {
    fontSize: 18,
    color: '#020202',
    fontFamily: 'Poppins-Regular',
  },
  balanceAmount: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    marginVertical: 3,
    marginHorizontal: 50,
    color: '#000000',
  },
  line: {
    width: 350,
    height: 2,
    backgroundColor: '#000000',
    marginVertical: 8,
  },
  labelOn: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 4,
    marginLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
  amountOn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
  },
  transactionSection: {
    marginVertical: 60,
  },
  transactionTitle: {
    fontSize: 18,
    color: '#020202',
    fontFamily: 'Poppins-Regular',
  },
});
