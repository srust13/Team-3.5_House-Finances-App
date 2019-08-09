import 'package:flutter/material.dart';
import 'package:nyf_mobile/components/review_form.dart';
import 'package:nyf_mobile/data/transaction.dart';

class ReviewPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Review Add"),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          tooltip: 'Back',
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: ReviewForm(
        transaction: sampleTrans[0],
      ),
    );
  }
}
