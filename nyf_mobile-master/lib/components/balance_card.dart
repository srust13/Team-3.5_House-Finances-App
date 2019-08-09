import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class BalanceCard extends StatefulWidget {
  BalanceCard({Key key}) : super(key: key);

  @override
  _BalanceCardState createState() => _BalanceCardState();
}

class _BalanceCardState extends State<BalanceCard> {
  @override
  Widget build(BuildContext context) {
    const headerStyle = TextStyle(
      fontSize: 16.0,
    );
    const balanceStyle = TextStyle(
      fontSize: 48.0,
      fontWeight: FontWeight.bold,
    );

    return Card(
      child: Padding(
        padding: EdgeInsets.all(24.0),
        child: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                Expanded(
                  child: Center(
                    child: Text(
                      ("Current Balance").toUpperCase(),
                      style: headerStyle,
                    ),
                  ),
                )
              ],
            ),
            Row(
              children: <Widget>[
                Expanded(
                  child: Center(
                    child: Padding(
                      padding: EdgeInsets.only(top: 12.0),
                      child: Text(
                        "\$69.85",
                        style: balanceStyle,
                      ),
                    ),
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
