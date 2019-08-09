import 'package:flutter/material.dart';
import 'package:nyf_mobile/components/add_form.dart';

class AddPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Add Transaction"),
        leading: IconButton(
          icon: Icon(Icons.close),
          tooltip: 'Cancel',
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: AddForm(),
    );
  }
}
