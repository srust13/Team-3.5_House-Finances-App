import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:nyf_mobile/data/transaction.dart';
import 'package:nyf_mobile/components/transaction_item.dart';

class TransactionList extends StatefulWidget {
  TransactionList({Key key}) : super(key: key);

  @override
  _TransactionListState createState() => _TransactionListState();
}

class _TransactionListState extends State<TransactionList> {
  List<Transaction> transactions = sampleTrans;

  @override
  Widget build(BuildContext context) {
    return TransactionItem(transactions: transactions);
  }
}
