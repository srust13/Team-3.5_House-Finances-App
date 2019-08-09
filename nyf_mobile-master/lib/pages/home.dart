import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:nyf_mobile/components/balance_card.dart';
import 'package:nyf_mobile/components/transaction_list.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _buildHome();
  }

  Widget _buildHome() {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.all(20.0),
          child: BalanceCard(),
        ),
        Expanded(
          child: TransactionList(),
        ),
      ],
    );
  }
}
