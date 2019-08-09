import 'package:flutter/material.dart';
import 'package:nyf_mobile/components/user_icon.dart';
import 'package:nyf_mobile/data/transaction.dart';

class ReviewForm extends StatefulWidget {
  ReviewForm({Key key, this.transaction}) : super(key: key);

  final Transaction transaction;

  @override
  _ReviewFormState createState() => _ReviewFormState();
}

class _ReviewFormState extends State<ReviewForm> {
  @override
  Widget build(BuildContext context) {
    List<UserAmt> people = widget.transaction.people;

    return Form(
      child: SizedBox(
        height: 500,
        child: ListView.builder(
          itemCount: people.length,
          itemBuilder: (BuildContext context, int index) {
            return Container(
              // TODO: use user's actual name
              child: Row(
                children: <Widget>[
                  // UserIcon(user: API.getUser()),
                  Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Colors.lightBlue,
                    ),
                    child: Text("yo"),
                  ),
                  Column(
                    children: <Widget>[
                      Container(
                        child: Text(people[index].user),
                      ),
                      Container(
                        child: TextFormField(
                          decoration: InputDecoration(
                            icon: Icon(Icons.attach_money),
                            hintText: "",
                            labelText: "Partial Amount",
                          ),
                          validator: (value) {
                            isNumeric(string) => num.tryParse(string) != null;
                            if (!isNumeric(value)) {
                              return 'Please enter a valid number';
                            }
                            return null;
                          },
                        ),
                      )
                    ],
                  )
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}
