import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:nyf_mobile/components/user_icon.dart';
import 'package:nyf_mobile/data/transaction.dart';

class TransactionItem extends StatefulWidget {
  List<Transaction> transactions;

  TransactionItem({Key key, this.transactions}) : super(key: key);
  // TransactionItem({this.transactions});

  @override
  _TransactionItemState createState() => _TransactionItemState();
}

class _TransactionItemState extends State<TransactionItem> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemCount: widget.transactions.length,
        itemBuilder: (BuildContext context, int index) {
          return Container(
            padding: EdgeInsets.all(14.0),
            margin:
                EdgeInsets.only(bottom: 4.0, left: 8.0, right: 8.0, top: 4.0),
            height: 68,
            color: Colors.white,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              // UserIcon(user: sampleTrans[index].purchaser),
              children: <Widget>[
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Container(
                      child: Text('${widget.transactions[index].comment}',
                          style: TextStyle(fontSize: 18.0)),
                    ),
                    Container(
                      height: 5,
                    ),
                    Container(
                      child: Text(
                        ('${widget.transactions[index].dateTime}')
                            .substring(0, 10),
                        style: TextStyle(
                          fontSize: 10.0,
                        ),
                      ),
                    ),
                  ],
                ),
                Text('\$' + '${widget.transactions[index].totalPrice}',
                    style: TextStyle(fontSize: 24.0)),
              ],
            ),
          );
        },
      ),
    );
  }
}
